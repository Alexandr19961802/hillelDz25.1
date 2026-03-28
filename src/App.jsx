import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state);

  const fetchData = () => {
    dispatch(async (dispatch) => {
      dispatch({ type: "FETCH_START" });

      const res = await fetch("https://swapi.py4e.com/api/people/1/");
      const json = await res.json();

      dispatch({
        type: "FETCH_SUCCESS",
        payload: json,
      });
    });
  };

  const clearData = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <div className="container mt-5">
      <h1>SWAPI</h1>

      <div className="d-flex mb-3">
        <input
          className="form-control me-2"
          value="https://swapi.py4e.com/api/people/1/"
          readOnly
        />
        <button className="btn btn-secondary" onClick={fetchData}>
          Get info
        </button>
      </div>

      <div className="border p-3" style={{ minHeight: "200px" }}>
        {loading && <p>Loading...</p>}

        {data && (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>

      <button className="btn btn-warning mt-3" onClick={clearData}>
        Clear
      </button>
    </div>
  );
}

export default App;