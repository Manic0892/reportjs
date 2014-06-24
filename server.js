// # server

// Main program file--loads all APIs and determines routing.

// ## Load dependencies

var express = require('express');
app = express();

var connect = require('connect');
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	flash = require('connect-flash'),
	bodyParser = require('body-parser'),
	url = require('url'),
	nconf = require('nconf'),
	summon = require('express-summon-route');
	

// ## Read config

// We use nconf to read configuration options.  Command line arguments override config file options which override default options.
nconf.argv().file('./config.json');
nconf.defaults({
	ip: 'localhost',
	port: 8080,
	dbuser: "user",
	dbpass: "pass",
	session: "secret"
});

// Read configuration files into global variables.
var ip = nconf.get('ip');
var port = nconf.get('port');
var dbUser = nconf.get('dbuser');
var dbPass = nconf.get('dbpass');
var sessionSecret = nconf.get('session');

// ## Server config

// We use www as the containing folder for all front-facing webserver files.
app.use(express.static(__dirname + '/www/public'));
app.set('views', __dirname + '/www/views');
// We use jade as the layout/templating engine.
app.set('view engine', 'jade');
app.use(function(req, res, next) {
	app.locals.pretty = true;
	next();
});

// ### Middleware initialization

// Middleware to use POSTs.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// Cookie parsing middleware.
app.use(cookieParser());
// Session middleware.
app.use(session({secret:sessionSecret}));
// Flash middleware.
//app.use(flash());

// ## Routes

app.get('/', function(req,res) {
	res.send("Report JS");
});

// Log configuration options to console along with status updates.
//console.log('Listening on ' + ip + ':' + port);
//console.log('Session secret is ' + sessionSecret);
//console.log('Using DB username-password of ' + dbUser + '-' + dbPass);

// Start the webserver.
var server = app.listen(8080, 'localhost');
