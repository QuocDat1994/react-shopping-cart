import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./CartItem.module.css";

class CartItem extends Component {
  state = {
    quantity: this.props.product.quantity
  };

  constructor(props) {
    super(props);

    this.handleOnRemove = this.handleOnRemove.bind(this);
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnRemove() {
    debugger;
    this.props.removeFromCart(this.props.product);
  }

  handleOnSelect() {
    const newSize = document.getElementById(this.props.product.id)
      .selectedOptions[0].text;
    this.props.changeProductSize(newSize, this.props.product);
  }

  handleOnChange(e) {
    let newQuantity;

    if (e.target.name === "Decrease") {
      newQuantity = e.target.value--;
    } else if (e.target.name === "Increase") {
      newQuantity = e.target.value++;
    } else {
      newQuantity = e.target.value;
    }

    if (newQuantity <= 0) {
      newQuantity = 1;
    } else if (newQuantity > 20) {
      newQuantity = 20;
    }

    this.props.changeProductQuantity(newQuantity, this.props.product);
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
            onClick={this.handleOnSelect}
            className={styles.SizeSelector}
          >
            {sizes.map(size => (
              <option value={size} selected={size == selectedSize}>
                {size}
              </option>
            ))}
          </select>
        </td>
        <td>
          <button
            name="Decrease"
            value={quantity}
            className={styles.QuantityBtn}
            onClick={this.handleOnChange}
          >
            -
          </button>
          <input
            value={quantity}
            className={styles.QuantityInput}
            onChange={this.handleOnChange}
          />
          <button
            name="Increase"
            value={quantity}
            className={styles.QuantityBtn}
            onClick={this.handleOnChange}
          >
            +
          </button>
        </td>
        <td>S {price}</td>
        <td onClick={this.handleOnRemove} className={styles.RemoveBtn}>
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
    }),
  changeProductQuantity: (newQuantity, product) =>
    dispatch({
      type: "CHANGE_PRODUCT_QUANTITY",
      newQuantity: newQuantity,
      product: product
    })
});

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
