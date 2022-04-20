const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    bundle: path.resolve(__dirname, 'client/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[bundle][contentHash].js',
    publicPath: '/',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
    },
    compress: true,
    port: 8080,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
};

// proxy: {
//   context: ['/signup'],
//   target: 'http://localhost:3000',
// },
