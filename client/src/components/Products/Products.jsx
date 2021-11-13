import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import Loyalty from '../Loyalty/Loyalty';
// import Eproduct from './Product/eProduct';
import useStyles from './styles';

const Products = ({ products, catalogImages, loyalty, onAddToCart, handleUpdateCartQty }) => {
  const classes = useStyles();
  const [rewardBtnClicked, setRewardBtnClicked] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);
  // const [selectedVariationItem, setSelectedVariationItem] = useState({});
  const [variationItem, setVariationItem] = useState({id: '', name: '', price: '0'});

  const handleRewardClick = async (value) => {
    // alert(value);
    setRewardBtnClicked(true);
    setSelectedReward(await value);
  }  
  const handleVariationClick = async (value) => {
    // alert(value);
    setVariationItem(await value);
  }

  // const doesItemMatchReward = (product) => {    
  //   if (reward && product) {
  //    return reward.catalogObjectIds[0] === product.itemData.categoryId;
  //   }
  // }

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Loyalty loyalty={loyalty} selectedReward={selectedReward} onClick={handleRewardClick} variationItem={variationItem} />
      <Grid className={classes.products} container justify="center" spacing={4}>
        {products.map(product => (
          <Grid /*className={doesItemMatchReward(product) ? classes.highlight + ', ' + classes.show : classes.hide}*/ key={product.itemData.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} catalogImages={catalogImages} loyalty={loyalty} onAddToCart={onAddToCart} handleUpdateCartQty={handleUpdateCartQty} selectedReward={selectedReward} variationItem={variationItem} onClick={(e) => {handleVariationClick(e)}} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

