var myApp = angular.module('myApp', ['ui.router','routes','services', 'controllers','ui.bootstrap']);

myApp.run(['$rootScope', 'userService', function($rootScope, userService) {
        userService.current(function (data) {
            if(data.success){
                $rootScope.current_user = data.user;
            }
        });
}]);
