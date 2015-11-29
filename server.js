var express     = require('express'),
    server      = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    Schema      = mongoose.Schema,
    PORT        = process.env.PORT || 4321;

mongoose.connect('mongodb://localhost:27017/movielist');

var movieSchema  = new Schema({
  title: String,
  poster: String,
  year: String
});
var Moive = mongoose.model('Movie', movieSchema);

server.use(express.static('./public'));
server.use(bodyParser.json());

server.get('/movielist', function(req, res){
  Movie.find({}, function(err, movielist){
    res.json(movielist);
  })
});

server.listen(PORT, function () {
  console.log("CONNECTED");
});
