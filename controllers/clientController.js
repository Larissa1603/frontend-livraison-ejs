const Client = require('../models/client');

// Récupérer tous les clients
exports.getAll = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer un client par ID
exports.getById = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) return res.status(404).json({ error: "Client non trouvé" });
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Créer un client
exports.create = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un client
exports.update = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) return res.status(404).json({ error: "Client non trouvé" });
    await client.update(req.body);
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un client
exports.delete = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) return res.status(404).json({ error: "Client non trouvé" });
    await client.destroy();
    res.json({ message: "Client supprimé" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};