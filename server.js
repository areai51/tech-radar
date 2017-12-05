const express = require('express'),
      path=require('path'),
app = express();
app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'app')));
const server = app.listen(app.get('port'), function() {
console.log('Server running on port ' + 3000);
});