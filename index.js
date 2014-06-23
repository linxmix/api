var app = require('./src');

var port = process.env.PORT || 5000;

app.listen(port);

console.log("Linx API server listening on port", port);

module.exports = app;
