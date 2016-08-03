var controllers = angular.module('controllers',[]);

controllers.controller('navController', ['$scope', function($scope) {
    $scope.data = "it's nav?? you kiding me?!";
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


