const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    root: './index.js'
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'bundle.[name].[hash].js'
  },

  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /.+\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /.+\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env']]
          }
        }
      }
    ]
  }
};
