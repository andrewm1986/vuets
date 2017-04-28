import versionCheck from './check-versions';
versionCheck();

import config from '../config';
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse((config.dev.env as any).NODE_ENV);
}

import * as opn from 'opn';
import * as path from 'path';
import * as express from 'express';
import * as webpack from 'webpack';
import * as proxyMiddleware from 'http-proxy-middleware';
import webpackConfig from './webpack.dev.conf';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackHotvMiddleware from 'webpack-hot-middleware';
import * as connectHistory from 'connect-history-api-fallback';

// default port where dev server listens for incoming traffic
let port = process.env.PORT || config.dev.port;
// automatically open browser, if not set will be false
let autoOpenBrowser = !!config.dev.autoOpenBrowser;
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
let proxyTable = config.dev.proxyTable;

let app = express();
let compiler = webpack(webpackConfig);

let devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
});

let hotMiddleware = webpackHotvMiddleware(compiler, {
  log: () => {}
});


// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' });
    cb();
  });
});

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context];
  if (typeof options === 'string') {
    options = { target: options };
  }
  app.use(proxyMiddleware(options.filter || context, options));
})

// handle fallback for HTML5 history API
app.use(connectHistory());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve pure static assets
let staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

let uri = 'http://localhost:' + port;

let _resolve;
let readyPromise = new Promise(resolve => {
  _resolve = resolve;
});

console.log('> Starting dev server...');
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n');
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri);
  }
  _resolve();
});

let server = app.listen(port);

export default {
  ready: readyPromise,
  close: () => {
    server.close();
  }
};
