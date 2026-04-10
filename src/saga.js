import { takeEvery, put, delay } from "redux-saga/effects";

function* loadTodos() {
  yield delay(500);

  const todos = [
    { id: 1, text: "Redux", done: false },
    { id: 2, text: "Saga", done: false },
  ];

  yield put({ type: "SET_TODOS", payload: todos });
}

function* addTodo(action) {
  yield delay(300);

  yield put({
    type: "ADD_TODO",
    payload: {
      id: Date.now(),
      text: action.payload,
      done: false,
    },
  });
}

export default function* rootSaga() {
  yield takeEvery("LOAD_TODOS", loadTodos);
  yield takeEvery("ADD_TODO_ASYNC", addTodo);
}