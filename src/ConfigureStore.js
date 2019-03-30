import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import productsReducer from "./reducers/productsReducer";
import userReducer from "./reducers/userReducer";

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

export function configureStore() {
  let store = createStore(
    allReducers,
    {
      products: [],
      user: "Dat"
    },
    allStoreEnhancers
  );
  return store;
}

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
