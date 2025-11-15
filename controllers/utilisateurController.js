const { Utilisateur, Role } = require('../models');

exports.getAllUtilisateurs = async (req, res) => {
  const { page = 1, limit = 10, role_id } = req.query;
  const offset = (page - 1) * limit;
  const where = role_id ? { role_id } : {};

  const utilisateurs = await Utilisateur.findAndCountAll({
    where,
    limit: +limit,
    offset,
    include: [Role],
  });

  res.json({ total: utilisateurs.count, page: +page, data: utilisateurs.rows });
};

exports.getUtilisateurById = async (req, res) => {
  const utilisateur = await Utilisateur.findByPk(req.params.id, {
    include: [Role],
  });
  if (!utilisateur) return res.status(404).json({ message: 'Utilisateur non trouvé' });
  res.json(utilisateur);
};

exports.createUtilisateur = async (req, res) => {
  const utilisateur = await Utilisateur.create(req.body);
  res.status(201).json(utilisateur);
};

exports.updateUtilisateur = async (req, res) => {
  const utilisateur = await Utilisateur.findByPk(req.params.id);
  if (!utilisateur) return res.status(404).json({ message: 'Utilisateur non trouvé' });

  await utilisateur.update(req.body);
  res.json(utilisateur);
};