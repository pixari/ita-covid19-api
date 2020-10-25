const { body, check } = require('express-validator');

module.exports = {
  get: () => {
    return [
      check("date", "Date must be a valid date yyyy-mm-dd!").isDate(),
      check("date", "Date is required!").not().isEmpty(),
    ]
  },
}