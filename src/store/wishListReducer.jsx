export function addWishListItem(id) {
    return { type: 'add/wishListItem', payload: { id } }
}

export function removeWishListItem(id) {
    return { type: 'remove/wishListItem', payload: { id } }
}


export function wishListReducer(state = [], action) {
    switch (action.type) {
        case 'add/wishListItem':
            return [...state, action.payload]

        case 'remove/wishListItem':
            return state.filter((cartItems) => cartItems.productId !== action.payload.productId)
        default: return state;
    }
}