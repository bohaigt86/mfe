module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // deal with jsx, and convert into es5
            presets: ["@babel/preset-react", "@babel/preset-env"],
            // add features like async/await
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
