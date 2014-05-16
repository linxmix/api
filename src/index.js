require('systemd');

var server = require('./server');

if (process.env.NODE_ENV === 'production') {
  server.listen('systemd');
} else {
  server.listen(5000);
  require('cors');
}

module.exports = server;
