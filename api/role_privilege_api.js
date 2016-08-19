var Router = require('koa-router');
var http = require('../utils/http');
var filters = require('../filters')

var router = new Router({
    prefix: '/api/role_privilege'
});

router.get('/role_list',filters.session_filter,function *(next) { // 所有角色列表
    var access_token = this.session.user.access_token;
    var page = this.query.page || 1;
    var q = this.query.q || '';
    var result = yield http.get('/api/v1/role_privileges/role_list',{access_token: access_token,page: page,q: q});
    this.body = JSON.stringify(result);
});

router.get('/privilege_list',filters.session_filter,function *(next) { // 所有权限列表
    var access_token = this.session.user.access_token;
    var page = this.query.page || 1;
    var q = this.query.q || '';
    var role_id = this.query.role_id || '';
    var result = yield http.get('/api/v1/role_privileges/privilege_list',{access_token: access_token,page: page,q: q,role_id: role_id});
    this.body = JSON.stringify(result);
});

module.exports = router.routes();
