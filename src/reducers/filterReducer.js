export default function filterReducer(state = [], action) {
  switch (action.type) {
    case "SET_FILTER_BY_SIZE":
      let sizeFilter = state.sizeFilter;

      if (state.sizeFilter.length === 0) {
        sizeFilter.push(action.size);
      } else {
        let isAdded = false;
        for (let i = 0; i < state.sizeFilter.length; i++) {
          if (action.size === state.sizeFilter[i]) {
            isAdded = true;
            break;
          }
        }

        if (isAdded === false) {
          sizeFilter.push(action.size);
        }
      }

      return {
        ...state,
        sizeFilter: sizeFilter
      };

    default:
      return state;
  }
}
