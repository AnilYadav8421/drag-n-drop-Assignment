import { combineReducers, createStore } from "redux";
import { addWishListItem, removeWishListItem, wishListReducer } from "./wishListReducer.jsx";
import { addCartItem, cartReducer, decreaseProductQuantity, increaseProductQuantity, removeCartItem } from "./cartReducer.js";
import productReducer from "./productReducer.js";

// to use all reducer at single place
const reducer = combineReducers({
    // it take data like key: value pair
    products: productReducer,
    wishList: wishListReducer,
    cartItems: cartReducer
})


const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(addCartItem(2))
store.dispatch(addCartItem(3))
store.dispatch(removeCartItem(3))
store.dispatch(increaseProductQuantity(2, 3))
store.dispatch(decreaseProductQuantity(2))

store.dispatch(addWishListItem(6))
store.dispatch(removeWishListItem(6))

console.log(store.getState());


export default store;
