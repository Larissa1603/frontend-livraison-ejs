module.exports = (sequelize, DataTypes) => {
  const Livraison = sequelize.define('Livraison', {
    description: DataTypes.TEXT,
    date_livraison: DataTypes.DATE,
  });

  Livraison.associate = models => {
    Livraison.belongsTo(models.Client, { foreignKey: 'client_id' });
    Livraison.belongsTo(models.Adresse, { foreignKey: 'adresse_id' });
    Livraison.belongsTo(models.Utilisateur, { foreignKey: 'utilisateur_id' });
    Livraison.belongsTo(models.Statut, { foreignKey: 'statut_id' });
  };

  return Livraison;
};