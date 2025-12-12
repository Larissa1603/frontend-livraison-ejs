const { Utilisateur, Role } = require('../models');

// ✅ Liste des utilisateurs
exports.getAllView = async (req, res) => {
  try {
    const utilisateurs = await Utilisateur.findAll();
    res.render('utilisateurs/index', {
      utilisateurs,
      title: 'Liste des utilisateurs',
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
    const roles = await Role.findAll();
    res.render('utilisateurs/form', {
      utilisateur: null,
      roles,
      title: 'Créer un utilisateur',
      user: res.locals.user
    });
  } catch (error) {
    console.error(error);
    res.render('errors/500', { title: 'Erreur serveur', user: res.locals.user });
  }
};

// ✅ Créer un utilisateur
exports.createView = async (req, res) => {
  try {
    await Utilisateur.create(req.body);
    res.redirect('/utilisateurs-ui/vue');
  } catch (error) {
    console.error(error);
    res.render('errors/500', { title: 'Erreur serveur', user: res.locals.user });
  }
};

// ✅ Formulaire édition
exports.editForm = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByPk(req.params.id);
    if (!utilisateur) {
      return res.render('errors/404', { title: 'Utilisateur introuvable', user: res.locals.user });
    }
    const roles = await Role.findAll();
    res.render('utilisateurs/form', {
      utilisateur,
      roles,
      title: 'Modifier un utilisateur',
      user: res.locals.user
    });
  } catch (error) {
    console.error(error);
    res.render('errors/500', { title: 'Erreur serveur', user: res.locals.user });
  }
};

// ✅ Mettre à jour un utilisateur
exports.updateView = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByPk(req.params.id);
    if (!utilisateur) {
      return res.render('errors/404', { title: 'Utilisateur introuvable', user: res.locals.user });
    }
    await utilisateur.update(req.body);
    res.redirect('/utilisateurs-ui/vue');
  } catch (error) {
    console.error(error);
    res.render('errors/500', { title: 'Erreur serveur', user: res.locals.user });
  }
};

// ✅ Supprimer un utilisateur
exports.deleteView = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByPk(req.params.id);
    if (!utilisateur) {
      return res.render('errors/404', { title: 'Utilisateur introuvable', user: res.locals.user });
    }
    await utilisateur.destroy();
    res.redirect('/utilisateurs-ui/vue');
  } catch (error) {
    console.error(error);
    res.render('errors/500', { title: 'Erreur serveur', user: res.locals.user });
  }
};