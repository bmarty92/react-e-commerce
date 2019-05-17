import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CartItem from "../../components/CartItem/cart-item";

import "./cart.scss";

import shop from "../../shop";

class Cart extends React.Component {

  render() {

    const { cart, removeFromCart } = this.props;
    const totalPrice = cart.reduce(
    (result, value) => result + value.price * value.quantity, 0);

    return (
      <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-container">
        <div className="top-row">
          <div className="small-cell">ID</div>
          <div className="full-cell">Product name</div>
          <div className="small-cell">Product quantity</div>
          <div className="small-cell">Product price</div>
          <div className="small-cell">Remove product</div>
        </div>
        <div className="cart-content">
          {cart.map((product, index) => (
            <CartItem
              data={product}
              id={index}
              key={index}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        <div className="bottom-row">
          <div className="full-cell">{totalPrice}</div>
          <div className="full-cell">button</div>
        </div>
      </div>
    </div>
    )
  }
}


const enhance = connect(
  state => ({
    cart: shop.selectors.getCart(state),
    total: shop.selectors.getTotal(state)
  }),
  dispatch =>
    bindActionCreators(
      {
        removeFromCart: shop.actions.removeFromCart
      },
      dispatch
    )
);

export default enhance(Cart);
