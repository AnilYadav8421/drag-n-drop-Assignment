import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ReduxTodo = () => {

  // importing using useSelector hook from Redux store, instead of directly import. 
  const products = useSelector((state) => state.products)
  console.log(products);

  // use this hook to dispatch hook
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Products
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={product.images || 'https://via.placeholder.com/300'}
              alt={product.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                {product.title}
              </h3>

              <div className="flex items-center justify-between text-gray-700">
                <span className="text-xl font-bold text-black">
                  ${product.price}
                </span>
                <span className="text-green-600 font-semibold">
                  -{product.discount}% off
                </span>
              </div>

              <div className="flex gap-3 mt-4">
                <button onClick={() => dispatch()} className="flex-1 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                  Add to Cart
                </button>
                <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-xl hover:bg-blue-50 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReduxTodo;
