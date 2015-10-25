var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../'));
var server = app.listen(80, function ()
{
	console.log('Listening at http://%s:%s', server.address().host, server.address().port);
});