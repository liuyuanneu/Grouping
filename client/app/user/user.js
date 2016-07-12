angular.module('groups.user',[])

.controller('UserController',function($scope,$http){
  $scope.user = {};
  $scope.userexist = false;
  $scope.count = function(){
    $http({
      method:'GET',
      url:'/api/user',
    })
    .then(function(res){
      console.log(res)
      var users = res.data;
      $scope.num = users.length;
    })
  }
  $scope.addUser = function(user){
    //console.log(user)
    $http({
      method:'POST',
      url: '/api/user',
      data: user
    })
    .then(function(res){
      console.log('returning response from server',res);
      if(typeof res.data === 'string'){
        $scope.userexist = true;
      }else{
        $scope.userexist = false;
      }
      $scope.user.username = '';
      $scope.user.location = '';
      $scope.count();


    })
  }
})