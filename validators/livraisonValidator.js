const { body } = require('express-validator');

exports.createLivraisonValidator = [
  body('date_livraison').isISO8601().withMessage('Date invalide.'),
  body('client_id').isInt({ min: 1 }).withMessage('Client invalide.'),
  body('adresse_id').isInt({ min: 1 }).withMessage('Adresse invalide.'),
  body('statut_id').isInt({ min: 1 }).withMessage('Statut invalide.')
];