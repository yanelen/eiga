var express     = require('express'),
    server      = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    Schema      = mongoose.Schema,
    PORT        = process.env.PORT || 4321,
    MONGOURI    = process.env.MONGOLAB_URI || "mongodb://localhost:27017",
    dbname      = 'movies'

var MovieSchema  = new Schema({
  Movie_value: { type: String, required: true },
  created: { type: Date, default: Date.now }
});
var Movie = mongoose.model('Movie', MovieSchema);

server.use(express.static('./public'));
server.use(bodyParser.json());
server.get('/Movies', function(request, response){
  Movie.find({}, function(err, Movies){
    response.json(Movies);
  })
});

server.post('/Movies', function(request, response){
  Movie.create(request.body, function(err, data){
    Movie.find({}, function(err, Movies){
      response.json(Movies);
    });
  });
});

mongoose.connect(MONGOURI + "/" + dbname);
server.listen(PORT, function () {
  console.log("CONNECTED");
});
