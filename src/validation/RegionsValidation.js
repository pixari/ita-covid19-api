const { body, check } = require('express-validator');

module.exports = {
  getByRegion: () => {
    return [
      check("codice_regione", "codice_regione is required!").not().isEmpty(),
      check("date", "date must be a valid date yyyy-mm-dd!").isDate(),
      check("date", "date is required!").not().isEmpty(),
    ]
  }, 
  list: () => {
    return []
  },
}