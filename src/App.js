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
                      sizes
                      images {
                        url
                        alt
                      }
                      category {
                        id
                        name
                      }
                    }
                    categories {
                      id
                      name
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
      .then(json => {
        this.props.setProducts(json.data.products);
        this.props.setCategories(json.data.categories);
      });
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setProducts: products =>
    dispatch({
      type: "SET_PRODUCTS",
      products: products
    }),
  setCategories: categories =>
    dispatch({
      type: "SET_CATEGORIES",
      categories: categories
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
