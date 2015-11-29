var express     = require('express'),
    server      = express(),
    PORT        = process.env.PORT || 4321;

server.use(express.static('./public'));

server.get('/movielist', function(req, res){
  console.log('I received a get request')
  movie1 = {
    title: 'Closer',
    year: '2004',
    poster: 'http://imdb.wemakesites.net/api/1.0/img/?url=http://ia.media-imdb.com/images/M/MV5BMTM5NDM3NDc1OF5BMl5BanBnXkFtZTcwNzE1MzcyMQ@@._V1_SX300.jpg'
  };

  movie2 = {
    title: 'My Neighbor Totoro',
    year: '1988',
    poster: 'http://imdb.wemakesites.net/api/1.0/img/?url=http://ia.media-imdb.com/images/M/MV5BMjE3NzY5ODQwMV5BMl5BanBnXkFtZTcwNzY1NzcxNw@@._V1_SX300.jpg'
  };

  var movielist = [movie1, movie2];
  res.json(movielist);
});

server.listen(PORT, function () {
  console.log("CONNECTED");
});
