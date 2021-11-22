import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Box } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ products, product, catalogImages, onAddToCart, handleUpdateCartQty, selectedReward, getItemsInCategory, setEligibleItems, eligibleItems, onClick }) => {
  const classes = useStyles();
  const { itemData } = product;
  const { name, description, categoryId, variations } = itemData;

  const [rewardItemId, setRewardItemId] = useState('');
  const [itemId, setItemId] = useState('');
  const [itemVariations, setItemVariations] = useState([]);
  const [variationItemIndex, setVariationItemIndex] = useState(0);
  // const [eligibleItems, setEligibleItems] = useState([]);
  const [forbiddenVariationChange, setForbiddenVariationChange] = useState(0);
  const [itemRewardIneligible, setItemRewardIneligible] = useState(false);
  
  const hasMultipleVariations = variations.length > 0;  
  const hasVariations = variations.length > 1;

  const PriceTypography = withStyles({
    root: {
      color: "darkgreen",
      fontWeight: 900
    }
  })(Typography);   
  const BoldTypography = withStyles({
    root: {
      fontWeight: 900
    }
  })(Typography);  

  // add variation item ID to arr if item matches reward category ID
  const getRewardItems = async () => {
    let arr = [];
    if (await rewardType() === 'CATEGORY' && rewardItemId && categoryId === rewardItemId) {
      await itemVariations.map(async (variation) => {
          arr.push(variation.id);  
          // setEligibleItems(arr.concat(eligibleItems));
          // const current = await 
          // setEligibleItems(await eligibleItems.concat(arr));
          // setEligibleItems(new Array(...arr, ...eligibleItems));
          // setEligibleItems(eligibleItems.push(variation.id));
          // arr.push(itemId);  
      })      
    } 
      // const res = await arr.concat(eligibleItems);
      // setEligibleItems(await arr);
      // setEligibleItems(new Array(...arr, ...eligibleItems));
      // console.log('getRewardItems: ' + JSON.stringify(new Array(...arr, ...eligibleItems)))
    return await arr;
  }

  const doesItemMatchReward = () => {    
    if (selectedReward && product) {
      let catalogItemId = '';
      let result;    
    
      switch(rewardType()) {
        case 'ITEM_VARIATION':
          result = variations.find(variation => variation.id === rewardItemId);
          break;
        case 'CATEGORY':
          result = categoryId === rewardItemId;
          // if (categoryId === rewardItemId) {
          //   result = getItemsInCategory(categoryId);
          // }
          break;
        default:  
          catalogItemId = variations[0].id;      
      }       
      console.log(selectedReward);
      return result;
    }
  }

  const doesItemVariationMatchReward = (variation) => { 
    return selectedReward && rewardItemId == variation.id;  
  }     

  const handleVariationClick = (e, variation) => {
    const itemId = e.target.getAttribute('id');
    const itemIndex = getItemIndex(itemId);
    const variationItem = itemVariations[itemIndex];

    onClick(variationItem);
    setItemId(itemId);
    setVariationItemIndex(itemIndex);
    console.log(`variationItem: ` + JSON.stringify(itemVariations[itemIndex]));    

    if (selectedReward && rewardItemId !== variation.id && isItemVariationReward) {
      setForbiddenVariationChange(true);
    } 
    setTimeout(() => {
      setForbiddenVariationChange(false);
    }, 2000)
  }    

  const renderInvalidRewardItemMsg = () => {
    let style = `${classes.redText} ${classes.smallText} ${classes.centerText} `;
    const hidden = style + `${classes.hide}`;
    const visible = style + `${classes.show}`;
    style = hidden;
    if (isItemVariationReward && forbiddenVariationChange) {
     style = visible;
    }
   return <p className={style}> This option is not eligible for reward &#x1F615; </p>
  }

  const borderStyle = (variation, i) => {    
    const eligibleRewardItem = doesItemVariationMatchReward(variation);

    if (isItemVariationReward && eligibleRewardItem) {
      return classes.borderGreen;
    }         
    if (isItemVariationReward && !eligibleRewardItem) {
      return classes.borderDefault;
    }     
    if (i === variationItemIndex) {
      return classes.borderGray;
    } 
  }

  const showItemVariations = () => { 
    let arr = [];
    // let eligibleVariations = [];
    itemVariations.map((variation, i) => {
        arr.push(
          <div id={`${variation.id}`} className={`${classes.itemVariation} ${classes.boldText} ${borderStyle(variation, i)}`} onClick={(e) => handleVariationClick(e, variation)} /*ref={itemVariation}*/>{variation.name}</div>
        )     
    })
    // setEligibleItems(eligibleVariations);    
    return arr;
  }     
   
  const setItemVariationsData = () => {  
    let arr = [];  
    if (hasMultipleVariations) {      
      variations.map(variation => {
        arr.push(getVariationData(variation));
      })
    }
    setItemVariations(arr);
    return arr;
  }

  const getVariationData = (variation) => { 
    const data = variation.itemVariationData;
    return {
      id: variation.id, 
      name: data.name, 
      price: convertToUSD(data.priceMoney.amount),
      imageId: product.imageId
    };
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

  const getImageUrlById = (image_id) => {
    if (catalogImages) {
      const image = catalogImages.find(image => {
        return image.id === image_id;
      })
      console.log('image: ' + JSON.stringify(image));
      return image;
    }
  }

  const getItemIndex = (id) => {
    const index = itemVariations.findIndex(item => {
      return item.id === id;
    })
    return index;
  }

  const rewardType = () => {
    if (selectedReward) {
      return selectedReward.info.scope;
    }
  }     

  const isItemVariationReward = rewardType() === 'ITEM_VARIATION';

  // get item(s) belonging to specific category
  // const getItemsInCategory = (id) => {
  //     let arr = []; 
  //     let items = [];
  //     // const items = products.filter(product => {
  //     //   return product.itemData.categoryId === id
  //     // });      
  //     if (categoryId === id) {
  //       items.push(product);
  //     }
  //     items.map(item => { 
  //       // arr.push(item.itemData.variations);
  //       item.itemData.variations.map(variation => {
  //           const data = variation.itemVariationData;
  //           data.fullName = item.itemData.name;
  //           data.imageId = item.imageId;
  //           arr.push(variation);
  //       })
  //     });  
  //     console.log('getItemsInCategory items: ' + JSON.stringify(items) );
  //     console.log('getItemsInCategory: ' + JSON.stringify(arr) );
  //     return arr;
  // }      

  // check if chosen variation is one of selected & claimable rewards' item IDs
  // if yes, then allow add to cart
  // if no, then disallow add to cart; throw err
  const handleAddToCart = () => {
    console.log(`variations OK: ${JSON.stringify(variationItemIndex)}`);
    // if (variations.length == 1) {
    //   setVariationItemIndex(0)
    // }    
    // if item does not belong under redeemable rewards, then disable addToCart
    // only add to cart if item ID matches one of IDs in redeemable rewards
    if (variationItemIndex) {
      console.log('itemId: ' + JSON.stringify(getItemsInCategory('UC6L3ZTEA7PWITPE3NLYVRX6')));
      const item = itemVariations[variationItemIndex];
      const redeemableItemIds = getItemsInCategory('UC6L3ZTEA7PWITPE3NLYVRX6');
      if (rewardType() === 'CATEGORY' || rewardType() === 'ITEM_VARIATION') {
        if (redeemableItemIds.find(id => id === itemId)) {
          onAddToCart(item, 1);
        }
      }
      // onAddToCart(item, 1);
    //   console.log('no good: ' + JSON.stringify(itemVariations));
    //   console.log('no good variationItemIndex: ' + JSON.stringify(variationItemIndex));
      
    } else {
      console.log('no good: ' + JSON.stringify(itemVariations));
      onAddToCart(itemVariations[0], 1);
    }


    // if (itemVariation) {
    //   onAddToCart(itemVariation, 1);
    // } else {
    //   const regularItem = {getVariationData()}
    //   onAddToCart(product, 1);
    // }
    // onAddToCart(product.id, 1);
  }

  useEffect(() => {
    setItemVariationsData();    
    console.log('setItemVariationsData: ' + JSON.stringify(itemVariations));
  }, [])  

  useEffect(() => {
    if (selectedReward) { 
      setRewardItemId(selectedReward.info.catalogObjectIds[0]);
      // TODO: bad - fix this
      // category reward must be clicked twice; arrays not concatenated
      if (eligibleItems) {        
        getRewardItems()
        .then(async (items) => {
            setEligibleItems(items.concat(await eligibleItems))
            // setEligibleItems(...items, ...eligibleItems);
            console.log('eligibleItems after: ' + await eligibleItems);
        });
      }

      // if (eligibleItems) {
      //   getRewardItems(rewardType(), categoryId, rewardItemId).then(items => {setEligibleItems(items.concat(eligibleItems))});
      // }
    }
  }, [selectedReward])  



  // useEffect(() => {
  //   if (selectedReward) { 
  //     setRewardItemId(selectedReward.info.catalogObjectIds[0]);
  //     if (eligibleItems && eligibleItems.length === 0) {        
  //       getRewardItems().then(async (items) => {
  //         const merged = await items.concat(await eligibleItems);
  //         setEligibleItems(merged)
  //       });
  //     }

  //     // if (eligibleItems) {
  //     //   getRewardItems(rewardType(), categoryId, rewardItemId).then(items => {setEligibleItems(items.concat(eligibleItems))});
  //     // }
  //   }
  // }, [selectedReward])  



  // useEffect(() => {
  //     console.log('eligibleItems: ' + JSON.stringify(eligibleItems))
  // }, [eligibleItems])

  return (
    // {async () => {return product}} &&    
    <Card className={`${classes.root} ${doesItemMatchReward() ? classes.highlight : null}`}>    
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
          ${hasVariations ? showPrice() + ' - ' + convertToUSD(variations[variations.length - 1].itemVariationData.priceMoney.amount) : showPrice()}
          </PriceTypography>
          {/*</Typography>*/}
        </div>
        <Typography variant="body2" color="textSecondary" component="p"> 
          {description}
        </Typography>    
        <p className={classes.rating}>⭐️⭐️⭐️⭐️⭐️</p> 
        {showItemVariations()}

     {/*   <p className={`${classes.redText}, ${classes.boldText}, ${forbiddenVariationChange ? classes.show + ', ' + classes.redText : (rewardType() == 'ITEM_VARIATION' ? classes.fade : classes.hide)}`}> This item is not eligible for reward <HiOutlineEmojiSad /> </p>*/}
        
      {renderInvalidRewardItemMsg()}
      {/*{getRewardItems()}*/}

        <p className={classes.points + ', ' + classes.boldText}> +10 points</p>           
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

