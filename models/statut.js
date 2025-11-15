module.exports = (sequelize, DataTypes) => {
  const Statut = sequelize.define('Statut', {
    nom: DataTypes.STRING,
  });

  Statut.associate = models => {
    Statut.hasMany(models.Livraison, { foreignKey: 'statut_id' });
  };

  return Statut;
};