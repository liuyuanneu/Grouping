angular.module('groups.user',[])

.controller('UserController',function($scope,$http){
  $scope.user = {};
  $scope.addUser = function(user){
    //console.log(user)
    $http({
      method:'POST',
      url: '/api/user',
      data: user
    })
    .then(function(res){
      console.log('returning response from server' + res);
    })
  }
})