import { createStore } from "redux";

const initialState = {
  value: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "PLUS":
      return { value: state.value + 1 };

    case "MINUS":
      return { value: state.value - 1 };

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;