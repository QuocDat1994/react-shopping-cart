import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./CartItem.module.css";

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.removeProduct(this.props.index);
    document.getElementById("cart").click();
  }

  render() {
    const { id, name, price, images, quantity } = this.props.product;

    return (
      <tr>
        <td>
          <img className={styles.ProductImage} src={images[0].url} />
        </td>
        <td className={styles.ProductName}>{name}</td>
        <td>dsa</td>
        <td>{quantity}</td>
        <td>{price} $</td>
        <td onClick={this.handleRemove} className={styles.RemoveBtn}>
          🗙
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  removeProduct: cartIndex =>
    dispatch({ type: "REMOVE_PRODUCT", cartIndex: cartIndex })
});

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
