const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://f4df-14-143-35-158.ngrok-free.app',
      changeOrigin: true,
    })
  );
};
