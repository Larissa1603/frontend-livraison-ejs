module.exports = (roleRequired = null) => {
  return (req, res, next) => {
    if (req.session && req.session.user) {
      if (roleRequired && req.session.user.role !== roleRequired) {
        // ❌ rôle insuffisant → afficher page 403
        return res.status(403).render('errors/403', {
          title: 'Accès interdit',
          user: res.locals.user
        });
      }
      return next();
    }
    // ❌ pas connecté → redirection vers login
    res.redirect('/auth-ui/vue/login');
  };
};