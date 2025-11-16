const { body } = require('express-validator');

exports.createAdresseValidator = [
  body('rue').notEmpty().withMessage('Rue requise.'),
  body('ville').notEmpty().withMessage('Ville requise.'),
  body('code_postal').notEmpty().withMessage('Code postal requis.')
];