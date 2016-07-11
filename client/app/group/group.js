angular.module('groups.group',[])
.controller('GroupController',function($scope,$http){
  $scope.data = {};
  $scope.grouping = function(){
    return $http({
      method: 'GET',
      url: '/api/group'
    })
    .then(function(res){
      console.log('res data is ', res.data);
    })
  }
})