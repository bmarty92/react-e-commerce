import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import shop from "../../shop";

import "./cart-item.scss";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.data.quantity)
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
    increaseCartQuantity({quantity, data});
  };

  decreaseQuantity = event => {
    event.preventDefault();
    const { decreaseCartQuantity, data } = this.props;
    const { quantity } = this.state;
    this.setState({
      quantity: this.props.data.quantity--
    })
    decreaseCartQuantity({quantity, data});
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
          <button onClick={this.increaseQuantity}>+</button>
          <button onClick={this.decreaseQuantity}>-</button>
        </div>
        <div className="small-cell">{price * quantity}</div>
        <div className="small-cell">
          <button onClick={() => removeFromCart(data)}>X</button>
        </div>
      </div>
    );
  }
}

const enhance = connect(
  state => ({
    cart: shop.selectors.getCart(state), 
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
