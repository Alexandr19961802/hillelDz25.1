import { createStore } from "redux";

const initialState = {
  todos: [
    { id: 1, text: "Redux", done: false },
    { id: 2, text: "React", done: false },
    { id: 3, text: "JS", done: false },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            done: false,
          },
        ],
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, done: !todo.done }
            : todo
        ),
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;