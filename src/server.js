const express = require('express');
const chalk = require('chalk');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const pack = require('../package');
const config = require('config');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerOptions = require("../config/swaggerOptions");
const swaggerUi = require("swagger-ui-express");
const mode = process.env.NODE_ENV;
const PORT = process.env.PORT || config.get(`${mode}.port`);
swaggerOptions.definition.servers[0].url = config.get(`${mode}.serverUrlWebUrlLink`);
const specs = swaggerJsdoc(swaggerOptions);
const app = express();

/*app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);*/
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);
require('./routes')(app);
const dir = path.join(__dirname, 'assets');
// app.use('/upload', express.static(dir));

app.use(haltOnTimedout);
function haltOnTimedout(req, res, next) {
  if (!req.timedout) next();
}

const start = () => (
  app.listen(PORT, () => {
    console.log(chalk.yellow('.......................................')); //eslint-disable-line
    console.log(chalk.green(config.get(`${mode}.name`))); //eslint-disable-line
    console.log(chalk.green(`Port:\t\t${config.get(`${mode}.port`)}`)); //eslint-disable-line
    console.log(chalk.green(`Mode:\t\t${config.get(`${mode}.mode`)}`)); //eslint-disable-line
    console.log(chalk.green(`App version:\t${pack.version}`)); //eslint-disable-line
    console.log(chalk.green("database connection is established"));
    console.log(chalk.yellow('.......................................')); //eslint-disable-line
  })
);

start();