angular.module('groups.user',[])

.controller('UserController',function($scope,$http){
  $scope.user = {};
  $scope.addUser = function($scope.user){
    return $http({
      method:'POST',
      url: '/api/user',
      data: $scope.user
    })
    .then(function(res){
      console.log('returning response from server' + res);
    })
  }
})