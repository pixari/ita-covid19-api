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