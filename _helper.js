//factorise les status des réponses de l'api

exports.success = (message, data) => {
    return { message, data }
  }
  
  //créer des id unique
  // exports.getUniqueId = (produits) => {
  //   const produitsIds = produits.map(produit => produit.id)
  //   const maxId = produitsIds.reduce((a,b) => Math.max(a, b))
  //   const uniqueId = maxId + 1
      
  //   return uniqueId
  // }