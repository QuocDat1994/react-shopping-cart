import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Product.module.css";

class Product extends Component {
  render() {
    const { id, name, price, images } = this.props.product;
    return (
      <div key={id} className={styles.product}>
        <img src={images[0].url} />
        <p>{name}</p>
        <p>{price}</p>
        <button>Add to cart</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addToCart: () => dispatch({ type: "ADD_TO_CART" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
