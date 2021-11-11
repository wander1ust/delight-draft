## 🦋  BUGS  🦋 
### ❎ NOT WORKING - I KNOW WHY 👩🏻‍💻
**Bug**: selecting item variation -> selecting reward of different variation for same item = 2 border colors visible <br/>
**Expected:** only show green border
<hr/>

### ❌ NOT WORKING - IDK WHY 🤷🏻‍♀️

👇 why don't these work??

```
const { products } = require('../controllers');
const { products } = require(path.join(__dirname, '../controllers'));
```

**`proxy in server/package.json`** is ignored - why? (no webpack)

<br/>

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



