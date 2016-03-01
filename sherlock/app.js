'use strict';

// Declare app level module which depends on views, and components
//
angular.module('sherlock', [
  'ngRoute',
  'sherlock.Search',
  // Add any additional modules here
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/search'});
}]);
