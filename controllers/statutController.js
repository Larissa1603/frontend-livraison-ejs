const { Statut } = require('../models');

exports.create = async (req, res) => {
  try {
    const statut = await Statut.create(req.body);
    res.status(201).json(statut);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const statuts = await Statut.findAll();
    res.json(statuts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const statut = await Statut.findByPk(req.params.id);
    if (!statut) return res.status(404).json({ error: 'Statut non trouvé' });
    res.json(statut);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const statut = await Statut.findByPk(req.params.id);
    if (!statut) return res.status(404).json({ error: 'Statut non trouvé' });
    await statut.update(req.body);
    res.json(statut);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const statut = await Statut.findByPk(req.params.id);
    if (!statut) return res.status(404).json({ error: 'Statut non trouvé' });
    await statut.destroy();
    res.json({ message: 'Statut supprimé' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};