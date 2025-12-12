const { Statut } = require('../models');

// Liste des statuts
exports.getAllView = async (req, res) => {
  try {
    const statuts = await Statut.findAll();
    res.render('statuts/index', { statuts, title: 'Liste des statuts' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Formulaire création
exports.newForm = (req, res) => {
  res.render('statuts/form', { statut: null, title: 'Créer un statut' });
};

// Créer un statut
exports.createView = async (req, res) => {
  try {
    await Statut.create(req.body);
    res.redirect('/statuts-ui/vue');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Formulaire édition
exports.editForm = async (req, res) => {
  try {
    const statut = await Statut.findByPk(req.params.id);
    if (!statut) return res.status(404).send("Statut non trouvé");
    res.render('statuts/form', { statut, title: 'Modifier un statut' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mettre à jour un statut
exports.updateView = async (req, res) => {
  try {
    const statut = await Statut.findByPk(req.params.id);
    if (!statut) return res.status(404).send("Statut non trouvé");
    await statut.update(req.body);
    res.redirect('/statuts-ui/vue');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Supprimer un statut
exports.deleteView = async (req, res) => {
  try {
    const statut = await Statut.findByPk(req.params.id);
    if (!statut) return res.status(404).send("Statut non trouvé");
    await statut.destroy();
    res.redirect('/statuts-ui/vue');
  } catch (error) {
    res.status(500).send(error.message);
  }
};