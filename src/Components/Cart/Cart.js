import React, { Component } from "react";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    let totalCost = 0;

    for (let i = 0; i < this.props.cartItems.length; i++) {
      totalCost +=
        this.props.cartItems[i].price * this.props.cartItems[i].quantity;
    }

    return (
      <div className={styles.Cart}>
        <h1>My Cart</h1>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Item</th>
              <th colSpan="1">Size</th>
              <th colSpan="1">Qty</th>
              <th colSpan="1">Price</th>
              <th colSpan="1">Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cartItems.map((product, index) => (
              <CartItem key={index} product={product} index={index} />
            ))}
            <tr className={styles.TotalCost}>
              <td colSpan="4" />
              <td>Total</td>
              <td>{totalCost} $</td>
            </tr>
            <tr>
              <td colSpan="5" />
              <button>Checkout</button>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(
  mapStateToProps,
  null
)(Cart);
