var path = require('path');
const loyaltyService = require(path.join(__dirname, '../services', 'loyalty.service'));

const { getLoyaltyBalance, retrieveLoyaltyRewards } = loyaltyService

const init = async (req, res, next) => {
  try {
  	console.log('loyalty controller called!');
    const loyaltyBalance = await getLoyaltyBalance();
    const loyaltyRewards = await retrieveLoyaltyRewards();

    const loyalty = {
      balance: loyaltyBalance,
      rewards: loyaltyRewards
    };

  	res.send(loyalty);
    next()
  } catch(err) {
    console.log(err.message)
    res.sendStatus(500) && next(err)
  }	
}

module.exports = {
  init
}