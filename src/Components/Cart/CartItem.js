import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./CartItem.module.css";

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleRemove() {
    debugger;
    this.props.removeFromCart(this.props.product);
  }

  handleSelect() {
    const newSize = document.getElementById(this.props.product.id)
      .selectedOptions[0].text;
    this.props.changeProductSize(newSize, this.props.product);
  }

  render() {
    const {
      id,
      name,
      price,
      images,
      quantity,
      sizes,
      selectedSize
    } = this.props.product;

    return (
      <tr key={this.props.index}>
        <td>
          <img className={styles.ProductImage} src={images[0].url} />
        </td>
        <td className={styles.ProductName}>{name}</td>
        <td>
          <select
            id={id}
            onClick={this.handleSelect}
            className={styles.SizeSelector}
          >
            {sizes.map(size => (
              <option key={id} value={size} selected={size == selectedSize}>
                {size}
              </option>
            ))}
          </select>
        </td>
        <td>
          <button className={styles.QuantityBtn}>-</button>
          <input value={quantity} className={styles.QuantityInput} />
          <button className={styles.QuantityBtn}>+</button>
        </td>
        <td>{price} $</td>
        <td onClick={this.handleRemove} className={styles.RemoveBtn}>
          X
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  removeFromCart: product =>
    dispatch({ type: "REMOVE_FROM_CART", product: product }),
  changeProductSize: (newSize, product) =>
    dispatch({
      type: "CHANGE_PRODUCT_SIZE",
      newSize: newSize,
      product: product
    })
});

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
