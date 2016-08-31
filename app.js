var express = require('express'),
	bodyParser = require('body-parser');

var app = express();

/* test route */
app.get('/', function(req, res) {
	res.send('working...');
})

var port = process.env.PORT || 9999;

app.listen(port, function() {
	console.log('Server listening on port ' + port);
})

module.exports = app;