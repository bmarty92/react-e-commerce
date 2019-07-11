import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import CartItem from "../../components/CartItem/cart-item";
import Button from "../../lib/button/button";
import { formatPrice } from "../../lib/utils/utils";

import "./cart.scss";

import shop from "../../shop";

class Cart extends React.Component {
  render() {
    const { cart, removeFromCart } = this.props;
    const totalPrice = cart.reduce(
      (result, value) => result + value.price * value.quantity,
      0
    );

    return (
      <div className="cart">
        <div className="page-title">Cart</div>
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
            <div className="full-cell">
              Total price {formatPrice(totalPrice)}
            </div>
            <div className="small-cell">
              <Button big>Checkout</Button>
            </div>
            <div className="small-cell">
              <Link to="/products">
                <Button big>Continue Shopping</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
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
