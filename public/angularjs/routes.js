var routes = angular.module('routes', ['ui.router']);
routes.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider.state('test', {
        url:'/test',
        templateUrl:'html/test.html',
        controller:'testController'
    }).state('test2', {
        url:'/test2',
        templateUrl:'html/test2.html',
        controller:'test2Controller'
    }).state('login', {
        url:'/login',
        templateUrl:'html/login.html',
        controller:'loginController'
    }); 

    $urlRouterProvider.otherwise('/test');
}]);
