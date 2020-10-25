
const db = require('../db');
const dateToTimestamp = (date) => new Date(date).getTime();

module.exports = {
  get: async (params, query) => {
		const from = dateToTimestamp(params['date']);
    const to = (query.to ? dateToTimestamp(query.to) : new Date().getTime()) + 86400000;
    const findObj = { timestamp: { '$between': [from, to] } };
    const NationalTrends = db.getCollection('nationalTrends');
    return new Promise((resolve, reject) => {
      resolve({ nationalTrends: NationalTrends.find(findObj) });
      reject(true);
    });
  },

}