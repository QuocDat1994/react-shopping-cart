import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Product.module.css";

class Product extends Component {
  constructor(props) {
    super(props);

    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart() {
    this.props.addToCart(this.props.product);
  }

  render() {
    const { id, name, price, images } = this.props.product;
    return (
      <div key={id} className={styles.Product}>
        <img src={images[0].url} />
        <p>{name}</p>
        <div>
          <p className={styles.Price}>$ {price}</p>
          <button onClick={this.handleAddToCart}>Buy</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch({ type: "ADD_TO_CART", product: product })
});

export default connect(
  null,
  mapDispatchToProps
)(Product);
