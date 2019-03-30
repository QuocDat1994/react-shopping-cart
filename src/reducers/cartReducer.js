export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.cartItems.length > 0) {
        let isAdded = false;

        for (let i = 0; i < state.cartItems.length; i++) {
          if (action.product.id === state.cartItems[i].id) {
            isAdded = true;
            state.cartItems[i].quantity += 1;
            break;
          }
        }

        if (!isAdded) {
          action.product.quantity = 1;
          state.cartItems.push(action.product);
        }
      } else {
        action.product.quantity = 1;
        state.cartItems.push(action.product);
      }

      state.numItems++;

      const newState = {};
      Object.assign(newState, state);

      return newState;

    case "REMOVE_PRODUCT":
      let newNum = state.numItems;
      let newCart = state.cartItems;
      newNum -= state.cartItems[action.cartIndex].quantity;
      newCart.splice(action.cartIndex, 1);

      return {
        cartItems: newCart,
        numItems: newNum
      };

    default:
      return state;
  }
}
