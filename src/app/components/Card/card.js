import React from "react";

import "./card.scss";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  setQuantity = event => {
    event.preventDefault();
    this.setState({ quantity: event.target.value });
  };

  makeOrder = event => {
    event.preventDefault();
    const { addToCart, data } = this.props;
    const { quantity } = this.state;
    const payload = {
      id: data.id,
      name: data.name,
      image: data.image,
      desc: data.desc,
      price: data.price,
      quantity
    };
    addToCart(payload);
  };

  render() {
    const { data } = this.props;
    const { image, name, price, desc } = data;
    return (
      <div className="product-card">
        <h2>{name}</h2>
        <img src={image} />
        <div className="product-description">{desc}</div>
        <h2>Price {price}</h2>
        <div className="product-buy">
          <input
            onChange={this.setQuantity}
            name="quantity"
            type="number"
            placeholder="Qty."
          />
          <button onClick={this.makeOrder}>Add to cart</button>
        </div>
      </div>
    );
  }
}

export default Card;
