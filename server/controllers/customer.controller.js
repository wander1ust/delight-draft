var path = require('path');
const customerService = require(path.join(__dirname, '../services', 'customer.service'));

const { createCustomer, findCustomer, updateCustomer } = customerService

// POST
const postInit = async (req, res, next) => {
    // try {
      // router.post('/customer', (req, res) => {
        // Logs course sent from front end
        console.log('Referral Invite from server: ');
        console.log('req.body: ' + req.body);
        // wordCount = req.body.wordCount;
        // res.status(200).send({ message: 'reload' });
        // res.send('Word count from server: ' + req.body.wordCount);
      // }); 
    // } catch(err) {
      console.log(err.message);
      res.sendStatus(500) && next(err);
    // }       
}

 

// // const getWordCloud = () => {
//   router.get('/api/wordCloud', asyncMiddleware(async (req, res, next) => { 
//     const transcript = await getSpeechToText();
//     const wordCloudImageUrl = getWordCloudImageUrl(extractText(transcript), wordCount);
//     const audioSentiment = await getSentiment(await getSpeechToText());

//       console.log("Main Router Working");
//         res.status(200).send({ 
//           message: {
//             wordCloudImageUrl: wordCloudImageUrl,
//             sentiment: getSentimentWordCloudUrl(audioSentiment),
//             sentimentCount: countSentimentTypes(audioSentiment)
//           }
//         });        
//   })); 

// GET
const init = async (req, res, next) => {
  try {
  	console.log('customer controller called!');
    // const firstName = ;
    // const lastName = ;
    // const email = ;
    // const referralCode = ;
    
    // const newCustomerReferral = await createCustomer(firstName, lastName, email, referralCode);

    // const loyalty = {
    //   balance: loyaltyBalance
    // };

  	res.send('done');
    next()
  } catch(err) {
    console.log(err.message)
    res.sendStatus(500) && next(err)
  }	
}

module.exports = {
  init: init,
  postInit: postInit
}