const initialState = 0;

const reducer = (state = [], action) => {
    switch (action.type) {
        case "addItemToCart":
            return addItemToArr(state, action.payload);
            // return [...state, action.payload];
            // return state.push(action.payload);
        case "removeItemFromCart":
            return removeItemFromArr(state, action.payload);
        default:
            return state
    }
}

const updateCartItemQuantity = (arr, item, qty) => {
}

const addItemToArr = (arr, item) => {
    const cartItemIndex = arr.findIndex(x => x.itemId === item.itemId);
    if (cartItemIndex > -1) {
        let cartItem = arr[cartItemIndex];
        cartItem.qty = cartItem.qty + 1;
        console.log('item added: ' + JSON.stringify(arr));
        return arr;
        // arr.slice(0, 1).concat([qty: ]);
    } else {        
        // const updatedCart = [...arr, item];
        // console.log('item added: ' + JSON.stringify(updatedCart));
        // item.qty = inputQty;
        return [...arr, item];
    }
}

const removeItemFromArr = (arr, item) => {
    const index = arr.indexOf(item);
    if (index > -1) {
      arr.splice(index, 1);
    }    
    return arr;
}
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "deposit":
//             return state + action.payload;
//         case "withdraw":
//             return state - action.payload
//         default:
//             return state
//     }
// }

export default reducer;