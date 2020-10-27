/**
 * @swagger
 *  paths:
 *    /notes/{date}:
 *      get:
 *        tags: 
 *          - Note
 *        summary: Note
 *        description: >
 *          Elenco delle note su base giornaliera
 *        parameters: 
 *          - name: date
 *            in: path
 *            required: true
 *            type: string
 *            description: dal giorno... (ex. 2020-08-10)
 *          - name: to
 *            in: query
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
 *                  $ref: '#/components/schemas/Note'
 * 
 */

 /**
 * @swagger
 *    components:  
 *      schemas:
 *        Note:
 *          type: object
 *          properties:
 *            data:
 *              type: string
 *            note:
 *              type: string     
 *            timestamp:
 *              type: integer  
 */

const router = require('express').Router();
const NotesController = require('./NotesController');
const RouteConstant = require('../../constant/Routes');
const Validation = require('../../validation/NotesValidation')

module.exports = (app) => {
  router.route('/:date')
    .get(
      Validation.get(),
      NotesController.get  
    );

  app.use(
    RouteConstant.NOTES,
    router
  );
};