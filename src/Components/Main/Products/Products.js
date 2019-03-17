import React, { Component } from "react";
import Filter from "../Filter/Filter";
import Product from "./Product";
import styles from "./Products.module.css";

class Products extends Component {
  render() {
    return (
      <div className={styles.productList}>
        {this.props.products.map(product => (
          <Product product={product} />
        ))}
      </div>
    );
  }
}

export default Products;
