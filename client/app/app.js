angular.module("groups",[
  'groups.user',
  'groups.group'
])

.config(function($routeProvider,$httpProvider){
  $routeProvider
    .when('/users',{
      templatedUrl: 'app/user/user.html',
      controller:'UserController'
    })
    .when('/group',{
      templatedUrl: 'app/group/group.html',
      controller: 'GroupController'
    })
    .otherwise('/group',{
      templatedUrl: 'app/group/group.html',
      controller: 'GroupController'
    })
})