module.exports = {
    //cnpm run build  打包指令
    //打包的时候路由模式必须为hish模式，不能为history
    // publicPath: './', //配置公共路径(打包所必须的，否则打开是空白的)
    devServer: {
        host: '0.0.0.0', //所有都可以访问
        port: '9527',
        open: true,
        proxy: { //配置代理解决vue中的跨域问题
            '/api': {
                target: 'https://x.dscmall.cn/api', //域名
                changeOrigin: true, //开启代理允许跨域访问
                pathRewrite: {
                    '^/api': ''
                },
            },
            // '/api': {
            //     target: 'http://localhost:3000/api/',
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^/api': ''
            //     }
            // }
        }
    }
}