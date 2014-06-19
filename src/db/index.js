var level = require("level");
var sublevel = require("level-sublevel");
var levelWriteStream = require("level-writestream");

var dbName;

switch (process.env.NODE_ENV) {
  case "test":
    dbName = __dirname + "/../../testdb";
    break;
  case "production":
    dbName = "/data/db";
    break;
  default:
    dbName = __dirname + "/../../db";
    break;
}

module.exports = sublevel(levelWriteStream(level(dbName)));
