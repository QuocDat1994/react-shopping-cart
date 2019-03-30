import React, { Component } from "react";
import styles from "./Header.module.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div className={styles.Header}>
        <div className={styles.Logo} />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link id="cart" to="/cart">
              Cart {this.props.numItems}
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  numItems: state.cart.numItems
});

export default connect(mapStateToProps)(Header);
