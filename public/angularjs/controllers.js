var controllers = angular.module('controllers',[]);

controllers.controller('navController', ['$scope','$location', function($scope,$location) {
    $scope.username = "Orange";

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);

controllers.controller('loginController', ['$scope', function($scope) {
    $scope.greeting = 'Hola!';
}]);

controllers.controller('testController', ['$scope', function($scope) {
    $scope.greeting = 'Hola!';
}]);

controllers.controller('test2Controller', ['$scope', function($scope) {
    $scope.data = "that's test2!";
}]);


