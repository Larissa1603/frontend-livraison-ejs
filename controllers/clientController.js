const { Client } = require('../models');

exports.getAllClients = async (req, res) => {
  const { page = 1, limit = 10, nom } = req.query;
  const offset = (page - 1) * limit;
  const where = nom ? { nom } : {};

  const clients = await Client.findAndCountAll({ where, limit: +limit, offset });
  res.json({ total: clients.count, page: +page, data: clients.rows });
};

exports.getClientById = async (req, res) => {
  const client = await Client.findByPk(req.params.id);
  if (!client) return res.status(404).json({ message: 'Client non trouvé' });
  res.json(client);
};

exports.createClient = async (req, res) => {
  const client = await Client.create(req.body);
  res.status(201).json(client);
};

exports.updateClient = async (req, res) => {
  const client = await Client.findByPk(req.params.id);
  if (!client) return res.status(404).json({ message: 'Client non trouvé' });

  await client.update(req.body);
  res.json(client);
};