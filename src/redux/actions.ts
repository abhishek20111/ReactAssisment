// src/redux/actions.ts
import { Dispatch } from "redux";
import axios from "axios";
import {
  ADD_TO_CART,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_FAILURE,
} from "./reducers/actionTypes";
import { RootState } from "./reducers/reducers";
import { ThunkAction } from "redux-thunk";

const API_URL = "https://dummyjson.com/products";

// Fetch all products
export const fetchProducts = (): ThunkAction<void, RootState, unknown, any> => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    try {
      const response = await axios.get(API_URL);
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data.products });
    } catch (error) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error });
    }
  };
};

// Fetch single product
export const fetchSingleProduct = (id: number): ThunkAction<void, RootState, unknown, any> => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_SINGLE_PRODUCT_REQUEST });
    
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      console.log(response.data);
      dispatch({ type: FETCH_SINGLE_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_SINGLE_PRODUCT_FAILURE, payload: error });
    }
  };
};

// Add to cart action
export const addToCart = (product: { id: number; title: string; price: number }) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
