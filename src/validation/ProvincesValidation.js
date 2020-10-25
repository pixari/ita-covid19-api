const { body, check } = require('express-validator');

module.exports = {
  getByProvince: () => {
    return [
      check("codice_provincia", "codice_provincia is required!").not().isEmpty(),
      check("date", "Date must be a valid date yyyy-mm-dd!").isDate(),
      check("date", "Date is required!").not().isEmpty(),
    ]
  },
  getByRegion: () => {
    return [
      check("codice_regione", "codice_regione is required!").not().isEmpty(),
      check("date", "Date must be a valid date yyyy-mm-dd!").isDate(),
      check("date", "Date is required!").not().isEmpty(),
    ]
  },    
  list: () => {
    return []
  },
}