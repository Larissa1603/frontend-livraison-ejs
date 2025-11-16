const { body } = require('express-validator');

exports.createUtilisateurValidator = [
  body('nom')
    .notEmpty().withMessage('Le nom est requis.')
    .isLength({ min: 2 }).withMessage('Le nom doit contenir au moins 2 caractères.'),

  body('email')
    .notEmpty().withMessage('L’email est requis.')
    .isEmail().withMessage('Format d’email invalide.'),

  body('mot_de_passe')
    .notEmpty().withMessage('Le mot de passe est requis.')
    .isLength({ min: 6 }).withMessage('Le mot de passe doit contenir au moins 6 caractères.'),

  body('role_id')
    .notEmpty().withMessage('Le rôle est requis.')
    .isInt({ min: 1 }).withMessage('Le rôle doit être un entier positif.')
];