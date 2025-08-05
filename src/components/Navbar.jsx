import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount = 2 }) => {
  return (
    <nav className="bg-white border-b-2 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        MyStore
      </Link>
      <Link to="/cart" className="relative">
        <ShoppingCart className="w-6 h-6 text-gray-700" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
