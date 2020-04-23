const path = require('path');
const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('postcss-calc'),
  require('postcss-hexrgba'),
  require('autoprefixer')
]

module.exports = {
  entry: './app/assets/scripts/App.js',
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app')
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader', 'css-loader?url=false', {
            loader: 'postcss-loader',
            options: { plugins: postCSSPlugins }
          }
        ]
      }
    ]
  },

  devServer: {
    before: (app, server) => {
      server._watch('./app/**/*.html')
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 3000,
    host: '0.0.0.0'
  }
}