/**
 * @swagger
 *  paths:
 *    /national-trends/{date}?to={to}:
 *      get:
 *        tags: 
 *          - NationalTrends
 *        summary: National trends.
 *        description: >
 *          National trends description.
 *        parameters: 
 *          - name: from
 *            in: path
 *            required: true
 *            type: string
 *            description: ex. 2020-08-10
 *          - name: to
 *            in: path
 *            required: false
 *            type: string
 *            description: ex. 2020-10-10
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