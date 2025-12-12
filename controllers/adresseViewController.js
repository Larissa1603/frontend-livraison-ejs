const { Adresse } = require('../models');

// ✅ Liste des adresses
exports.getAllView = async (req, res) => {
  try {
    const adresses = await Adresse.findAll();
    res.render('adresses/index', {
      adresses,
      title: 'Liste des adresses',
      user: res.locals.user
    });
  } catch (error) {
    console.error(error);
    res.render('errors/500', { title: 'Erreur serveur', user: res.locals.user });
  }
};

// ✅ Formulaire création
exports.newForm = (req, res) => {
  res.render('adresses/form', {
    adresse: null,
    title: 'Créer une adresse',
    user: res.locals.user
  });
};

// ✅ Créer une adresse
exports.createView = async (req, res) => {
  try {
    await Adresse.create(req.body);
    res.redirect('/adresses-ui/vue');
  } catch (error) {
    console.error(error);
    res.render('errors/500', { title: 'Erreur serveur', user: res.locals.user });
  }
};

// ✅ Formulaire édition
exports.editForm = async (req, res) => {
  try {
    const adresse = await Adresse.findByPk(req.params.id);
    if (!adresse) {
      return res.render('errors/404', { title: 'Adresse introuvable', user: res.locals.user });
    }
    res.render('adresses/form', {
      adresse,
      title: 'Modifier une adresse',
      user: res.locals.user
    });
  } catch (error) {
    console.error(error);
    res.render('errors/500', { title: 'Erreur serveur', user: res.locals.user });
  }
};

// ✅ Mettre à jour une adresse
exports.updateView = async (req, res) => {
  try {
    const adresse = await Adresse.findByPk(req.params.id);
    if (!adresse) {
      return res.render('errors/404', { title: 'Adresse introuvable', user: res.locals.user });
    }
    await adresse.update(req.body);
    res.redirect('/adresses-ui/vue');
  } catch (error) {
    console.error(error);
    res.render('errors/500', { title: 'Erreur serveur', user: res.locals.user });
  }
};

// ✅ Supprimer une adresse
exports.deleteView = async (req, res) => {
  try {
    const adresse = await Adresse.findByPk(req.params.id);
    if (!adresse) {
      return res.render('errors/404', { title: 'Adresse introuvable', user: res.locals.user });
    }
    await adresse.destroy();
    res.redirect('/adresses-ui/vue');
  } catch (error) {
    console.error(error);
    res.render('errors/500', { title: 'Erreur serveur', user: res.locals.user });
  }
};