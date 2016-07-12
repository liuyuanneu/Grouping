angular.module('groups.group',[])
.controller('GroupController',function($scope,$http){
  $scope.data = {};

  $scope.grouping = function(){
    console.log($scope.data.count);
    return $http({
      method: 'GET',
      url: '/api/group'
    })
    .then(function(res){
      console.log('res data is ', res.data);
      var shuffledArray = _.shuffle(res.data)
      var numInPair = $scope.data.count;
      var pairsArray = chunk(shuffledArray,numInPair);
      $scope.data.pairs = pairsArray;
      //console.log(pairsArray)
      $scope.data.count=0;
    })
  }
})

//Helper Functions

function chunk(arr,len){
  var chunks = [];
  i=0;
  n=arr.length;

  while(i<n){
    chunks.push(arr.slice(i,i+=len));
  }
  return chunks;
}