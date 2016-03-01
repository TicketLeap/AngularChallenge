'use strict';

// Declare app level module which depends on views, and components
angular.module('sherlock', [
  'ngRoute',
  'sherlock.Search',
  'sherlock.view2',
  'sherlock.version'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/search'});
}]);
