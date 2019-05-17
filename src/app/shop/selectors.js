import { NAME } from "./constants";

export const getProducts = state => state[NAME].products;
export const getCart = state => state[NAME].cart;
export const getTotal = state => state[NAME].total;
