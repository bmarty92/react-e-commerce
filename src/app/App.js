import * as React from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";

import Navbar from "./components/Navbar/navbar";
import IntroPage from "./pages/intro-page/intro-page";
import ProductPage from "./pages/product-page/product-page";
import Cart from "./pages/cart/cart";

import shop from "./shop";

import "./App.scss";

const routes = [
  {
    title: "Item List",
    path: "/products"
  },
  {
    title: "Cart",
    path: "/cart"
  }
];

class App extends React.Component {
  componentDidMount() {
    const { getProducts } = this.props;
    getProducts();
  }

  render() {
    return (
      <div className="e-shop">
        <Navbar routes={routes} />
        <Switch>
          <Route path="/" exact component={IntroPage} />
          <Route path="/products" exact component={ProductPage} />
          <Route path="/cart" exact component={Cart} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

const enhance = compose(
  withRouter,
  connect(
    state => ({
      products: shop.selectors.getProducts(state)
    }),
    dispatch =>
      bindActionCreators(
        {
          getProducts: shop.actions.getProducts
        },
        dispatch
      )
  )
);

export default enhance(App);
