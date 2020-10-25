const loki = require('lokijs');
const config = require('config');
const d = require('../db/covid19.json');
const path = require('path');
const databaseConfig = config.get(`${process.env.NODE_ENV}.database`);

const db = new loki(path.resolve(`./db/${databaseConfig.file}`), { autoload: true });
db.loadDatabase({}, function (result) {});
module.exports = db;
