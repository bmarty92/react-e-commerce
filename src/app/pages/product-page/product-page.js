import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Card from "../../components/Card/card";
import shop from "../../shop";

import "./product-page.scss";

function ProductPage(props) {
  const { addToCart, products } = props;

  return (
    <div className="product-page">
      <div className="page-title">Products</div>
      <div className="product-container">
        {products.map((product, index) => (
          <Card data={product} key={index} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

const enhance = connect(
  state => ({
    products: shop.selectors.getProducts(state)
  }),
  dispatch =>
    bindActionCreators(
      {
        addToCart: shop.actions.addToCart
      },
      dispatch
    )
);

export default enhance(ProductPage);
