import { createStore, combineReducers } from "redux";

function counter1(state = 0, action) {
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function counter2(state = 0, action) {
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return state + 2;
    case "DECREMENT":
      return state - 2;
    default:
      return state;
  }
}

const counter = combineReducers({ counter1, counter2 });

export function ConfigureStore() {
  let store = createStore(counter);

  // store.subscribe(() => console.log(store.getState()));

  // store.dispatch({ type: "INCREMENT" });
  // // 1
  // store.dispatch({ type: "INCREMENT" });
  // // 2
  // store.dispatch({ type: "DECREMENT" });
  // 1

  return store;
}
