const { Utilisateur } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Afficher le formulaire de login
exports.loginForm = (req, res) => {
  res.render('auth/login', { title: 'Connexion', error: null });
};

// Traitement du login
exports.login = async (req, res) => {
  const { email, mot_de_passe } = req.body;

  try {
    if (!email || !mot_de_passe) {
      return res.render('auth/login', { title: 'Connexion', error: 'Email et mot de passe requis.' });
    }

    const user = await Utilisateur.findOne({ where: { email } });
    if (!user) {
      return res.render('auth/login', { title: 'Connexion', error: 'Utilisateur non trouvé.' });
    }

    const isValid = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
    if (!isValid) {
      return res.render('auth/login', { title: 'Connexion', error: 'Mot de passe incorrect.' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role_id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Stocker en session
    req.session.token = token;
    req.session.user = { id: user.id, email: user.email, role: user.role_id };

    // ✅ Redirection vers le dashboard
    res.redirect('/dashboard-ui/vue');
  } catch (error) {
    res.render('auth/login', { title: 'Connexion', error: 'Erreur serveur.' });
  }
};

// Déconnexion
exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/auth-ui/vue/login');
  });
};