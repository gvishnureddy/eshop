angular.module("eshop")
    .controller("mainCtrl", ["$scope", function ($scope) {
        $scope.appName = "Eshop";
        $scope.headerTemplate = "app/common/header.html";
        $scope.templateUrl = "app/home/home.html";
      
}]);