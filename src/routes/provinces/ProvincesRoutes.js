/**
 * @swagger
 *  paths:
 *    /provinces/list:
 *      get:
 *        tags: 
 *          - Province
 *        summary: Elenco dei nomi e dei codici delle province
 *        description: >
 *          L'elenco delle province è basato sui dati risponibili
 *        responses:
 *          '200':
 *            description: Successful operation
 *            content: 
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Province'
 *    /provinces/getbyregion/{codice_regione}/{date}:
 *      get:
 *        tags: 
 *          - Trend delle province di una regione
 *        summary: Elenco dei dati delle province di una regione
 *        description: >
 *          Elenco dei dati delle province di una regione su base temporale
 *        parameters: 
 *          - name: codice_regione
 *            in: path
 *            required: false
 *            type: integer
 *            description: il codice della regione (vedi list)
 *          - name: date
 *            in: path
 *            required: true
 *            type: string
 *            description: dal giorno... (ex. 2020-08-10)
 *    /provinces/getbyprovince/{codice_provincia}/{date}:
 *      get:
 *        tags: 
 *          - Trend di una provincia
 *        summary: Elenco dei dati di una provincia
 *        description: >
 *          Elenco dei dati di una provincia filtrati per base temporale
 *        parameters: 
 *          - name: codice_provincia
 *            in: path
 *            required: true
 *            type: integer
 *            description: il codice della provincia (vedi list)
 *          - name: date
 *            in: path
 *            required: true
 *            type: string
 *            description: dal giorno... (ex. 2020-08-10)
 */


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