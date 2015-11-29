var app = angular.module('eigaApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({ enabled: true });
    $routeProvider.
        when('/', {
            templateUrl: 'start.html',
            controller: 'MainController'
        })

        .when('/movie', {
            templateUrl: 'movie.html',
            controller: 'MainController'
        })
}]);

app.controller('MainController', function($scope, $http){
  if($scope.search === undefined){
    $scope.search = "My Neighbor Totoro";
    getMovie();
    getAnimation();
  }

  function getMovie(){
    $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
     .success(function(data){
       $scope.movie = data;
     });
  }

  function getAnimation(){
   $http.get("http://api.giphy.com/v1/gifs/search?q=" + $scope.search + "&api_key=dc6zaTOxFJmzC&limit=4")
     .success(function(data) {
          $scope.animation = data.data[3].images.original.url;
      });
  }

  $scope.select = function(){
    this.setSelectionRange(0, this.value.length);
  }

  $scope.change = function(){
    getMovie();
    getAnimation();
  }

  var movielist = [];
  $scope.create = function(){
    movie = { title: $scope.search, poster: $scope.movie.Poster }
    movielist.push(movie);
    this.movielist = movielist;
  }

})
