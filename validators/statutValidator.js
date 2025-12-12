const { body } = require('express-validator');

exports.createStatutValidator = [
  body('nom').notEmpty().withMessage('Le nom du statut est requis.')
];