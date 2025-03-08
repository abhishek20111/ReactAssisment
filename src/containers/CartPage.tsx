import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers/reducers";
import Cart from "../components/Cart";
import Loading from "../assest/VZvw.gif";

const CartPage: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const loading = useSelector((state: RootState) => state.loading);
    
  if (loading) {
    return (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img src={Loading} alt="Loading ..." style={{ width: "300px" }} />
      </p>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">No items in cart</p>
      ) : (
        <div className="flex flex-wrap -m-4">
          {cart.map((product) => (
            <Cart key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
