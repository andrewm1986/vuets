import * as utils from './utils';
import config from '../config';
let isProduction = process.env.NODE_ENV === 'production';

export default {
  loaders: Object.assign(
    { ts: 'vue-ts-loader' },
    utils.cssLoaders({
      sourceMap: isProduction ?
        config.build.productionSourceMap :
        config.dev.cssSourceMap,
      extract: isProduction
    })
  ),
  esModule: true,
};
