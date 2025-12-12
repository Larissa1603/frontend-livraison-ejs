const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (!req.session || !req.session.token) {
    res.locals.user = null;
    return next();
  }

  try {
    jwt.verify(req.session.token, process.env.JWT_SECRET);
    res.locals.user = req.session.user;
    next();
  } catch (err) {
    res.locals.user = null;
    next();
  }
};