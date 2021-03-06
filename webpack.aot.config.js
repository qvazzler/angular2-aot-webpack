'use strict';
let path = require('path');
let webpack = require('webpack');
let ngtools = require('@ngtools/webpack');

module.exports = {
  entry: {
    'bootstrap.aot': './app/bootstrap.aot.ts',
  },

  output: {
    path: './dist',
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          "@ngtools/webpack"
        ]
      },
      {
        test: /\.html$/,
        use: 'raw'
      }
    ]
  },

  plugins: [
    new ngtools.AotPlugin({
      tsConfigPath: './tsconfig.aot.json',
      baseDir: path.resolve(__dirname, ''),
      entryModule: path.join(__dirname, 'app', 'main') + '#MainModule'
    }),
    // new webpack.ProgressPlugin(),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.join(process.cwd(), 'app')
    )
  ],

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app')
    ],
    extensions: ['.ts', '.js']
  },

  devtool: false
};
