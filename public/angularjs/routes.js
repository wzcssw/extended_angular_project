var routes = angular.module('routes', ['ui.router']);
routes.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider.state('user', {
        url:'/user',
        templateUrl:'html/user.html',
        controller:'userController'
    }).state('privilege', {
        url:'/privilege',
        templateUrl:'html/privilege.html',
        controller:'privilegeController'
    }).state('test', {
        url:'/test',
        templateUrl:'html/test.html',
        controller:'testController'
    }).state('login', {
        url:'/login',
        templateUrl:'html/login.html',
        controller:'loginController'
    });

    $urlRouterProvider.otherwise('/user');
}]);
