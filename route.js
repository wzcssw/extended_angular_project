var controllers = require('./controllers');
var router = require('koa-router')();

router.get('/test/test1',controllers.test_controller.test1);
router.get('/test/test2',controllers.test_controller.test2);

module.exports = function (app) {
    app.use(router.routes());
}


