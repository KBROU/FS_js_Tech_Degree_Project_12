const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/api/auth/login/facebook',
        { target: 'http://localhost:3001/', changeOrigin: true }
    ));
    app.use(proxy('/api/auth/logout',
        { target: 'http://localhost:3001/', changeOrigin: true }
    ));
    app.use(proxy('/api/*',
        { target: 'http://localhost:3001/' , changeOrigin: true}
    ));
}

changeOrigin: true
