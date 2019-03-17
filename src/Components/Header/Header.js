import React, { Component } from "react";
import styles from "./Header.module.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.logo}>Fashion Shop</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
