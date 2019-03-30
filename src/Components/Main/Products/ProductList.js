import React, { Component } from "react";
import Filter from "../Filter/Filter";
import Product from "./Product";
import styles from "./ProductList.module.css";
import { connect } from "react-redux";

class ProductList extends Component {
  render() {
    return (
      <>
        <Filter />
        <div className={styles.ProductList}>
          {this.props.products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(
  mapStateToProps,
  null
)(ProductList);
