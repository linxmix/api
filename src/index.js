var server = require('./server');

server.listen(5000);

require('./cors');

module.exports = server;