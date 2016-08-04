var controllers = angular.module('controllers',[]);

controllers.controller('navController', ['$scope', function($scope) {
    $scope.username = "Orange";
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


