const router = require('express').Router();
const ProvincesController = require('./ProvincesController');
const RouteConstant = require('../../constant/Routes');
const Validation = require('../../validation/ProvincesValidation')

module.exports = (app) => {
  router.route('/list')
    .get(
      Validation.list(),
      ProvincesController.list  
  );
  router.route('/getbyprovince/:codice_provincia/:date')
    .get(
      Validation.getByProvince(),
      ProvincesController.getByProvince  
    );
  router.route('/getbyregion/:codice_regione/:date')
    .get(
      Validation.getByRegion(),
      ProvincesController.getByRegion  
    );    
  app.use(
    RouteConstant.PROVINCES,
    router
  );
};