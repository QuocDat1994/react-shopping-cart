import React, { Component } from "react";
import Filter from "../Filter/Filter";
import Product from "./Product";
import styles from "./ProductList.module.css";
import { connect } from "react-redux";

class ProductList extends Component {
  render() {
    const url = window.location.pathname;
    const path = url.substr(url.lastIndexOf("/") + 1);

    return (
      <>
        <Filter />
        <div className={styles.ProductList}>
          {this.props.products.map(product => {
            if (path === "" || path === product.category.name) {
              return <Product key={product.id} product={product} />;
            }
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products
});

export default connect(
  mapStateToProps,
  null
)(ProductList);
