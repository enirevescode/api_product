const { ProduitModel } = require('./db.config')



module.exports = (app) => {
  app.get('/api/produits', (req, res) => {
    Pokemon.findAll()
      .then(produits => {
        const message = 'La liste des pokémons a bien été récupérée.'
        res.json({ message, data: produits })
      })
  })
}