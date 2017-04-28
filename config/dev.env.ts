import * as merge from 'webpack-merge';
import prodEnv from './prod.env';

export default merge(prodEnv, {
  NODE_ENV: '"development"',
} as any /* need this hack because NODE_ENV isn't a built in property */);
