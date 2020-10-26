/**
 * @swagger
 *  paths:
 *    /national-trends/{date}?to={to}:
 *      get:
 *        tags: 
 *          - TrendNazionali
 *        summary: Trend nazionali.
 *        description: >
 *          Elenco del riassunto giornaliero dei dati nazionali
 *        parameters: 
 *          - name: date
 *            in: path
 *            required: true
 *            type: string
 *            description: La data minima per filtrare i dati in formato yyyy-mm-dd. (ex. 2020-08-10)
 *          - name: to
 *            in: path
 *            required: false
 *            type: string
 *            description: La data massima per filtrare i dati in formato yyyy-mm-dd. (ex. 2020-08-12)
 *        responses:
 *          '200':
 *            description: Successful operation
 *            content: 
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/NationalTrend'
 *        externaDocs:
 *          description: Description.
 * 
 * components:  
 *  schemas:
 *    NationalTrend:
 *      type: object
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