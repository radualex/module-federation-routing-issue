const path = require('path');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  entry: './src/index.ts',
  mode: 'development',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto',
    filename: 'index.js',
    library: {
      type: 'umd'
    }
  },
  externals: ['react', 'react-dom', 'react-router-dom'],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /nod_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-typescript',
            '@babel/preset-react',
          ],
          plugins: ['@babel/plugin-proposal-class-properties']
        },
      },
    ],
  }
};

module.exports = webpackConfig;