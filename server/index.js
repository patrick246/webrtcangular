var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var crypto = require('crypto');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../'));

var router = express.Router();

var sessions = {};

router.get('/', function (req, res)
{
	res.json({message: 'hello world'});
});

// Authentication
router.post('/auth/login', function (req, res)
{
	if(req.headers.username == undefined || req.headers.password == undefined ||req.headers.username == "" ||req.headers.password == "")
	{
		res.json({
			status: "failed",
			level: "error",
			code: "1",
			message: "Username or Password not present or empty"
		});
		return;
	}

	crypto.randomBytes(64, function (ex, buf)
	{
		var token = buf.toString('hex');

		sessions[token] = {
			username: req.headers.username,
			ip: req.connection.remoteAddress
		};

		res.cookie('Token', token, { maxAge: 3600*24*7, httpOnly: true });
		res.json({status:'success', token: token});
	});
});
router.post('/auth/logout', function (req, res)
{

});

// contacts
router.get('/contacts', function (req, res)
{

});
router.get('/contacts/:id', function (req, res)
{

});
router.post('/contacts/add', function (req, res)
{

});
router.post('/contacts/remove', function (req, res)
{

});
router.get('/contacts/requests', function (req, res)
{

});

// messages
router.get('/messages/since', function (req, res)
{

});
router.get('/messages/archive/{userid}', function (req, res)
{

});
router.post('/messages/send', function (req, res)
{

});

router.get('/debug/logsessions', function (req, res)
{
	console.log(sessions);
	res.json(sessions);
	res.end();
});

app.use('/api', router);
var server = app.listen(80, function ()
{
	console.log('Listening at http://%s:%s', server.address().host, server.address().port);
});