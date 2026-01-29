import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  rules: [
    {
      test: /\.css$/i,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
      ],
    },
    {
      test: /\.svg$/,
      type: 'asset/resource',
    }
  ],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    fallback: {
      fs: false,
      path: false
    }
  },
};
