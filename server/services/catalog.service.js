const fs = require('fs');
const { client } = require('../utils/square-client.js');
const { bigIntToJSON } = require('../utils/helpers.js');

const { catalogApi } = client;

const listCatalog = async (type) => {
  try {    
    // const type = 'ITEM';
    const { result, ...httpResponse } = await catalogApi.listCatalog('', type);
    const items = await result.objects;
    await bigIntToJSON(items);
    console.log(`Catalog: ${JSON.stringify(items)}`);
    return { message: items };
    // Get more response info...
    // const { statusCode, headers } = httpResponse;
  } catch(error) {
    // if (error instanceof ApiError) {
      const errors = error.result;
      console.log(errors);
      throw new Error(error);
      // const { statusCode, headers } = error;
    // }
  }
}

const listItems = () => {
  console.log('listItems called!')
  return listCatalog('ITEM');
}
const listImages = async () => {
  console.log('listImages called!')
  return listCatalog('IMAGE');
}

const getImages = () => {
  const pathDir = '../client/src/assets/';
  const images = [
    {
      id: '#mac-n-cheese',
      uuid: 'a331ee68-0955-4822-9fde-ceea37af35ea',
      name: "Mac 'n Cheese",
      caption: 'Classic comfort food',
      url: pathDir + 'mac-n-cheese.jpg'
   },  
   {
      id: '#chicken-pot-pie',
      uuid: '534f5ce7-c581-4eb6-a983-c60e04d50a66',
      name: "Chicken Pot Pie",
      caption: 'Homestyle',
      url: pathDir + 'chicken-pot-pie.jpg'
   },
  ]
  return images;
}

// Error: Response status code was not ok: 400.
// File ReadObject Stream is the likely culprit - fix this
// https://developer.squareup.com/forums/t/only-multipart-form-data-content-type-allowed-but-got-application-x-www-form-urlencoded-node-js-sdk/2296/4
const uploadImageToCatalog = async (images) => {
  images.map(async (image) => {
    const file = fs.createReadStream(image.url); /*, 'utf8'*/
    const fileSizeInBytes = fs.statSync(image.url).size;
    console.log(image.id);
    console.log(fileSizeInBytes);
    try {
      const response = await catalogApi.createCatalogImage({
        idempotencyKey: image.uuid,
        image: {
          type: 'IMAGE',
          id: image.id,
          imageData: {
            caption: image.caption
          }
        }}, file);

        console.log(`Catalog Images uploaded: ${response.result}`);
      } catch(error) {
        console.log(`uploadImageToCatalog failed: ${error}`);
      }  
  })
}

const catalogReady = async () => {
  try {
    console.log('catalog service called!')
    return { message: "Hello from server!" };
  } catch(e) {
    throw new Error(e.message)
  }
}

module.exports = {
  catalogReady: catalogReady,
  listCatalog: listCatalog,
  listItems: listItems,
  listImages: listImages,
  getImages: getImages,
  uploadImageToCatalog: uploadImageToCatalog
}