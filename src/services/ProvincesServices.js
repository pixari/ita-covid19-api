
const db = require('../db');
const dateToTimestamp = (date) => new Date(date).getTime();

module.exports = {
  list: async () => {
    const Provinces = db.getCollection('provinces');
    return new Promise((resolve, reject) => {
      let provinces = [...new Set(Provinces.find().map(
        (e) => JSON.stringify({ denominazione_provincia:e.denominazione_provincia, codice_provincia: e.codice_provincia })
      ))]; 
      provinces = provinces.map(p => JSON.parse(p));

      resolve({ provinces });
      reject(true);
    });
  },
  getByProvince: async (params, query) => {
    const codice_provincia = params['codice_provincia'];
		const from = dateToTimestamp(params['date']);
    const to = (query.to ? dateToTimestamp(query.to) : new Date().getTime()) + 86400000;
    const findObj = { 'codice_provincia': Number(codice_provincia), timestamp: { '$between': [from, to] }, };
    const Provinces = db.getCollection('provinces');
    return new Promise((resolve, reject) => {
      const provinces = Provinces.find(findObj); 
      resolve({ provinces });
      reject(true);
    });
  },
  getByRegion: async (params, query) => {
    const codice_regione = params['codice_regione'];
		const from = dateToTimestamp(params['date']);
    const to = (query.to ? dateToTimestamp(query.to) : new Date().getTime()) + 86400000;
    const findObj = { 'codice_regione': Number(codice_regione), timestamp: { '$between': [from, to] }, };
    const Provinces = db.getCollection('provinces');
    return new Promise((resolve, reject) => {
      const provinces = Provinces.find(findObj); 
      resolve({ provinces });
      reject(true);
    });
  },
}