var Router = require('koa-router');
var http = require('../utils/http');

var router = new Router({
    prefix: '/api/user'
});

router.post('/login', function *(next) {
    var name = this.request.body.name;
    var password =  this.request.body.password;
    var result = yield http.post('/api/v1/users/login',{name: name,password: password});

    this.session.user = result.user;
    this.session.user.access_token = result.access_token;

    this.body = JSON.stringify(result);
});

router.get('/current', function *(next) {
    result =  this.session.user;
    this.body = JSON.stringify(result);
});

router.delete('/logout', function *(next) {
    this.session = null;
    this.body = JSON.stringify({success: true});
});

router.get('/list', function *(next) {
    var result = yield http.get('/api/v1/users/list');
    this.body = JSON.stringify(result);
});

module.exports = router.routes();
