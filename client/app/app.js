angular.module("groups",[
  'groups.user',
  'groups.group',
  'ngRoute'
])

.config(function($routeProvider,$httpProvider){
  $routeProvider
    .when('/users',{
      templateUrl: 'app/user/user.html',
      controller:'UserController'
    })
    .when('/group',{
      templateUrl: 'app/group/group.html',
      controller: 'GroupController'
    })
    .otherwise('/users',{
      templateUrl: 'app/user/user.html',
      controller:'UserController'
    })
})