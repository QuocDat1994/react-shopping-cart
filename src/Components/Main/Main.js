import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Cart from "../Cart/Cart";
import ProductList from "./Products/ProductList";

import styles from "./Main.module.css";

class Main extends Component {
  render() {
    return (
      <div className={styles.Main}>
        <Route exact path="/" component={ProductList} />
        <Route path="/Men" component={ProductList} />
        <Route path="/Women" component={ProductList} />
        <Route path="/Accessories" component={ProductList} />
        <Route path="/cart" component={Cart} />
      </div>
    );
  }
}

export default Main;
