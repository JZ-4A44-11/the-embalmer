import { join, resolve } from 'path';
import { Configuration } from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const publicDir = join(__dirname, 'public');

const config: Configuration = {
  entry: './src/main.tsx',
  output: {
    path: join(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },

  resolve: {
    modules: [resolve(__dirname, 'src'), resolve(__dirname, 'node_modules')],
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ['babel-loader'],
        exclude: /node_module/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: join(publicDir, 'index.html'),
      favicon: join(publicDir, 'favicon.jpg'),
    }),
  ],
  devtool: 'source-map',
};

export default config;
