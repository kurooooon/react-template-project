module.exports = {
  mode: "development",
  entry: "./src/App.tsx",
  output: {
    path: `${__dirname}/public`,
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
};