// src/containers/HomePage.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions";
import { RootState } from "../redux/reducers/reducers";
import ProductCard from "../components/ProductDetail";
import { AppDispatch } from "../redux/store"; // Import AppDispatch
import Cart from "../components/Cart";
import Loading from '../assest/VZvw.gif'

const HomePage = () => {
    const dispatch: AppDispatch = useDispatch(); // Use AppDispatch instead of plain dispatch
    const { products, loading } = useSelector((state: RootState) => state);
   
    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products.length]);
    console.log(products);
    return (
        <div>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">😎 Products</h1>
                        </div>


                        {loading ?
                            <p style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                                <img src={Loading} alt="Loading ..." style={{ width: "300px" }} />
                            </p>
                            : (
                                <div className="flex flex-wrap -m-4">
                                    {products.length > 0 && products.map((product) => (
                                        <Cart key={product.id} product={product} />
                                    ))}
                                </div>
                            )}

                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePage;
