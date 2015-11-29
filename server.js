var express     = require('express'),
    server      = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    db          = 'movielist',
    Schema      = mongoose.Schema,
    PORT        = process.env.PORT || 4321;

mongoose.connect('mongodb://localhost:27017/db');

var movieSchema  = new Schema({
  title { type: String, required: true },
  poster: { type: String, required: true },
  year: { type: String, required: true }
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
