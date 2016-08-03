const app = require('koa')();
const bodyParser = require('koa-bodyparser');
const session = require('koa-session-redis');
const staticCache = require('koa-static-cache')
const config = require('./config');
const path = require('path');

// 解析post请求
app.use(bodyParser());

app.keys = config.session_redis.key;

// session
app.use(session({ store: config.session_redis,db: config.session_redis.db}));

// 静态文件cache
app.use(staticCache(path.join(__dirname, 'public'), {
    maxAge: 365 * 24 * 60 * 60
}))

// app.on('error', function(err,ctx){
//     console.log('-------- 哦也~ 出错了 -----\n\n'
//         + err +'\n\n-------------------------');
// });

// 引入路由
require('./api')(app);

app.listen(config.port, function(){
    console.log('app has run at port of ' + config.port);
});