var express     = require('express'),
    server      = express(),
    PORT        = process.env.PORT || 4321;

server.use(express.static('./public'));

server.listen(PORT, function () {
  console.log("CONNECTED");
});
