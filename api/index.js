var user_api = require('./user_api');
var test_api = require('./test_api');

module.exports = function (app) {
    app.use(user_api);
    app.use(test_api);
}
