import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCTS,
  ADD_PRODUCT,
  ADD_TO_CART,
  ADD_ALL_TO_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        product: action.products,
        loading: false
      }
    case UPDATE_CART:
      return {
        ...state,
        cart: state.cart,
        loading: false
      }

    case LOADING:
      return {
        ...state,
        loading: true
      } 

    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.productId),
        loading: false
      }

    case ADD_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, action.product],
        loading: false
      }
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    product: {
      _id: 0,
      title: "",
      body: "",
      author: ""
    },
    cart: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
