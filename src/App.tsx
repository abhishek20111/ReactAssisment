import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers/reducers";
import HomePage from "./containers/HomePage";
import Header from "./components/Header";
import { ToastContainer } from 'react-toastify';

const CartPage = lazy(() => import("./containers/CartPage"));
const UserDetails = lazy(() => import("./components/ProductDetail"));

const App = () => {
  const cartCount = useSelector((state: RootState) => state.cart.length);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={
          <Suspense fallback={<p>Loading Cart...</p>}>
            <CartPage />
          </Suspense>
        } />
        <Route path="/user/:id" element={
          <Suspense fallback={<p>Loading User Details...</p>}>
            <UserDetails />
          </Suspense>
        } />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
