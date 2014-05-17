var express = require('express');
var httpProxy = require('http-proxy');

var app = express();
var proxy = httpProxy.createProxy({
  secure: true,
});

app.use(function (req, res) {
  delete req.headers["cookie"];
  delete req.headers["cookie2"];

  var protocol = "https://"
  var host = "api.soundcloud.com";
  var target = protocol + host + req.url;
  
  req.headers["host"] = host;

  // TODO remove cookie headers from SoundCloud response
  //proxy.before("web", "writeHeaders", function (req, res, proxyRes) {
  //  delete proxyRes.headers["cookie2"];
  //  delete proxyRes.headers["cookie"];
  //});

  proxy.web(req, res, {
    target: target,
  }, function (err) {
    if (err) { throw err; }
  });
});

module.exports = app;