var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');

var app = express();


/* Route */

var Nota = require('../models/nota');
notaRouter = require('../routes/nota')(Nota);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/* TEST route. */
app.get('/', function(req, res) {
	res.send('working...');
})

var port = process.env.PORT || 9999;

app.listen(port, function() {
	console.log('Server listening on port ' + port);
})

module.exports = app;