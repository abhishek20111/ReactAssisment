// src/redux/reducers.ts
import {
  ADD_TO_CART,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_FAILURE,
} from "./actionTypes";

// Define Product type
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

// Define State type
interface EcommerceState {
  products: Product[];
  product: Product | null; // Store the single product
  loading: boolean;
  error: string | null;
  cart: Product[];
}

// Define initial state
const initialState: EcommerceState = {
  products: [],
  product: null, // Initialize product as null
  loading: false,
  error: null,
  cart: [],
};

// Define Action Types
interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

interface FetchProductsFailureAction {
  type: typeof FETCH_PRODUCTS_FAILURE;
  payload: string;
}

interface FetchProductsRequestAction {
  type: typeof FETCH_PRODUCTS_REQUEST;
}

interface FetchSingleProductRequestAction {
  type: typeof FETCH_SINGLE_PRODUCT_REQUEST;
}

interface FetchSingleProductSuccessAction {
  type: typeof FETCH_SINGLE_PRODUCT_SUCCESS;
  payload: Product;
}

interface FetchSingleProductFailureAction {
  type: typeof FETCH_SINGLE_PRODUCT_FAILURE;
  payload: string;
}

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: Product;
}

type EcommerceActionTypes =
  | FetchProductsSuccessAction
  | FetchProductsFailureAction
  | FetchProductsRequestAction
  | FetchSingleProductRequestAction
  | FetchSingleProductSuccessAction
  | FetchSingleProductFailureAction
  | AddToCartAction;

// Reducer function
export const rootReducer = (
  state: EcommerceState = initialState,
  action: EcommerceActionTypes
): EcommerceState => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
    case FETCH_SINGLE_PRODUCT_REQUEST:
      return { ...state, loading: true };

    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };

    case FETCH_SINGLE_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: action.payload }; // ✅ Store single product

    case FETCH_PRODUCTS_FAILURE:
    case FETCH_SINGLE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };

    default:
      return state;
  }
};

// Export RootState type
export type RootState = ReturnType<typeof rootReducer>;
