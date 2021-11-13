## 🦋  BUGS  🦋 
### ❎ NOT WORKING - I KNOW WHY 👩🏻‍💻
<hr/>

### ❌ NOT WORKING - IDK WHY 🤷🏻‍♀️

👇 why don't these work??

```
const { products } = require('../controllers');
const { products } = require(path.join(__dirname, '../controllers'));
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


