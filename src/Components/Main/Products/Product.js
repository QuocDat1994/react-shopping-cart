import React, { Component } from "react";
import styles from "./Product.module.css";

class Product extends Component {
  render() {
    const { id, name, price, imageIds } = this.props.product;

    return (
      <div className={styles.product}>
        <img src={imageIds[0]} />
        <p>{name}</p>
        <p>{price}</p>
      </div>
    );
  }
}

export default Product;
