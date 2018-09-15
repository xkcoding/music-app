const path = require("path");

const resolve = dir => path.join(__dirname, dir);

const BASE_URL = process.env.NODE_ENV === "production" ? "/music/" : "/";

module.exports = {
  lintOnSave: true,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components"))
      .set("_v", resolve("src/views"))
      .set("api", resolve("src/api"))
      .set("_common", resolve("src/common"));
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    port: 4000
  }
};
