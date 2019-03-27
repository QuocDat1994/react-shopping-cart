import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { configureStore } from "./configureStore";
import { Provider, connect } from "react-redux";
import "./App.css";

const products = [
  {
    id: "p1",
    name: "Basic Wide Leg Jumpsuit",
    description:
      "Floral print sleeveless wide leg jumpsuit with waist tie detail",
    categoryId: "c2",
    price: 17.9,
    sizes: ["XS", "S"],
    rating: 5,
    imageIds: [
      "http://zalora-media-live-sg.s3.amazonaws.com/product/33/3339/1.jpg"
    ]
  },
  {
    id: "p2",
    name: "Strap Back Daisy Jumpsuit - Yellow",
    description:
      "Polyester jumpsuit with classic, regular fit, featuring an open back with strappy details",
    categoryId: "c2",
    price: 59,
    sizes: ["S", "M", "L"],
    rating: 5,
    imageIds: [
      "http://zalora-media-live-sg.s3.amazonaws.com/product/92/8969/1.jpg"
    ]
  },
  {
    id: "p3",
    name: "Diana Dress",
    description:
      "Mesh top panel bodycon denim dress with round neckline - Slim fit",
    categoryId: "c2",
    price: 160.9,
    sizes: ["M", "L", "XL"],
    rating: 5,
    imageIds: [
      "http://zalora-media-live-sg.s3.amazonaws.com/product/30/9169/1.jpg"
    ]
  },
  {
    id: "p4",
    name: "Helle BL Crew Neck Singlet Top",
    description: "Graphic sleeveless tee with round neckline - Relaxed fit",
    categoryId: "c2",
    price: 29.4,
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.5,
    imageIds: [
      "http://zalora-media-live-sg.s3.amazonaws.com/product/65/4678/1.jpg"
    ]
  }
];

const store = configureStore();

// class Counter extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.count}
//         <button onClick={this.props.increase}>+</button>
//         <button onClick={this.props.decrease}>-</button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   console.log(state);
//   return { count: state.counter1 };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     increase: () => dispatch({ type: "INCREMENT" }),
//     decrease: () => dispatch({ type: "DECREMENT" })
//   };
// };

// const CounterWrapper = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <>
              <Header />
              {/* <CounterWrapper /> */}
              <Main products={products} />
              <Footer />
            </>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
