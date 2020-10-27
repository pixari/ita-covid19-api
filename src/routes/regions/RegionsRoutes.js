/**
 * @swagger
 *  paths:
 *    /regions/list:
 *      get:
 *        tags: 
 *          - Elenco delle regioni
 *        summary: Elenco dei nomi e dei codici delle regioni
 *        description: >
 *          L'elenco delle regioni è basato sui dati risponibili
 *        responses:
 *          '200':
 *            description: Successful operation
 *            content: 
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Region'
 *    /regions/getbyregion/{codice_regione}/{date}:
 *      get:
 *        tags: 
 *          - Trend regionali
 *        summary: Dati di una singola regione
 *        description: >
 *          Elenco dei dati di una singola regione filtrati per data
 *        parameters: 
 *          - name: codice_regione
 *            in: path
 *            required: true
 *            schema:
 *              type: integer
 *              minimum: 1
 *              maximum: 22
 *            description: il codice della regione (vedi list)
 *          - name: date
 *            in: path
 *            required: true
 *            type: string
 *            description: dal giorno... (ex. 2020-08-10)
 *        responses:
 *          '200':
 *            description: Successful operation
 *            content: 
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Region'
 */

 /**
 * @swagger
 *    components:  
 *      schemas:
 *        Region:
 *          type: object
 *          properties:
 *            denominazione_regione:
 *              type: string
 *            codice_regione:
 *              type: integer    
 *         
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