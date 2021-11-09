// const { productsService } = require('../services')
var path = require('path');
const catalogService = require(path.join(__dirname, '../services', 'catalog.service'));

const { catalogReady, listItems, listImages } = catalogService

const init = async (req, res, next) => {
  try {
  	console.log('catalog controller called!');
    const catalogItems = await listItems();
    const catalogImages = await listImages();
    const catalog = {items: catalogItems, images: catalogImages};
  	res.send(catalog);
    // res.send({message: catalog});
    // res.sendStatus(201)
    next()
  } catch(err) {
    console.log(err.message)
    res.sendStatus(500) && next(err)
  }	
}

module.exports = {
  init
}