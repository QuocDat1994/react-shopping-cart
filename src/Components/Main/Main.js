import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Cart from "../Cart/Cart";
import ProductList from "./Products/ProductList";

import styles from "./Main.module.css";

class Main extends Component {
  render() {
    return (
      <div className={styles.main}>
        <Route exact path="/" component={ProductList} />
        <Route path="/cart" component={Cart} />
      </div>
    );
  }
}

export default Main;
