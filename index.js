const express = require('express');

var app = express();
app.use(express.static('webComponentHackathon/web'))


var port = process.env.PORT || 3001;
app.listen(port, function() {


  console.log('Example app listening at http://%s:%s, ' + port);

});
