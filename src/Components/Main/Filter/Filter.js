import React, { Component } from "react";
import styles from "./Filter.module.css";
import { connect } from "react-redux";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.handleOnSelect = this.handleOnSelect.bind(this);
  }

  handleOnSelect(e) {
    const size = e.target.value;
    this.props.setFilterBySize(size);
  }

  render() {
    const sizes = ["S", "M", "X", "XL", "XXL"];

    return (
      <div className={styles.Filter}>
        <div>
          <h5>Sizes</h5>
          <ul>
            {sizes.map(size => {
              return (
                <li>
                  <input
                    type="checkbox"
                    value={size}
                    onClick={this.handleOnSelect}
                  />
                  <p>{size}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setFilterBySize: size => dispatch({ type: "SET_FILTER_BY_SIZE", size: size })
});

export default connect(
  null,
  mapDispatchToProps
)(Filter);
