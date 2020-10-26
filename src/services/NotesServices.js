
const db = require('../db');
const dateToTimestamp = (date) => new Date(date).getTime();

module.exports = {
  get: async (params, query) => {
		const from = dateToTimestamp(params['date']);
    const to = (query.to ? dateToTimestamp(query.to) : new Date().getTime()) + 86400000;
    const findObj = { timestamp: { '$between': [from, to] } };
    const Notes = db.getCollection('notes');
    console.log(Notes);
    return new Promise((resolve, reject) => {
      resolve({notes: Notes.find(findObj) });
      reject(true);
    });
  },

}