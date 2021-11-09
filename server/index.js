const express = require('express');
const app = express(); 
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000; 
const fetch = require('node-fetch');
var path = require('path');

const routes = require('./routes');
const catalogService = require('./services/catalog.service.js');
const loyaltyService = require('./services/loyalty.service.js');

let router = express.Router();

app.use(router);
app.use('/api', routes);


// create a GET route
app.get('/', (req, res) => { 
  // loyaltyService.retrieveCatalogObject('UC6L3ZTEA7PWITPE3NLYVRX6');
  catalogService.listItems();
  // catalogService.listCatalog('ITEM_VARIATION');
  // catalogService.uploadImageToCatalog(catalogService.getImages());
  res.status(200).send({ message: "Hello from server!" });
  // res.send({ express: 'Connected' }); 
});

// router.get('/', function (req, res, next) {
//     console.log("Main Router Working");
//     // res.send(conversationService.getSpeechToText());
//     res.sendFile(path.join(__dirname, '../public', 'index.html'));
//     // res.sendFile(__dirname+'../client/index.html');
//     // res.end();
// });

// run and listen to server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); 

