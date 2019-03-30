import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
// import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const query = `query products {
                    products {
                      id
                      name
                      description
                      rating
                      price
                      images {
                        url
                        alt
                      }
                    }
                  }`;

    fetch("https://nordic-shop-api.herokuapp.com/", {
      credentials: "omit",
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        variables: {},
        query: query
      }),
      method: "POST",
      mode: "cors"
    })
      .then(response => response.json())
      .then(json => this.props.setProducts(json.data.products));
  }

  render() {
    return (
      <div className="App">
        <Router>
          <>
            <Header />
            <Main />
            <Footer />
          </>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  setProducts: products =>
    dispatch({ type: "SET_PRODUCTS", products: products }),
  getAllProduct: () => dispatch({ type: "GET_ALL_PRODUCTS" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
