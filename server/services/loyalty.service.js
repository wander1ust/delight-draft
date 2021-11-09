const { client } = require('../utils/square-client.js');
const { bigIntToJSON } = require('../utils/helpers.js');
const { randomUUID } = require ('crypto');

// const uuid = randomUUID(); 

const phoneNumber = '+12025550130';
const programId = '0bf55dd3-c1ee-4279-8653-64898e8fb637';
const accountId = 'ed449ca9-1fad-4f7e-b0b6-48bd1f4de883';

const BEVERAGE_CATEGORY_ID = 'UC6L3ZTEA7PWITPE3NLYVRX6';

const retrieveCatalogObject = async (objectId) => {
  try {
    const response = await client.catalogApi.retrieveCatalogObject(objectId);

    console.log(response.result);
  } catch(error) {
    console.log(error);
  }  
}

const searchCatalogItems = async () => {
  try {
    const response = await client.catalogApi.searchCatalogItems({
      textFilter: 'large',
      categoryIds: [
        BEVERAGE_CATEGORY_ID
      ],
      // sortOrder: 'ASC',
      // productTypes: [
      //   'REGULAR'
      // ],
      // customAttributeFilters: [
      //   {
      //     customAttributeDefinitionId: 'VEGAN_DEFINITION_ID',
      //     boolFilter: true
      //   },
      //   {
      //     customAttributeDefinitionId: 'BRAND_DEFINITION_ID',
      //     stringFilter: 'Dark Horse'
      //   },
      //   {
      //     key: 'VINTAGE',
      //     numberFilter: {
      //       min: '2017',
      //       max: '2018'
      //     }
      //   },
      //   {
      //     customAttributeDefinitionId: 'VARIETAL_DEFINITION_ID'
      //   }
      // ]
    });

    console.log(response.result);
  } catch(error) {
    console.log(error);
  }  
}

const retrieveLoyaltyRewards = async () => {
  try {
    const response = await client.loyaltyApi.retrieveLoyaltyProgram('main');
    await bigIntToJSON(response.result);
    console.log(`Loyalty Program: ${JSON.stringify(response.result)}`);
    return response.result.program.rewardTiers;
  } catch(error) {
    console.log(error);
  }
}

const getLoyaltyBalance = async () => {
  const balance = (await retrieveLoyaltyAccount()).loyaltyAccount.balance;
  console.log(balance);
  return balance; 
}

const retrieveLoyaltyAccount = async () => {
  try {
    const response = await client.loyaltyApi.retrieveLoyaltyAccount(accountId);

    await bigIntToJSON(response.result);
    // console.log(response.result.loyaltyAccount.balance);
    return response.result;
  } catch(error) {
    console.log(error);
  }  
}

const adjustLoyaltyPoints = async () => {
  try {
    const response = await client.loyaltyApi.adjustLoyaltyPoints(accountId,
    {
      idempotencyKey: randomUUID(),
      adjustPoints: {
        points: 30,
        reason: 'Sign up bonus'
      }
    });
    await bigIntToJSON(response.result);
    console.log(response.result);
  } catch(error) {
    console.log(error);
  }  
}

const createLoyaltyAccount = async () => {
  try {
    const response = await client.loyaltyApi.createLoyaltyAccount({
      loyaltyAccount: {
        programId: programId,
        mapping: {
          phoneNumber: phoneNumber
        }
        // customer_id: 
      },
      idempotencyKey: randomUUID()
    });
    await bigIntToJSON(response.result);
    console.log(response.result);
  } catch(error) {
    console.log(error);
  }
}

module.exports = {
  retrieveLoyaltyRewards: retrieveLoyaltyRewards,
  createLoyaltyAccount: createLoyaltyAccount,
  adjustLoyaltyPoints: adjustLoyaltyPoints,
  retrieveLoyaltyAccount: retrieveLoyaltyAccount,
  getLoyaltyBalance: getLoyaltyBalance,
  searchCatalogItems: searchCatalogItems,
  retrieveCatalogObject: retrieveCatalogObject
}