angular.module('groups.group',[])
.controller('GroupController',function($scope,$window,$http){
  $scope.data = {};

  $scope.grouping = function(){
    return $http({
      method: 'GET',
      url: '/api/group'
    })
    .then(function(res){
      //console.log('res data is ', res.data);

      var shuffledArray = _.shuffle(res.data)
      if($scope.data.count === ''){
        $scope.data.count = 1;
      }
      var numInPair = $scope.data.count;
      var pairsArray = chunk(shuffledArray,numInPair);
      $scope.data.pairs = pairsArray;
      $scope.data.count='';
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