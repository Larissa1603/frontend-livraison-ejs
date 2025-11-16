const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')
const bcrypt = require('bcrypt')

const Utilisateur = sequelize.define('Utilisateur', {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Le nom ne peut pas être vide.' }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: 'Format d’email invalide.' }
    }
  },
  mot_de_passe: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [6, 100],
        msg: 'Le mot de passe doit contenir au moins 6 caractères.'
      }
    }
  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: { msg: 'role_id doit être un entier.' },
      min: {
        args: [1],
        msg: 'role_id doit être supérieur à 0.'
      }
    }
  }
}, {
  tableName: 'utilisateurs',
  timestamps: true
})

// Hook pour hacher le mot de passe avant création
Utilisateur.beforeCreate(async (utilisateur) => {
  const salt = await bcrypt.genSalt(10)
  utilisateur.mot_de_passe = await bcrypt.hash(utilisateur.mot_de_passe, salt)
})

// Méthode pour vérifier le mot de passe
Utilisateur.prototype.verifyPassword = function (mot_de_passe) {
  return bcrypt.compare(mot_de_passe, this.mot_de_passe)
}

module.exports = Utilisateur