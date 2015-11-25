app = angular.module('eigaApp', []);
app.controller('MainController', function($scope, $http){
  if($scope.search === undefined){
    $scope.search = "My Neighbor Totoro";
    getMovie();
    getAnimation();
  }

  function getMovie(){
    $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
     .success(function(data){ $scope.movie = data; });
  }

  function getAnimation(){
   $http.get("http://api.giphy.com/v1/gifs/search?q=" + $scope.search + "&api_key=dc6zaTOxFJmzC&limit=5")
     .success(function(data) {
          $scope.animation = data.data[4].images.original.url;
      })
  }


  $scope.select = function(){
      this.setSelectionRange(0, this.value.length);
  }

  var timeout;
  $scope.change = function(){
  if(timeout){
    clearTimeout(timeout);
  }
  timeout = setTimeout(getMovie, 1000);
  timeout = setTimeout(getAnimation, 1000);
  };

})
