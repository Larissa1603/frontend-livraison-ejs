const { Role } = require('../models');

// Liste des rôles
exports.getAllView = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.render('roles/index', { roles, title: 'Liste des rôles' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Formulaire création
exports.newForm = (req, res) => {
  res.render('roles/form', { role: null, title: 'Créer un rôle' });
};

// Créer un rôle
exports.createView = async (req, res) => {
  try {
    await Role.create(req.body);
    res.redirect('/roles-ui/vue');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Formulaire édition
exports.editForm = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (!role) return res.status(404).send("Rôle non trouvé");
    res.render('roles/form', { role, title: 'Modifier un rôle' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mettre à jour un rôle
exports.updateView = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (!role) return res.status(404).send("Rôle non trouvé");
    await role.update(req.body);
    res.redirect('/roles-ui/vue');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Supprimer un rôle
exports.deleteView = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (!role) return res.status(404).send("Rôle non trouvé");
    await role.destroy();
    res.redirect('/roles-ui/vue');
  } catch (error) {
    res.status(500).send(error.message);
  }
};