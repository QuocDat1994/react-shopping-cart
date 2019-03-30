import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import productsReducer from "./reducers/productsReducer";
import categoriesReducer from "./reducers/categoriesReducer";

import userReducer from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";

const allReducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
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
      categories: [],
      cart: {
        cartItems: raw,
        numItems: 5,
        totalCost: 321321
      },
      user: "Dat"
    },
    allStoreEnhancers
  );
  return store;
}

const raw = [
  {
    id: "p1",
    name: "Basic Wide Leg Jumpsuit",
    description:
      "Floral print sleeveless wide leg jumpsuit with waist tie detail",
    rating: 5,
    price: 17.9,
    images: [
      {
        url:
          "http://zalora-media-live-sg.s3.amazonaws.com/product/33/3339/1.jpg",
        alt: "alt"
      },
      {
        url:
          "http://zalora-media-live-sg.s3.amazonaws.com/product/33/3339/2.jpg",
        alt: "alt"
      },
      {
        url:
          "http://zalora-media-live-sg.s3.amazonaws.com/product/33/3339/3.jpg",
        alt: "alt"
      }
    ],
    category: {
      id: "c2",
      name: "Women"
    },
    quantity: 3
  },
  {
    id: "p2",
    name: "Strap Back Daisy Jumpsuit - Yellow",
    description:
      "Polyester jumpsuit with classic, regular fit, featuring an open back with strappy details",
    rating: 5,
    price: 59,
    images: [
      {
        url:
          "http://zalora-media-live-sg.s3.amazonaws.com/product/92/8969/1.jpg",
        alt: "alt"
      },
      {
        url:
          "http://zalora-media-live-sg.s3.amazonaws.com/product/92/8969/2.jpg",
        alt: "alt"
      },
      {
        url:
          "http://zalora-media-live-sg.s3.amazonaws.com/product/92/8969/3.jpg",
        alt: "alt"
      }
    ],
    category: {
      id: "c2",
      name: "Women"
    },
    quantity: 1
  },
  {
    id: "p3",
    name: "Diana Dress",
    description:
      "Mesh top panel bodycon denim dress with round neckline - Slim fit",
    rating: 5,
    price: 160.9,
    images: [
      {
        url:
          "http://zalora-media-live-sg.s3.amazonaws.com/product/30/9169/1.jpg",
        alt: "alt"
      },
      {
        url:
          "http://zalora-media-live-sg.s3.amazonaws.com/product/30/9169/2.jpg",
        alt: "alt"
      },
      {
        url:
          "http://zalora-media-live-sg.s3.amazonaws.com/product/30/9169/3.jpg",
        alt: "alt"
      }
    ],
    category: {
      id: "c2",
      name: "Women"
    },
    quantity: 1
  }
];