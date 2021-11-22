import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import { Product, Loyalty, ActionsBar } from '../index.js';

import useStyles from './styles';

const Products = ({ products, catalogImages, loyalty, onAddToCart, handleUpdateCartQty }) => {
  const classes = useStyles();
  const [rewardBtnClicked, setRewardBtnClicked] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);
  const [redeemableRewards, setRedeemableRewards] = useState([]);
  // const [selectedVariationItem, setSelectedVariationItem] = useState({});
  const [variationItem, setVariationItem] = useState({id: '', name: '', price: '0'});
  const [eligibleItems, setEligibleItems] = useState([]);
  const [loyaltyBalance, setLoyaltyBalance] = useState([]);

  const handleRewardClick = async (value) => {
    // alert(value);
    setRewardBtnClicked(true);
    setSelectedReward(await value);
  }  
  const handleVariationClick = async (value) => {
    // alert(value);
    setVariationItem(await value);
  }

  // get items in given category
  const getItemsInCategory = (categoryId) => {
      let arr = []; 
      const items = products.filter(product => {
        return product.itemData.categoryId === categoryId
      });
      items.map(item => { 
        // arr.push(item.itemData.variations);
        item.itemData.variations.map(variation => {
            const data = variation.itemVariationData;
            data.fullName = item.itemData.name;
            data.imageId = item.imageId;
            arr.push(variation);
        })
      });  
      console.log('getItemsInCategory items: ' + JSON.stringify(items) );
      console.log('getItemsInCategory: ' + JSON.stringify(arr) );
      return arr;
  }   

  // add variation item ID to arr if item matches reward category ID
  // const getRewardItems = async (rewardType, rewardItemId) => {
  //   let arr = [];    
  //     products.map(async (product) => {
  //       if (await rewardType === 'CATEGORY' && categoryId === rewardItemId) {
  //     product.itemData.variations.map(variation => {
  //       const isItemInRewardCategory = getItemsInCategory(categoryId).findIndex(categoryId => categoryId === variation.id); // -1
  //       console.log('isItemInRewardCategory: ' + isItemInRewardCategory)
  //       if (isItemInRewardCategory) {
  //         eligibleItems.push(product);  
  //         // eligibleItems.push(product[isItemInRewardCategory].variation.id);  
  //       }
  //       // setEligibleItems(eligibleItems.push(variation.id));
  //       // arr.push(itemId);  
  //     })      
  //     }
  //     // const res = arr.concat(eligibleItems);
  //     // setEligibleItems(arr);
  //     console.log('getRewardItems: ' + JSON.stringify(eligibleItems)) // []
  //   }) 
    
  //   return await arr;
  // }   

  // const doesItemMatchReward = (product) => {    
  //   if (reward && product) {
  //    return reward.catalogObjectIds[0] === product.itemData.categoryId;
  //   }
  // }

  useEffect(() => {
      console.log('eligibleItems: ' + JSON.stringify(eligibleItems))
  }, [eligibleItems])

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Loyalty loyalty={loyalty} loyaltyBalance={loyaltyBalance} setLoyaltyBalance={setLoyaltyBalance} selectedReward={selectedReward} onClick={handleRewardClick} variationItem={variationItem} setRedeemableRewards={setRedeemableRewards} />
      <Grid className={classes.products} container justify="center" spacing={4}>
        {products.map(product => (
          <Grid /*className={doesItemMatchReward(product) ? classes.highlight + ', ' + classes.show : classes.hide}*/ key={product.itemData.id} item xs={12} sm={6} md={4} lg={3}>
            <Product products={products} product={product} catalogImages={catalogImages} loyalty={loyalty} onAddToCart={onAddToCart} handleUpdateCartQty={handleUpdateCartQty} selectedReward={selectedReward} getItemsInCategory={getItemsInCategory} variationItem={variationItem} setEligibleItems={setEligibleItems} eligibleItems={eligibleItems} onClick={(e) => {handleVariationClick(e)}} />
          </Grid>
        ))}
      </Grid>
      <ActionsBar loyalty={loyalty} loyaltyBalance={loyaltyBalance} redeemableRewards={redeemableRewards} />
      
    </main>
  );
};

export default Products;

