const { Livraison, Client, Adresse, Utilisateur, Statut } = require('../models');

// ✅ Liste des livraisons avec associations
exports.getAllView = async (req, res) => {
  try {
    const livraisons = await Livraison.findAll({
      include: [
        { model: Client, attributes: ['nom'] },
        { model: Adresse, attributes: ['rue', 'ville'] },
        { model: Utilisateur, attributes: ['nom'] },
        { model: Statut, attributes: ['nom'] }
      ]
    });

    res.render('livraisons/index', {
      livraisons,
      title: 'Liste des livraisons',
      user: res.locals.user
    });
  } catch (error) {
    console.error(error);
    res.render('errors/500', { title: 'Erreur serveur', user: res.locals.user });
  }
};

// ✅ Formulaire création
exports.newForm = async (req, res) => {
  try {
    const clients = await Client.findAll();
    const adresses = await Adresse.findAll();
    const utilisateurs = await Utilisateur.findAll();
    const statuts = await Statut.findAll();

    res.render('livraisons/form', {
      livraison: null,
      title: 'Créer une livraison',
      clients,
      adresses,
      utilisateurs,
      statuts,
      user: res.locals.user
    });
  } catch (error) {
    console.error(error);
    res.render('errors/500', { title: 'Erreur serveur', user: res.locals.user });
  }
};

// ✅ Créer une livraison
exports.createView = async (req, res) => {
  try {
    await Livraison.create(req.body);
    res.redirect('/livraisons-ui/vue');
  } catch (error) {
    console.error(error);
    res.render('errors/500', { title: 'Erreur serveur', user: res.locals.user });
  }
};

// ✅ Formulaire édition
exports.editForm = async (req, res) => {
  try {
    const livraison = await Livraison.findByPk(req.params.id);
    if (!livraison) {
      return res.render('errors/404', { title: 'Livraison introuvable', user: res.locals.user });
    }

    const clients = await Client.findAll();
    const adresses = await Adresse.findAll();
    const utilisateurs = await Utilisateur.findAll();
    const statuts = await Statut.findAll();

    res.render('livraisons/form', {
      livraison,
      title: 'Modifier une livraison',
      clients,
      adresses,
      utilisateurs,
      statuts,
      user: res.locals.user
    });
  } catch (error) {
    console.error(error);
    res.render('errors/500', { title: 'Erreur serveur', user: res.locals.user });
  }
};

// ✅ Mettre à jour une livraison
exports.updateView = async (req, res) => {
  try {
    const livraison = await Livraison.findByPk(req.params.id);
    if (!livraison) {
      return res.render('errors/404', { title: 'Livraison introuvable', user: res.locals.user });
    }
    await livraison.update(req.body);
    res.redirect('/livraisons-ui/vue');
  } catch (error) {
    console.error(error);
    res.render('errors/500', { title: 'Erreur serveur', user: res.locals.user });
  }
};

// ✅ Supprimer une livraison
exports.deleteView = async (req, res) => {
  try {
    const livraison = await Livraison.findByPk(req.params.id);
    if (!livraison) {
      return res.render('errors/404', { title: 'Livraison introuvable', user: res.locals.user });
    }
    await livraison.destroy();
    res.redirect('/livraisons-ui/vue');
  } catch (error) {
    console.error(error);
    res.render('errors/500', { title: 'Erreur serveur', user: res.locals.user });
  }
};