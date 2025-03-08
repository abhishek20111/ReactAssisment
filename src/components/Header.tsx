import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers/reducers"; // Import RootState from Redux store

const Header: React.FC = () => {
  // Get cart items count from Redux store
  const cartItems = useSelector((state: RootState) => state.cart); // ✅ Fixed
  const cartCount = cartItems.length;

  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center text-gray-900 font-bold text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3">ShopEase</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-indigo-500">Home</Link>
          <Link to="/products" className="hover:text-indigo-500">Products</Link>
          <Link to="/about" className="hover:text-indigo-500">About</Link>
        </nav>

        {/* Cart Button */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-gray-700 hover:text-indigo-500"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l1 4h13l1-4h2M7 13h10M5 9h14l-1 10H6L5 9z"></path>
            </svg>
            {/* Cart item count badge */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Add to Cart Button (Navigates to Cart Page) */}
          <Link
            to="/cart"
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
