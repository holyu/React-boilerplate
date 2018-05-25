const webpack = require('webpack');
const path = require('path');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

require('dotenv').config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '' });
require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '',
});

const productionMode =
  process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'source_map';
const sourceMap = process.env.NODE_ENV === 'source_map';

module.exports = {
  mode: productionMode ? 'production' : 'development',
  entry: ['./src/app.jsx'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js',
  },
  optimization: {
    minimizer:
      productionMode && !sourceMap
        ? [
          new OptimizeCSSAssetsPlugin({
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true,
          }),
        ]
        : [],
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
        },
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          productionMode ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: {},
            },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: !!productionMode },
          },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        // use: ['file-loader'],
        use: [
          {
            loader: 'url-loader',
            options: {
              name: './img/[name].[ext]',
              limit: 10000,
            },
          },
          {
            loader: 'img-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/index.html',
      filename: 'index.html',
      favicon: './src/images/favicon.png',
      minify: productionMode
        ? {
          collapseWhitespace: true,
          preserveLineBreaks: false,
          removeComments: true,
          caseSensitive: true,
        }
        : false,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new UglifyJSPlugin({
      test: productionMode ? /\.js$/i : /$a/,
      sourceMap: true,
    }),
    new CleanWebpackPlugin('dist', { dry: !productionMode }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': productionMode ? JSON.stringify('production') : undefined,
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: productionMode ? /\.js$|\.css$|\.html$/ : /$a/,
      minRatio: 0.8,
    }),
    // new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      'process.env.FIREBASE_STOREGE_BUCKET': JSON.stringify(process.env.FIREBASE_STOREGE_BUCKET),
      'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
    }),
  ],
  devtool: productionMode ? 'none' : 'cheap-module-eval-source-map',
  devServer: productionMode
    ? {}
    : {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
    },
};
