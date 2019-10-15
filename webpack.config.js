const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/HistoryData.js',
  output: {
      filename: 'main.js',
      publicPath: 'dist'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        }
    ]
  }
};