import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/reducers/reducers";
import { fetchSingleProduct, addToCart } from "../redux/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppDispatch } from "../redux/store"; // Import AppDispatch
import Loading from '../assest/VZvw.gif'


const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>(); // ✅ Use typed dispatch
  const { product, loading, error, cart } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(fetchSingleProduct(Number(id))); // ✅ Now works without TypeScript error
  }, [dispatch, id]);

  const isProductInCart = cart.some((item) => item.id === product?.id);

  const handleCartAction = () => {
    if (product) {
      dispatch(addToCart(product));
      toast.success("Product added to cart!");
    }
  };

  if (loading) return  <p style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
  <img src={Loading} alt="Loading ..." style={{ width: "300px" }} />
</p>;

  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <img src="https://dummyimage.com/400x400" alt={product?.title} className="w-full h-80 object-cover rounded-md mb-4" />
        <h1 className="text-3xl font-bold">{product?.title}</h1>
        <p className="text-gray-600 my-2">{product?.description}</p>
        <p className="text-2xl font-semibold text-green-600">${product?.price}</p>

        <button
          onClick={handleCartAction}
          className={`w-full mt-4 px-4 py-2 rounded-md transition ${
            isProductInCart ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
          disabled={isProductInCart}
        >
          {isProductInCart ? "Already in Cart" : "Add to Cart"}
        </button>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default ProductDetail;
