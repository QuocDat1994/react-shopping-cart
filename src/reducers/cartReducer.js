export default function cartReducer(state = {}, action) {
  let currentProductInCart;
  let cartItems;

  switch (action.type) {
    case "ADD_TO_CART":
      currentProductInCart = state.cartItems.find(
        ({ id }) => id === action.product.id
      );

      let cartItems;

      if (currentProductInCart) {
        cartItems = state.cartItems.map(({ id, quantity, ...rest }) => {
          if (id === action.product.id) {
            return {
              ...action.product,
              quantity: quantity + 1
            };
          } else {
            return { id, quantity, ...rest };
          }
        });
      } else {
        cartItems = [
          ...state.cartItems,
          {
            ...action.product,
            quantity: 1,
            selectedSize: action.product.sizes[0]
          }
        ];
      }

      return {
        ...state,
        numItems: state.numItems + 1,
        cartItems
      };

    case "REMOVE_FROM_CART":
      cartItems = state.cartItems
        .map(({ id, ...rest }) => {
          if (id !== action.product.id) {
            return { id, ...rest };
          }
        })
        .filter(Boolean);

      return {
        ...state,
        cartItems: cartItems,
        numItems: state.numItems - action.product.quantity
      };

    case "CHANGE_PRODUCT_SIZE":
      currentProductInCart = state.cartItems.find(
        ({ id }) => id === action.product.id
      );

      cartItems = state.cartItems.map(({ id, selectedSize, ...rest }) => {
        if (id === action.product.id) {
          return {
            ...action.product,
            selectedSize: action.newSize
          };
        } else {
          return { id, selectedSize, ...rest };
        }
      });

      return {
        ...state,
        cartItems
      };

    default:
      return state;
  }
}
