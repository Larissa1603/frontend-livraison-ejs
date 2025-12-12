const { Client } = require('../models');

// Liste des clients
exports.getAllView = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.render('clients/index', { clients, title: 'Liste des clients' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Formulaire création
exports.newForm = (req, res) => {
  res.render('clients/form', { client: null, title: 'Créer un client' });
};

// Créer un client
exports.createView = async (req, res) => {
  try {
    await Client.create(req.body);
    res.redirect('/clients-ui/vue');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Formulaire édition
exports.editForm = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) return res.status(404).send("Client non trouvé");
    res.render('clients/form', { client, title: 'Modifier un client' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mettre à jour un client
exports.updateView = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) return res.status(404).send("Client non trouvé");
    await client.update(req.body);
    res.redirect('/clients-ui/vue');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Supprimer un client
exports.deleteView = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) return res.status(404).send("Client non trouvé");
    await client.destroy();
    res.redirect('/clients-ui/vue');
  } catch (error) {
    res.status(500).send(error.message);
  }
};