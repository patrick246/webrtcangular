var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());
app.use(express.static(__dirname + '/../'));
var server = app.listen(80, function ()
{
	console.log('Listening at http://%s:%s', server.address().host, server.address().port);
});