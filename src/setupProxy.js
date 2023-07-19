const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://f6cc-2409-408c-8e8b-817c-c90-d139-ad97-e24f.ngrok-free.app',
      changeOrigin: true,
    })
  );
};
