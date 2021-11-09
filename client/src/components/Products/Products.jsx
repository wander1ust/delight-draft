import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import Loyalty from '../Loyalty/Loyalty';
// import Eproduct from './Product/eProduct';
import useStyles from './styles';

const Products = ({ products, catalogImages, loyalty, onAddToCart, handleUpdateCartQty }) => {
  const classes = useStyles();
  const [rewardBtnClicked, setRewardBtnClicked] = useState(false);
  const [reward, setReward] = useState(null);

  const handleRewardClick = async (value) => {
    // alert(value);
    setRewardBtnClicked(true);
    setReward(await value);
  }

  const doesItemMatchReward = (product) => {    
    if (reward && product) {
     return reward.catalogObjectIds[0] === product.itemData.categoryId;
    }
  }

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Loyalty loyalty={loyalty} onClick={handleRewardClick} />
      <Grid className={classes.products} container justify="center" spacing={4}>
        {products.map(product => (
          <Grid /*className={doesItemMatchReward(product) ? classes.highlight + ', ' + classes.show : classes.hide}*/ key={product.itemData.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} catalogImages={catalogImages} onAddToCart={onAddToCart} handleUpdateCartQty={handleUpdateCartQty} reward={reward} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

