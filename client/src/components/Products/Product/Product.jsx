import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Box } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, catalogImages, onAddToCart, handleUpdateCartQty, reward }) => {
  const classes = useStyles();
  const { itemData } = product;
  const { name, description, categoryId, variations } = itemData;

  const PriceTypography = withStyles({
    root: {
      color: "green",
      fontWeight: 900
    }
  })(Typography);   
  const BoldTypography = withStyles({
    root: {
      fontWeight: 900
    }
  })(Typography);  

  const getImageUrlById = (image_id) => {
    if (catalogImages) {
      // const firstImage = catalogImages[0];
      // return firstImage;
      // return (catalogImages.find(image => image.id == image_id) || {}).execs || [];
      const image = catalogImages.find(image => {
        return image.id === image_id;
      })
        // return (this.repInfo.find(el => el.id == tourId) || {}).execs || [];
      // let found_user = response.data.find(acc=>{ //found_user is always undefined
      //   return acc.username == user_to_find;
      // })
      console.log('image: ' + JSON.stringify(image));
      return image;
      // console.log('image.url: ' + image.url);
      // console.log('image.id: ' + image.id);
      // JSON.stringify(image);
      // return image.imageData.url;
      // return JSON.stringify(image);
      // return JSON.stringify(catalogImages[0]);
    }
  }

  const convertToUSD = (cents) => {
    return cents.slice(0, cents.length - 2) + '.' + cents.slice(-2);
  }

  const showPrice = () => {
    const price = variations[0].itemVariationData.priceMoney;

    if (price && price.amount > 0) {
      return convertToUSD(price.amount);
    }
  }

  const doesItemMatchReward = () => {    
    if (reward && product) {
      // alert(reward);
      // console.log('doesItemMatchReward: ' + itemData.categoryId);
     return reward.catalogObjectIds[0] === categoryId;
    }
    return (reward && (reward.scope === 'ITEM_VARIATION') && (reward.catalogObjectIds[0] === variations[0].id));
  }    

  const showItemVariations = () => { 
    let arr = [];
    getItemVariationsData().map(variation => {
      arr.push(<div className={`${classes.itemVariation} ${classes.boldText}`}>{variation.name}</div>)
    })
    return arr;
  }   
  const getItemVariationsData = () => {  
    let arr = [];  
    if (variations.length > 1) {      
      variations.map(variation => {
        const data = variation.itemVariationData;
        const obj = {name: data.name, price: convertToUSD(data.priceMoney.amount)};
        arr.push(obj);
      })
    }
    return arr;
  }

  const handleAddToCart = () => onAddToCart(product.id, 1);
/*image={require('../../../assets/burger.jpg').default}*/
  return (
    <Card className={`${classes.root}, ${doesItemMatchReward() ? classes.highlight : null}`}>
      <CardMedia className={classes.media} image={catalogImages.length ? getImageUrlById(product.imageId).imageData.url : require('../../../assets/imgs/tomato-cheese-panini.jpg').default} title={name} />
       <div className={doesItemMatchReward() ? classes.rewardLabel : null}>
          </div>
      {/*<p>${convertToUSD('1200')}</p>   */}
   
      <CardContent> 
       
         {/* <Box sx={{ m: 5 }} /> */}    
      {/*<p>{JSON.stringify(getImageUrlById())}</p>*/}
        <div className={classes.cardContent}>        
          <BoldTypography className={classes.block} gutterBottom variant="h6" component="h2">
            {name}
          </BoldTypography>
          {/*<Typography gutterBottom variant="h5" component="h2" color="primary">*/}
          <PriceTypography variant="h6">
          ${variations.length === 1 ? showPrice() : showPrice() + ' - ' + convertToUSD(variations[variations.length - 1].itemVariationData.priceMoney.amount)}
          </PriceTypography>
          {/*</Typography>*/}
        </div>
        <Typography variant="body2" color="textSecondary" component="p"> 
          {description}
        </Typography>    
        <p className={classes.rating}>⭐️⭐️⭐️⭐️⭐️</p> 
        {showItemVariations()}
        <p className={classes.points, classes.boldText}> +10 points</p>           
       {/* <Typography dangerouslySetInnerHTML={{ __html: product.itemData.description }} variant="body2" color="textSecondary" component="p" />*/}
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
         {/*<input type="number" id="itemQuantity" name="itemQuantity" min="1" max="10" onChange={handleUpdateCartQty}/>  */}     
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

