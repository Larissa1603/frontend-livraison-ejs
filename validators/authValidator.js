const { body } = require('express-validator');

// LOGIN
exports.loginValidator = [
  body('email')
    .notEmpty().withMessage('Email obligatoire')
    .isEmail().withMessage('Email invalide')
    .isLength({ max: 100 }).withMessage('Email trop long')
    .normalizeEmail(),

  body('mot_de_passe')
    .notEmpty().withMessage('Mot de passe obligatoire')
    .isLength({ min: 6, max: 100 }).withMessage('Le mot de passe doit contenir entre 6 et 100 caractères')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
    .withMessage('Le mot de passe doit contenir une majuscule, une minuscule et un chiffre')
];

// REGISTER
exports.registerValidator = [
  body('nom')
    .notEmpty().withMessage('Nom obligatoire')
    .isLength({ min: 2, max: 100 }).withMessage('Nom doit contenir entre 2 et 100 caractères')
    .isAlpha('fr-FR', { ignore: ' -' }).withMessage('Le nom doit contenir uniquement des lettres')
    .trim(),

  body('email')
    .notEmpty().withMessage('Email obligatoire')
    .isEmail().withMessage('Email invalide')
    .isLength({ max: 100 }).withMessage('Email trop long')
    .normalizeEmail(),

  body('mot_de_passe')
    .notEmpty().withMessage('Mot de passe obligatoire')
    .isLength({ min: 6, max: 100 }).withMessage('Le mot de passe doit contenir entre 6 et 100 caractères')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
    .withMessage('Le mot de passe doit contenir une majuscule, une minuscule et un chiffre'),

  body('role_id')
    .notEmpty().withMessage('role_id obligatoire')
    .isInt({ min: 1 }).withMessage('role_id doit être un entier positif')
];