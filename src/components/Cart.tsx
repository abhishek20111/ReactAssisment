import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

interface ProductProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
    const dispatch = useDispatch();
    const notify1 = (info: string) => toast.success("Successfully added to cart");

  return (
    <div className="p-4 lg:w-1/4 md:w-1/2">
      <div className="h-full flex flex-col items-center text-center">
        <img
          alt={product.title}
          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
          src="https://dummyimage.com/200x200"
        />
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">{product.title}</h2>
          <p className="text-gray-500 mb-3">{product.description}</p>
          <p className="text-lg font-semibold text-green-600 mb-3">${product.price.toFixed(2)}</p>
          <span className="inline-flex">
            <a className="text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
          <br />
          <br />
          <div className="flex gap-2">
            {/* Add to Cart Button */}
            <button
              onClick={() => { dispatch(addToCart(product)); notify1("Product added to cart"); }}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>

            {/* View Details Button */}
            <Link
              to={`/user/${product.id}`}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
            >
              View Details
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
