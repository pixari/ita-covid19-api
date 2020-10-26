
const { prototype } = require('lokijs');
const db = require('../db');
const dateToTimestamp = (date) => new Date(date).getTime();

module.exports = {
  list: async () => {
    const Regions = db.getCollection('regions');
    return new Promise((resolve, reject) => {
      let regions = [...new Set(Regions.find().map(e => JSON.stringify({ denominazione_regione: e.denominazione_regione, codice_regione: e.codice_regione })))]; 
      regions = regions.map(r => JSON.parse(r));
      resolve({ regions });
      reject(true);
    });
  },
  getByRegion: async (params, query) => {
    const codice_regione = params['codice_regione'];
		const from = dateToTimestamp(params['date']);
    const to = (query.to ? dateToTimestamp(query.to) : new Date().getTime()) + 86400000;
    const findObj = { 'codice_regione': Number(codice_regione), timestamp: { '$between': [from, to] }, };
    const Regions = db.getCollection('regions');
    return new Promise((resolve, reject) => {
      const regions = Regions.find(findObj); 
      resolve({ regions });
      reject(true);
    });
  },
}