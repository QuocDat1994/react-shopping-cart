import React, { Component } from "react";
import styles from "./Header.module.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
library.add(faShoppingCart);
library.add(faPhone);

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
            <Link to="/cart">
              <FontAwesomeIcon icon="shopping-cart" /> ({this.props.numItems})
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
