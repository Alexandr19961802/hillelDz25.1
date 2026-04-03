import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

const initialState = {
  todos: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TODOS":
      return { ...state, todos: action.payload };

    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.payload ? { ...t, done: !t.done } : t
        ),
      };

    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.payload.id
            ? { ...t, text: action.payload.text }
            : t
        ),
      };

    case "CLEAR":
      return { ...state, todos: [] };

    default:
      return state;
  }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;