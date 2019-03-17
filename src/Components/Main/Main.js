import React, { Component } from "react";
import Home from "../Home";
import Cart from "../Cart/Cart";
import Products from "./Products/Products";
import styles from "./Main.module.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div className={styles.main}>
        <Route
          exact
          path="/"
          render={routeProps => (
            <Products {...routeProps} products={this.props.products} />
          )}
        />
        <Route path="/cart" component={Cart} />
      </div>
    );
  }
}

export default Main;
