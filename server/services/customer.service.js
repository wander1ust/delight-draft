const { client } = require('../utils/square-client.js');
const { bigIntToJSON } = require('../utils/helpers.js');
const crypto = require ('crypto');

// TODO: import mailing list (bulk import)

// get list of customers -> find customers with matching referral code
// referral code === referrer's reference_id
const getReferredCustomers = async (referralCode) => {
	try {
	  const customers = await client.customersApi.listCustomers();
	  console.log('getReferredCustomers: ' + response.result);
	  customers.find(customer => {
	  	readNote(customer.note)['REFERRED_BY'] === referralCode;
	  })
	} catch(error) {
	  console.log(error);
	}	
}

// e.g. {"REFERRED_BY":"12345"," REFERRALS":"0"," GIFT_CARD_BALANCE":"0"}
const readNote = async (customerNote) => {
		const note = customerNote.split(",");
		// const convertArrToObj = () => {
		  let obj = {};
		  arr.map(str => {
		      const index = str.indexOf(':');
		      obj[str.slice(0, index)] = str.slice(index+1, str.length).trim();
		  })
		  return obj;
		// }
		console.log('readNote: ' + JSON.stringify(readNote));
}

// when new user registers with referral code, update referrer's gift card balance with amount X # of referrals

const createCustomer = async (firstName, lastName, email, referralCode) => {
	try {
	  const response = await client.customersApi.createCustomer({
	    givenName: firstName,
	    familyName: lastName,
	    emailAddress: email,
	    referenceId: crypto.randomBytes(8).toString('hex'),
	    note: referralCode
	  });

	  console.log(response.result);
	} catch(error) {
	  console.log(error);
	}		
}

const findCustomer = async (filterType, query) => {
    const filterQuery =
	    switch(filterType) {
	      case 'email':
	        return emailAddress: {exact: query}
	        break;
	      case 'phoneNumber':
	        return phone_number: {exact: query}
	        break;      
	      case 'referenceId':
	        return reference_id: {exact: query}
	        break;
	      default:  
	    }; 	
		try {
		  const response = await client.customersApi.searchCustomers({
		    limit: 1,
		    query: {
		      filter: {
		        creationSource: {
		          values: [
		            'THIRD_PARTY'
		          ],
		          rule: 'INCLUDE'
		        },
		        filterQuery,
		        // createdAt: {
		        //   startAt: '2018-01-01T00:00:00-00:00',
		        //   endAt: '2018-02-01T00:00:00-00:00'
		        // },
		        // emailAddress: {
		        //   exact: 'example.com'
		        // },
		        // groupIds: {
		        //   all: [
		        //     '545AXB44B4XXWMVQ4W8SBT3HHF'
		        //   ]
		        // }
		      },
		      // sort: {
		      //   field: 'CREATED_AT',
		      //   order: 'ASC'
		      // }
		    }
		  });

		  console.log(response.result);
		} catch(error) {
		  console.log(error);
		}	
}

const updateCustomer = async (email) => {
	try {
	  const response = await client.customersApi.updateCustomer('JDKYHBWT1D4F8MFH63DBMEN8Y4',
	  {
	    emailAddress: email,
	    // phoneNumber: '',
	    note: 'update gift card balance',
	    version: 2
	  });

	  console.log(response.result);
	} catch(error) {
	  console.log(error);
	}	
}

module.exports = {
  createCustomer: createCustomer,
  findCustomer: findCustomer,
  updateCustomer: updateCustomer
}