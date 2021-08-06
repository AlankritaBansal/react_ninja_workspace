const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use("https://www.postman.com/collections/5dfbcd9789e5ec3722df",
    createProxyMiddleware("", {
      target: "http://localhost:3000/",
      secure: false,
      changeOrigin: true,
    })
  );
};
