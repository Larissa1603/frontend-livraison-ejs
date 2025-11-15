const { Livraison, Client, Adresse, Utilisateur, Statut } = require('../models');

exports.getAllLivraisons = async (req, res) => {
  const { page = 1, limit = 10, statut_id } = req.query;
  const offset = (page - 1) * limit;
  const where = statut_id ? { statut_id } : {};

  const livraisons = await Livraison.findAndCountAll({
    where,
    limit: +limit,
    offset,
    include: [Client, Adresse, Utilisateur, Statut],
  });

  res.json({ total: livraisons.count, page: +page, data: livraisons.rows });
};

exports.getLivraisonById = async (req, res) => {
  const livraison = await Livraison.findByPk(req.params.id, {
    include: [Client, Adresse, Utilisateur, Statut],
  });
  if (!livraison) return res.status(404).json({ message: 'Livraison non trouvée' });
  res.json(livraison);
};

exports.createLivraison = async (req, res) => {
  const livraison = await Livraison.create(req.body);
  res.status(201).json(livraison);
};

exports.updateLivraison = async (req, res) => {
  const livraison = await Livraison.findByPk(req.params.id);
  if (!livraison) return res.status(404).json({ message: 'Livraison non trouvée' });

  await livraison.update(req.body);
  res.json(livraison);
};