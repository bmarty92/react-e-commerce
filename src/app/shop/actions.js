import * as types from "./actionTypes";

export const addToCart = payload => ({ type: types.ADD_TO_CART, payload });

export const getProducts = payload => ({ type: types.GET_PRODUCTS, payload });

export const removeFromCart = payload => ({
  type: types.REMOVE_FROM_CART,
  payload
});

export const increaseCartQuantity = payload => ({
  type: types.INCREASE_CART_QUANTITY,
  payload
});

export const decreaseCartQuantity = payload => ({
  type: types.DECREASE_CART_QUANTITY,
  payload
});
