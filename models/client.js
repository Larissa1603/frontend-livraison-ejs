module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    nom: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
  });

  Client.associate = models => {
    Client.hasMany(models.Adresse, { foreignKey: 'client_id' });
    Client.hasMany(models.Livraison, { foreignKey: 'client_id' });
  };

  return Client;
};