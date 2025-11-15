module.exports = (sequelize, DataTypes) => {
  const Adresse = sequelize.define('Adresse', {
    rue: DataTypes.STRING,
    ville: DataTypes.STRING,
    code_postal: DataTypes.STRING,
  });

  Adresse.associate = models => {
    Adresse.belongsTo(models.Client, { foreignKey: 'client_id' });
    Adresse.hasMany(models.Livraison, { foreignKey: 'adresse_id' });
  };

  return Adresse;
};