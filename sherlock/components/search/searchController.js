'use strict';

angular.module('sherlock.Search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/search', {
        templateUrl: 'components/search/searchView.html',
        controller: 'SearchController',
    });
}])

.controller('SearchController', 
       ['$scope', '$location', '$http', '$route', '$routeParams', 
        function($scope, $location, $http, $route, $routeParams) {
           $scope.searchTerm = $routeParams.q || ""; // (or the URL parameter)
        
        $route.current.$$route.reloadOnSearch = false;
        $scope.searchResults = false;    
           $scope.searching = false;
           $scope.searchQuery = function(){
               return $http.get('/sherlock/assets/fixtures/sample_sherlock.json', {
                   params:{
                        format:'json',
                    }
               })
           };

           $scope.goto = function(ticket){
                $location.path("/info/tickets/"+ticket.project_short_code+'-'+ticket.number);
           };

           $scope.search = function(){
               $scope.searchQuery().then(function(response){
                   var data = response.data;
                   var matchingIssues = [];
                   var searchTerm = $scope.searchTerm;

                   // our "dumb" local search algorithm concatenates all the searchable data in the file
                   // and then looks for something matching our querystring.  In the real 
                   // sherlock, this is done with search indicies on the backend. 
                   //
                   angular.forEach(data, function(value, key){
                       var issue = data[key];
                       var pseudoIndex = "";
                       
                       pseudoIndex += issue.project_short_code + "-" + issue.number;
                       pseudoIndex += issue.reporter_str;
                       pseudoIndex += issue.owner_str;
                       pseudoIndex += issue.header;
                       pseudoIndex += issue.project_str;

                       pseudoIndex = pseudoIndex.toLowerCase();

                       if(pseudoIndex.indexOf(searchTerm.toLowerCase()) != -1){
                           matchingIssues.push(issue);
                       }
                     
                   });

                   $scope.searchResults = matchingIssues;
               });
           };

           $scope.setpath = function(){
               $location.search('q', $scope.searchTerm);
               $scope.search();
           }

        if($scope.searchTerm){
            $scope.search();
        };

}]);
