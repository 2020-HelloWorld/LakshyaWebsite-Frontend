const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://7c91-2405-201-d031-6835-46c-10ed-194d-897a.ngrok-free.app',
      changeOrigin: true,
    })
  );
};
