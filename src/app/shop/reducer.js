import * as types from "./actionTypes";
import products from "../lib/production-list/production-list";

const INITIAL_STATE = {
  products: [],
  cart: [],
  total: 0
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
        total: state.total + action.payload.price * action.payload.quantity
      };

    case types.GET_PRODUCTS:
      return { ...state, products: products };

    case types.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item !== payload),
        total: state.total - action.payload.price * action.payload.quantity
      };

    case types.INCREASE_CART_QUANTITY:
      return { ...state,
        total: state.total + ((parseInt(action.payload.quantity) + 1)  * action.payload.data.price)
      };

    case types.DECREASE_CART_QUANTITY:
      return { ...state,
        total: state.total - ((parseInt(action.payload.quantity) + 1) * action.payload.data.price)
      };

    default:
      return state || [];
  }
};
