import { createStore } from "redux";
import products from './product.js'

const initialState = {
    product: products,
    cartItems: [],
    wishList: []
}

function reducer(state = initialState, action) {
    // console.log(action);
    switch (action.type) {
        case 'add/cartItem':
            return { ...state, cartItems: [...state.cartItems, action.payload] }

        case 'remove/cartItem':
            return { 
                ...state, 
                cartItems: state.cartItems.filter((cartItems) => cartItems.productId !== action.payload.productId) }

        case 'increase/itemsQuantity':
            return {
                ...state,
                cartItems: state.cartItems.map((item) => {
                    if (item.productId === action.payload.productId) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item
                })
            }

        case 'decrease/itemsQuantity':
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.productId === action.payload.productId && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            };

        case 'add/wishListItem':
            return {
                ...state, wishList: [state.wishList, action.payload]
            }

        case 'remove/wishListItem':
            return {
                ...state, wishList: state.wishList.filter((cartItems) => cartItems.productId !== action.payload.productId)
            }
        default: return state;
    }
}

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({ type: 'add/cartItem', payload: { productId: 1, quantity: 1 } })
store.dispatch({ type: 'add/cartItem', payload: { productId: 12, quantity: 1 } })
store.dispatch({ type: 'remove/cartItem', payload: { productId: 12 } })
store.dispatch({ type: 'increase/itemsQuantity', payload: { productId: 12, } })
store.dispatch({ type: 'decrease/itemsQuantity', payload: { productId: 12 } })
store.dispatch({ type: 'add/wishListItem', payload: { productId: 4 } })
store.dispatch({ type: 'add/wishListItem', payload: { productId: 6 } })
store.dispatch({ type: 'remove/wishListItem', payload: { productId: 6 } })

console.log(store.getState());


export default store;
