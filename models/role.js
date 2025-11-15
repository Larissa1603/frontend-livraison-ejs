module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    nom: DataTypes.STRING,
  });

  Role.associate = models => {
    Role.hasMany(models.Utilisateur, { foreignKey: 'role_id' });
  };

  return Role;
};