var express = require('express');
var ecstatic = require('ecstatic');
var _ = require('lodash');

var isProd = (process.env.NODE_ENV === 'production');

var app = express();

var domains = require('../config').domains;

app.configure(function () {
  app.use(require('morgan')());
  app.use(require('compression')());
  app.use(function (req, res, next) {
    var origin = req.get('origin');
    var domainIndex = _.indexOf(domains, origin);
    if (domainIndex !== -1) {
      res.header('Access-Control-Allow-Origin', domains[domainIndex]);
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
    }
    next();
  });
  app.use(ecstatic({
    root: __dirname + '/../static',
    cache: (isProd ? 3600 : 0),
  }));
  app.use(require('body-parser')());
  app.use(app.router);
});

require('./routes/edges')(app);

module.exports = app;