const config = require('./config');
const shell = require('shelljs');
const loki = require('lokijs');
const c = require('chalk');
const echo = shell.echo;

/* Start */
shell.exec('clear');
echo(c.bold.bgBlue.white('Starting pcm-dpc-COVID-18-to-loki...'))
echo('');

/* Git */
echo('1. Check if git is available...');
if (!shell.which('git')) {
  echo(c.bold.bgRed.white('Sorry, this script requires git.'))
  shell.exit(1);
}
echo(c.bold.bgGreen.white('OK! Git is available.'))
echo('');

/* Remove old cloned repos */
echo('2. Try to remove the old COVID-19 cloned repository...');
if (shell.exec(`rm -rf COVID-19`).code !== 0) {
  echo(c.bold.bgRed.white(`Sorry, cannot delete the old cloned repository`));
  shell.exit(1);
}
echo(c.bold.bgGreen.white('OK! Old repository deleted.'))
echo('');

/* Checkout */
echo('3. Try to checkout the COVID-19 repository...');
if (shell.exec(`git clone ${ config.pcmDpcCOVID19Repository }`).code !== 0) {
  echo(c.bold.bgRed.white(`Sorry, cannot clone the given repository: ${ config.pcmDpcCOVID19Repository }`));
  shell.exit(1);
}
echo(c.bold.bgGreen.white('OK! Repository cloned.'))
echo('');

/* Import data to loki */
echo('4. Import data to loki');
const db = new loki('./dist/covid19.json');

/* Andamento nazionale */
try {
  const nationalTrends = db.addCollection('nationalTrends', { indices: ['date'] });
  const andamentoNazionale = require('./COVID-19/dati-json/dpc-covid19-ita-andamento-nazionale.json');
  andamentoNazionale.forEach(a => nationalTrends.insert(a));
  db.saveDatabase();
  echo(c.bold.bgGreen.white('OK! nationalTrends has been successfully imported.'))
} catch(err) {
  echo(c.bold.bgRed.white(`Sorry, an error occurred importing nationalTrends: ${ err }`));
  shell.exit(1);
}

/* Note  */
try {
  const notes = db.addCollection('notes', { indices: ['data'] });
  const note = require('./COVID-19/dati-json/dpc-covid19-ita-note');
  note.forEach(a => notes.insert(a));
  db.saveDatabase();
  echo(c.bold.bgGreen.white('OK! notes has been successfully imported.'))
} catch(err) {
  echo(c.bold.bgRed.white(`Sorry, an error occurred importing notes: ${ err }`));
  shell.exit(1);
}

/* Provincie  */
try {
  const provinces = db.addCollection('provinces', { indices: ['data'] });
  const province = require('./COVID-19/dati-json/dpc-covid19-ita-province.json');
  province.forEach(a => provinces.insert(a));
  db.saveDatabase();
  echo(c.bold.bgGreen.white('OK! provinces has been successfully imported.'))
} catch(err) {
  echo(c.bold.bgRed.white(`Sorry, an error occurred importing provinces: ${ err }`));
  shell.exit(1);
}

/* Regions  */
try {
  const regions = db.addCollection('regions', { indices: ['data'] });
  const regioni = require('./COVID-19/dati-json/dpc-covid19-ita-regioni.json');
  regioni.forEach(a => regions.insert(a));
  db.saveDatabase();
  echo(c.bold.bgGreen.white('OK! regions has been successfully imported.'))
} catch(err) {
  echo(c.bold.bgRed.white(`Sorry, an error occurred importing regions: ${ err }`));
  shell.exit(1);
}

/* Remove old cloned repos */
echo('5. Try to remove the COVID-19 cloned repository...');
if (shell.exec(`rm -rf COVID-19`).code !== 0) {
  echo(c.bold.bgRed.white(`Sorry, cannot delete the cloned repository`));
  shell.exit(1);
}
echo(c.bold.bgGreen.white('OK! Old repository deleted.'))
echo('');

echo(c.bold.bgGreenBright.white('DONE.'));