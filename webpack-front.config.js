const path = require('path')

module.exports = {
  mode: 'development',
  entry: './react/indecision-app/src/app.js',
  output: {
    path:path.join(__dirname,'react/indecision-app/public') ,
    filename: 'bundle-front.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname,'react/indecision-app/public'),
    port: 9000
  }
}
