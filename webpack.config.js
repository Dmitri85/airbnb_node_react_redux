const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      { test:/\.js$/, use: 'babel-loader' , exclude: /node_modules/ },
     { test:/\.css$/, use: ['style-loader','css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'] },
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: "css-loader"
      //   })
      // },
    ]
  },
  plugins: [
    new ExtractTextPlugin("static/css/globals.css"),
    new CopyWebpackPlugin([
          { from: 'src/index.html' },
          { from: 'src/static/icons' , to: 'static/icons'},
          { from: 'src/static/css' , to: 'static/css'},
          { from: 'src/static/data' , to: 'static/data'}
      ])
  ],
  devtool:"source-map"
};