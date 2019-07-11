import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Button from "../../lib/button/button";
import { formatPrice } from "../../lib/utils/utils";
import shop from "../../shop";

import "./cart-item.scss";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.data.quantity);
    this.state = {
      quantity: this.props.data.quantity
    };
  }

  increaseQuantity = event => {
    event.preventDefault();
    const { increaseCartQuantity, data } = this.props;
    const { quantity } = this.state;
    this.setState({
      quantity: this.props.data.quantity++
    });
    increaseCartQuantity({ quantity, data });
  };

  decreaseQuantity = event => {
    event.preventDefault();
    const { decreaseCartQuantity, data } = this.props;
    const { quantity } = this.state;
    this.setState({
      quantity: this.props.data.quantity--
    });
    decreaseCartQuantity({ quantity, data });
  };

  render() {
    const { data, removeFromCart } = this.props;
    const { name, price, quantity, id } = data;

    return (
      <div className="cart-item">
        <div className="small-cell">{id}</div>
        <div className="full-cell">{name}</div>
        <div className="small-cell">
          <div>{quantity}</div>
          <Button onClick={this.increaseQuantity} small>
            +
          </Button>
          <Button onClick={this.decreaseQuantity} small>
            -
          </Button>
        </div>
        <div className="small-cell">{formatPrice(price * quantity)} EU</div>
        <div className="small-cell">
          <Button onClick={() => removeFromCart(data)} small remove>
            X
          </Button>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  cart: PropTypes.shape.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  increaseCartQuantity: PropTypes.func.isRequired,
  decreaseCartQuantity: PropTypes.func.isRequired
};

const enhance = connect(
  state => ({
    cart: shop.selectors.getCart(state)
  }),
  dispatch =>
    bindActionCreators(
      {
        removeFromCart: shop.actions.removeFromCart,
        increaseCartQuantity: shop.actions.increaseCartQuantity,
        decreaseCartQuantity: shop.actions.decreaseCartQuantity
      },
      dispatch
    )
);

export default enhance(CartItem);
