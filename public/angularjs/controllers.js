var controllers = angular.module('controllers',[]);


controllers.controller('navController', ['$scope','$location','$rootScope','userService','$state', function($scope,$location,$rootScope,userService,$state) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
    // 注销
    $scope.logout = function () {
        userService.logout({},function (data) {
            if(data.success){
                $rootScope.current_user = null;
                $state.go('login');
            }
        });
    }
}]);

controllers.controller('loginController', ['$rootScope','$scope','userService','$state', function($rootScope,$scope,userService,$state) {
    $scope.login = function (name,password) {
        userService.login({name,password},function (data) {
            if(data.success){
                // 登录成功
                $rootScope.current_user = data.user;
                $state.go('user');
            }else{
                // 登录失败
                $scope.error_msg = data.info;
            }
        });
    }
}]);

controllers.controller('userController', ['$scope','userService','$uibModal', function($scope,userService,$uibModal) {
    $scope.maxSize = 5;

    var get_data = function (param){
        userService.list(param,function (data) {
            $scope.users = data.users;
            $scope.total_count = data.total_count;
            $scope.current_page = data.current_page;
        });
    };

    get_data({});
    $scope.pageChanged = function () {
        get_data({page: $scope.current_page});
    };

    $scope.setPage = function () {
        get_data({page: $("#go_page").val()});
    };

    $scope.search = function () {
        get_data({q: $scope.q});
    };
    
    $scope.delete_user = function (id) {
        userService.delete({id: id},function (data) {
            get_data({});
        },function (data) {
            console.log(data);
        });
    };

    $scope.edit_user = function (user) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'edit_user.html',
            controller: 'editUserController',
            resolve: {
                user: function () {
                    return user;
                }
            }
        });
        modalInstance.result.then(function (selectedItem) { // 关闭对话框事件
            get_data({});
        });
    }
}]);

controllers.controller('editUserController', ['$scope','$uibModalInstance','userService','user', function($scope,$uibModalInstance,userService,user) {
    $scope.user = user;
    $scope.cancel = function () { // 关闭对话框
        $uibModalInstance.close();
    };
    $scope.save = function (user) {
        userService.update({user: user},function (data) {
            $uibModalInstance.close();
        },function (data) {
            console.log(data);
        });
    }
}]);

controllers.controller('testController', ['$scope','userService','$state','$rootScope', function($scope,userService,$state,$rootScope) {

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


