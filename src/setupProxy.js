const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
  app.use('/api',
  createProxyMiddleware({
    target:'https://m.9ji.com/web/api/member/index/v3',
    changeOrigin:true,
    pathRewrite:{
      '^/api':''
    }
  }))
}