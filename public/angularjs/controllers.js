var controllers = angular.module('controllers',[]);


controllers.controller('navController', ['$scope','$location', function($scope,$location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);

controllers.controller('loginController', ['$rootScope','$scope','userService','$state', function($rootScope,$scope,userService,$state) {
    $scope.login = function (name,password) {
        userService.login({name,password},function (data) {
            if(data.success){
                // 登录成功
                $rootScope.current_user = data.user;
                $state.go('test');
            }else{
                // 登录失败
                $scope.password = data.info;
            }
        });
    }
}]);

controllers.controller('testController', ['$scope','userService','$state', function($scope,userService,$state) {
    // 注销
    $scope.logout = function () {
        userService.logout(function (data) {
            if(data.success){
                $state.go('login');
            }
        });
    }
}]);

controllers.controller('test2Controller', ['$scope','userService', function($scope,userService) {
    $scope.data = "that's test2!";
    $scope.login = function (name,password) {
        userService.login({name,password},function (data) {
            if(data.success){
                // 登录成功
            }else{
                // 登录失败
            }
        });
    }
}]);


