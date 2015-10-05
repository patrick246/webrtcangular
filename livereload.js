livereload = require('livereload');
server = livereload.createServer();
server.watch([__dirname, __dirname + '/css', __dirname + "/js", __dirname + "/templates"]);