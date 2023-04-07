//const Produit = require('./db.config')
const Produit = require('../models/produit')


module.exports = (app) => {
  app.get('/api/produits', (req, res) => {
    Produit.findAll()
      .then(produits => {
        const message = 'La liste des pokémons a bien été récupérée.'
        res.json({ message, data: produits })
      })
  })
}