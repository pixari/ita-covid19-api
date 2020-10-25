/* eslint-disable import/no-unresolved */
const shell = require('shelljs');
const loki = require('lokijs');
const config = require('config');
const c = require('chalk');



const { echo } = shell;
const cfg = config.get(`${process.env.NODE_ENV}`);

/* Start */
shell.exec('clear');
echo(c.bold.bgBlue.white('Starting pcm-dpc-COVID-18-to-loki...'));
echo('');

/* Git */
echo('1. Check if git is available...');
if (!shell.which('git')) {
  echo(c.bold.bgRed.white('Sorry, this script requires git.'));
  shell.exit(1);
}
echo(c.bold.bgGreen.white('OK! Git is available.'));
echo('');


/* Remove old cloned repos */
echo('2. Try to remove the old COVID-19 cloned repository...');
if (shell.exec('rm -rf COVID-19').code !== 0) {
  echo(c.bold.bgRed.white('Sorry, cannot delete the old cloned repository'));
  shell.exit(1);
}
echo(c.bold.bgGreen.white('OK! Old repository deleted.'));
echo('');

/* Checkout */
echo('3. Try to checkout the COVID-19 repository...');
if (shell.exec(`git clone ${cfg.sourceRepository}`).code !== 0) {
  echo(
    c.bold.bgRed.white(
      `Sorry, cannot clone the given repository: ${cfg.sourceRepository}`
    )
  );
  shell.exit(1);
}
echo(c.bold.bgGreen.white('OK! Repository cloned.'));
echo('');

/* Import data to loki */
echo('4. Import data to loki');
// eslint-disable-next-line new-cap
const db = new loki('./db/covid19.json');

/* Source files */
const regioni = require('./COVID-19/dati-json/dpc-covid19-ita-regioni.json');
const andamentoNazionale = require('./COVID-19/dati-json/dpc-covid19-ita-andamento-nazionale.json');
const note = require('./COVID-19/dati-json/dpc-covid19-ita-note');
const province = require('./COVID-19/dati-json/dpc-covid19-ita-province.json');

/* Andamento nazionale */
try {
  const nationalTrends = db.addCollection('nationalTrends', {
    indices: ['date'],
  });
  andamentoNazionale.forEach((a) => nationalTrends.insert({ ...a, timestamp: new Date(a.data).getTime() }));
  echo(c.bold.bgGreen.white('OK! nationalTrends has been successfully imported.'));
} catch (err) {
  echo(c.bold.bgRed.white(`Sorry, an error occurred importing nationalTrends: ${err}`));
  shell.exit(1);
}

/* Note  */
try {
  const notes = db.addCollection('notes', { indices: ['data'] });

  note.forEach((a) => notes.insert(a));
  echo(c.bold.bgGreen.white('OK! notes has been successfully imported.'));
} catch (err) {
  echo(c.bold.bgRed.white(`Sorry, an error occurred importing notes: ${err}`));
  shell.exit(1);
}

/* Provincie  */
try {
  const provinces = db.addCollection('provinces', { indices: ['data'] });
  province.forEach((a) => provinces.insert({ ...a, timestamp: new Date(a.data).getTime() }));
  echo(c.bold.bgGreen.white('OK! provinces has been successfully imported.'));
} catch (err) {
  echo(
    c.bold.bgRed.white(`Sorry, an error occurred importing provinces: ${err}`)
  );
  shell.exit(1);
}

/* Regions  */
try {
  const regions = db.addCollection('regions', { indices: ['data'] });
  regioni.forEach((a) => regions.insert({ ...a, timestamp: new Date(a.data).getTime() }));
  echo(c.bold.bgGreen.white('OK! regions has been successfully imported.'));
} catch (err) {
  echo(
    c.bold.bgRed.white(`Sorry, an error occurred importing regions: ${err}`)
  );
  shell.exit(1);
}

/* Remove old cloned repos */
echo('5. Try to remove the COVID-19 cloned repository...');
if (shell.exec('rm -rf COVID-19').code !== 0) {
  echo(c.bold.bgRed.white('Sorry, cannot delete the cloned repository'));
  shell.exit(1);
}
echo(c.bold.bgGreen.white('OK! Old repository deleted.'));
echo('');

/* Save db */
echo('6. Save DB');
db.saveDatabase(() => {
  echo(c.bold.bgGreen.white('OK! DB saved.'));
});

echo(c.bold.bgGreenBright.white('DONE.'));
