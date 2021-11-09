export const addItemToCart = (itemId, qty) => {
    return (dispatch) => {
        dispatch({
            type: "addItemToCart",
            payload: {itemId, qty}
        });
    }
}
export const removeItemFromCart = (itemId) => {
    return (dispatch) => {
        dispatch({
            type: "removeItemFromCart",
            payload: {itemId, qty}
        });
    }
}

// export const addItemToCart = (item) => {
//     return (dispatch) => {
//         dispatch({
//             type: "addItemToCart",
//             payload: {
//                 id: item.id,
//                 name: item.name,
//                 image: item.image,
//                 price: item.price,
//                 qty
//             }
//         });
//     }
// }

export const depositPoints = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        });
    }
}

export const withdrawPoints = (amount) => {
    console.log(amount, "Lol")
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        });
    }
}