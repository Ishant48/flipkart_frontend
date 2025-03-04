import * as actionTypes from "../constants/cartConstants";



export const cartReducer = (state = {cartItems : []}, action) => {
    
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            const exists = state.cartItems.find(product=> product.id === item.id);

            if(exists){
                return {...state,cartItems:state.cartItems.map(data=>data.product === exists.product ? item : data)}
            }else{
                return {...state,cartItems: [...state.cartItems,item]}
            }
        case actionTypes.REMOVE_FROM_CART:
            return {...state, cartItems:state.cartItems.filter(product=>product.id !== action.payload)}
        default:
            return state
    }
}