var myApp = angular.module('myApp', ['ui.router','routes','services', 'controllers','ui.bootstrap','angular-confirm']);

myApp.run(['$rootScope','$state', function($rootScope,$state) {
        // 启动应用时将sessionStorage中的current_user注入全局
        $rootScope.current_user = JSON.parse(sessionStorage.getItem("current_user"));
        // 路由变化事件
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var current_user = sessionStorage.getItem("current_user");
            if (!current_user){
                event.preventDefault();
                $state.go('login');
            }
        });
}]);
