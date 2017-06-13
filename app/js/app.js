var app = angular.module("app",[]);

app.controller('generate',['$scope','$http', function($scope, $http){
  $scope.colors = [];
  $scope.loaded = false;
  $scope.generate = function(){
    $http.get('/generate', function(res){
      $scope.colors = res;
      console.log(res);
      $scope.loaded = true;
    });
  }
}]);
