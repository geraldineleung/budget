const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode:'development',
  devtool: 'source-map',
  entry: './www/src/index.js',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'app.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};