## 🦋  BUGS  🦋 
### ❎ NOT WORKING - I KNOW WHY 👩🏻‍💻
- replace hardcoded points in Product.jsx
- nonfunctional, buggy app
<hr/>

### ❌ NOT WORKING - IDK WHY 🤷🏻‍♀️

### 🕰 WORK IN PROGRESS
- handleSubmit() - Referral component (Referral.jsx)
- addToCart + variations change not working properly
- ineligible reward items can be added to cart
- loyalty account balance needs to update with total item points added to cart
- fetch customer account data, replace hardcoded values 
- add customer login & authentication
- delete Stripe from Cart/CheckoutForm/PaymentForm.jsx
- uneven product card height, set fixed height, limit description char count
- deactivate reward when claimed
- fix console log bugs
- ... lots of broken code that I can't think of rn

👇 why don't these work??
```
const { products } = require('../controllers');
const { products } = require(path.join(__dirname, '../controllers'));
```
***

👇 Works
```
const redeemable = loyalty.rewards.filter(reward => loyalty.balance >= reward.points);
```

👇 Doesn't work... ??
```
const isRewardRedeemable = (reward) => loyalty.balance >= reward.points;
const redeemable = loyalty.rewards.filter(reward => isRewardRedeemable(reward.points));
```

**`proxy in server/package.json`** is ignored - why? (no webpack)
<hr/>

## Debugged  🥳

🆗 setupProxy.js not working 
- change folder structure
- move all frontend files to new directory, **`client/`**

<hr/>

🆗 doesItemMatchReward() in Product.jsx

 ``` 
 case 'ITEM_VARIATION':
 const containsItem = variations.filter(variation => {
     console.log('variation: ' + JSON.stringify(variation));
     return variation.id === rewardItemId;
     // variations.indexOf(variation.id === rewardItemId) > -1;
 })
 console.log('containsItem: ' + containsItem.length);
 result = containsItem > 0;
 break;
```
#### *** containsItem.length > 0 *** 😑 👍 
#### 

<hr/>

🆗 **Bug**: change to item variation reward = 2 border colors visible <br/>
&nbsp; &nbsp;&nbsp; **Expected:** only show green border


