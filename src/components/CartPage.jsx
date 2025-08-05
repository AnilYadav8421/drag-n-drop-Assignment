import React from 'react';
import cartItems from '../store/cartItems';

const CartPage = () => {
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

            <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6">
                {cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between border-b pb-4"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-20 h-20 object-cover rounded-xl"
                            />
                            <div>
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="text-gray-600">
                                    ${item.price} × {item.quantity}
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-lg">
                                ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <button className="text-red-500 hover:underline text-sm mt-1">
                                Remove
                            </button>
                        </div>
                    </div>
                ))}

                <div className="text-right text-xl font-semibold">
                    Total: ${totalPrice.toFixed(2)}
                </div>

                <div className="text-right">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
