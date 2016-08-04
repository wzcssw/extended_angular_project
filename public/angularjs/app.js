var myApp = angular.module('myApp', ['ui.router','routes','services', 'controllers','ui.bootstrap']);

myApp.run(['$rootScope', 'userService','$state', function($rootScope, userService,$state) {
        userService.current(function (data) {
            if(data.success){
                $rootScope.current_user = data.user;
            }
        });

        // 路由变化事件
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            if (!$rootScope.current_user){
                event.preventDefault();
                $state.go('login');
            }
        });
}]);
