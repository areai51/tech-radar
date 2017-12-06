const express = require('express'),
      path=require('path'),
      fs = require("fs"),
      app = express();
app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'app')));
const server = app.listen(app.get('port'), function() {
console.log('Server running on port ' + 3000);
});

app.get('/data', function (req, res) {
      res.sendFile(__dirname+'/data/radar-config.json');
})