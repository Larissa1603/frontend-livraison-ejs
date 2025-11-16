require('dotenv').config()
const express = require('express')
const app = express()
const { sequelize } = require('./models')

app.use(express.json())

app.use('/auth', require('./routes/authRoutes'))
app.use('/clients', require('./routes/clientRoutes'))
app.use('/adresses', require('./routes/adresseRoutes'))
app.use('/livraisons', require('./routes/livraisonRoutes'))
app.use('/utilisateurs', require('./routes/utilisateurRoutes'))
app.use('/roles', require('./routes/roleRoutes'))
app.use('/statuts', require('./routes/statutRoutes'))

const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
  try {
    await sequelize.sync()
    console.log('Serveur lancé sur http://localhost:' + PORT)
  } catch (error) {
    console.error('Erreur Sequelize :', error)
  }
})