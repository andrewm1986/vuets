import versionCheck from './check-versions';
versionCheck();

process.env.NODE_ENV = 'production';

import ora from 'ora';
import * as rm from 'rimraf';
import * as path from 'path';
import * as chalk from 'chalk';
import * as webpack from 'webpack';
import config from '../config';
import * as webpackConfig from './webpack.prod.conf';

let spinner = ora('building for production...');
spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err;
  webpack(webpackConfig, function (err, stats) {
    spinner.stop();
    if (err) throw err;
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n');

    console.log(chalk.cyan('  Build complete.\n'));
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ));
  });
})
