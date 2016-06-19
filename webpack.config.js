const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: path.join(__dirname, "/public/"),
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather:'app/components/Weather.jsx',
      WeatherForm:'app/components/WeatherForm.jsx',
      WeatherMessage:'app/components/WeatherMessage.jsx',
      About:'app/components/About.jsx',
      Examples:'app/components/Examples.jsx',
      openWeatherMap:'app/api/openWeatherMap.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};