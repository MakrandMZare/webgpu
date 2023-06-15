const path = require("path");
const bundleOutputDir = "./dist";

module.exports = {
  entry: {
    main: "./src/main.ts"
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, bundleOutputDir),
    publicPath: 'public/dist/'
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
      }
    ]
  },
}