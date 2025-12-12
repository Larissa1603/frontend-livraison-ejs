const { body } = require('express-validator');

exports.createClientValidator = [
  body('nom').notEmpty().withMessage('Le nom est requis.'),
  body('telephone').notEmpty().withMessage('Le téléphone est requis.'),
  body('email').optional().isEmail().withMessage('Email invalide.')
];