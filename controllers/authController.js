const { Utilisateur } = require('../models');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { email, mot_de_passe } = req.body;

  try {
    const user = await Utilisateur.findOne({ where: { email } });
    if (!user) return res.status(401).json({ error: 'Utilisateur non trouvé.' });

    const isValid = await user.verifyPassword(mot_de_passe);
    if (!isValid) return res.status(401).json({ error: 'Mot de passe incorrect.' });

    const token = jwt.sign(
      { id: user.id, role: user.role_id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur.' });
  }
};