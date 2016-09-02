var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	config = require('./config');

var app = express();


/* Load routes */
require('./app/routes/nota')(app);
require('./app/routes/cliente')(app);
require('./app/routes/audiencia')(app);
require('./app/routes/atendimento')(app);
require('./app/models/nota')(app);


/* Database */
mongoose.connect(config.database);
mongoose.connection.on('connected', function () {
	console.log("Connected");
});
mongoose.connection.on('error', function (err) {
	console.log("Connection error: " + err);
});
mongoose.connection.on('disconnected', function () {
	console.log("MongoDB disconnected");
});

/* Middleware */
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/* Test route. */
app.get('/', function(req, res) {
	res.send('working...');
})

var port = process.env.PORT || 9999;

app.listen(port, function() {
	console.log('Server listening on port ' + port);
})

module.exports = app;