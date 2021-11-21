const Product = require("../models/product")

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product'
  });
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save()
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  // Rappel : static permet d'appeler la fonction sur la classe en elle même, sans devoir passer par une instantiation de la classe (ex:
  // Avec instantiation
  // const product = new Product(title) 
  // product.fetchAll()

  // Avec static sur la classe en elle même
  // const products = Product.fetchAll()
  //
  // => instanciation de classe = création d'un objet pour faire appel à la fonction fetchAll. Etape supplémentaire superficielle si je peux appeler la fonction directement sur la classe avec static)

  const products = Product.fetchAll()
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/'
  });
}