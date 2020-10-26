/**
 * @swagger
 *  paths:
 *    /national-trends/{date}?to={to}:
 *      get:
 *        tags: 
 *          - Trend nazionali
 *        summary: Trend nazionali.
 *        description: >
 *          Elenco del riassunto giornaliero dei dati nazionali
 *        parameters: 
 *          - name: date
 *            in: path
 *            required: true
 *            type: string
 *            description: dal giorno... (ex. 2020-08-10)
 *          - name: to
 *            in: path
 *            allowEmptyValue: true
 *            required: false
 *            type: string
 *            description: al giorno... (ex. 2020-08-10)
 *        responses:
 *          '200':
 *            description: Successful operation
 *            content: 
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/NationalTrend'
 * 
 */

 /**
 * @swagger
 *    components:  
 *      schemas:
 *        NationalTrend:
 *          type: object
 *          properties:
 *            data:
 *              type: string
 *            stato:
 *              type: string    
 *            ricoverati_con_sintomi:
 *              type: integer   
 *            terapia_intensiva:
 *              type: integer   
 *            totale_ospedalizzati:
 *              type: integer   
 *            isolamento_domiciliare:
 *              type: integer   
 *            totale_positivi:
 *              type: integer   
 *            variazione_totale_positivi:
 *              type: integer   
 *            nuovi_positivi:
 *              type: integer   
 *            dimessi_guariti:
 *              type: integer  
 *            deceduti:
 *              type: integer  
 *            casi_da_sospetto_diagnostico:
 *              type: integer  
 *            casi_da_screening:
 *              type: integer  
 *            totale_casi:
 *              type: integer  
 *            tamponi:
 *              type: integer  
 *            casi_testati:
 *              type: integer    
 *            note:
 *              type: string   
 *            timestamp:
 *              type: integer  
 */


const router = require('express').Router();
const NationalTrendsController = require('./NationalTrendsController');
const RouteConstant = require('../../constant/Routes');
const Validation = require('../../validation/NationalTrendsValidation')

module.exports = (app) => {
  router.route('/:date')
    .get(
      Validation.get(),
      NationalTrendsController.get  
    );

  app.use(
    RouteConstant.NATIONAL_TRENDS,
    router
  );
};