module.exports = {
  configureWebpack: {
    devtool: "source-map",
  },
  devServer: {
    disableHostCheck: true,
    port: 8080,
    public: "0.0.0.0:8080",
  },
};
