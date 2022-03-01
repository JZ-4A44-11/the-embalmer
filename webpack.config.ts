import { join } from 'path/posix';
import { Configuration } from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
  entry: './src/index.ts',
  output: {
    path: join(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  
  resolve: {
    extensions: ['.tsx', '.ts'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_module/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'index.html'),
    }),
  ],
};

export default config;
