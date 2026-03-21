import { useSelector, useDispatch } from "react-redux";

function App() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div className="container text-center mt-5">
      <div className="card p-4 mx-auto" style={{ width: "300px" }}>
        <h2 className="mb-4">Value: {value}</h2>

        <div>
          <button
            className="btn btn-success me-2"
            onClick={() => dispatch({ type: "PLUS" })}
          >
            +
          </button>

          <button
            className="btn btn-danger"
            onClick={() => dispatch({ type: "MINUS" })}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;