/**
 * @swagger
 *  paths:
 *    /regions/list:
 *      get:
 *        tags: 
 *          - Regions
 *        summary: List of available regions.
 *        description: >
 *          List of all available regions extracted from the latest data.
 *        responses:
 *          '200':
 *            description: Successful operation
 *            content: 
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Region'
 * 
 * components:
 *  schemas:
 *    Region:
 *      type: object
 */


const router = require('express').Router();
const RegionsController = require('./RegionsController');
const RouteConstant = require('../../constant/Routes');
const Validation = require('../../validation/RegionsValidation')

module.exports = (app) => {
  router.route('/list')
    .get(
      Validation.list(),
      RegionsController.list  
    );
  router.route('/getbyregion/:codice_regione/:date')
    .get(
      Validation.getByRegion(),
      RegionsController.getByRegion  
    );
  app.use(
    RouteConstant.REGIONS,
    router
  );
};