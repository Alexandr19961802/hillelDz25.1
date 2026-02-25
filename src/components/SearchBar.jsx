export default function SearchBar({ query, onChange }) {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title mb-2">Поиск</h5>
  
          <div className="input-group">
            <span className="input-group-text">Персонаж</span>
            <input
              className="form-control"
              placeholder="Введите имя..."
              value={query}
              onChange={(e) => onChange(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => onChange("")}
            >
              Очистить
            </button>
          </div>
        </div>
      </div>
    );
  }
  