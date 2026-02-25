export default function ResultsInfo({ total, shown }) {
    return (
      <div className="d-flex align-items-center justify-content-between mb-2">
        <h5 className="m-0">Результаты</h5>
        <span className="text-muted small">
          показано: <b>{shown}</b> / всего: <b>{total}</b>
        </span>
      </div>
    );
  }
  