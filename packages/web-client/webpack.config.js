const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html'
});

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  entry: path.resolve(__dirname, 'src', 'index.js'),
  module: {
    rules: [{
      test: /\.js$|jsx/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
    ]
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    port: 4000
  },
  plugins: [htmlPlugin]
};
