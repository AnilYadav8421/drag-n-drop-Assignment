export function addCartItem(id) {
    return { type: 'add/cartItem', payload: { id } }
}

export function removeCartItem(id) {
    return { type: 'remove/cartItem', payload: { id } }
}

export function increaseProductQuantity(id, quantity) {
    return { type: 'increase/itemsQuantity', payload: { id, quantity } }
}

export function decreaseProductQuantity(id) {
    return { type: 'decrease/itemsQuantity', payload: { id } }
}


export function cartReducer(state = [], action) {
    switch (action.type) {
        case 'addCartItems':
            return [...state, action.payload]

        case 'remove/cartItem':
            return state.filter((cartItems) => cartItems.productId !== action.payload.productId)

        case 'increase/itemsQuantity':
            return state.map((item) => {
                if (item.productId === action.payload.productId) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item
            })

        case 'decrease/itemsQuantity':
            return state.map((item) =>
                item.productId === action.payload.productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )

        default: return state;
    }
}