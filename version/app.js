var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World! this version 3 changes\n');
});

app.get('/mars', function(req, res){
    res.send('Hello Mars! this version 3 updates. \n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});