import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const initialState = {
  data: null,
  loading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };

    case "FETCH_SUCCESS":
      return { data: action.payload, loading: false };

    case "CLEAR":
      return { data: null, loading: false };

    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;