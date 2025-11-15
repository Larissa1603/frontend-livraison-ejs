module.exports = (sequelize, DataTypes) => {
  const Utilisateur = sequelize.define('Utilisateur', {
    nom: DataTypes.STRING,
    email: DataTypes.STRING,
    mot_de_passe: DataTypes.STRING,
  });

  Utilisateur.associate = models => {
    Utilisateur.belongsTo(models.Role, { foreignKey: 'role_id' });
    Utilisateur.hasMany(models.Livraison, { foreignKey: 'utilisateur_id' });
  };

  return Utilisateur;
};