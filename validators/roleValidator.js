const { body } = require('express-validator');

exports.createRoleValidator = [
  body('nom').notEmpty().withMessage('Le nom du rôle est requis.')
];