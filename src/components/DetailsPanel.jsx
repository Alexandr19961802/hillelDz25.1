export default function DetailsPanel({ person }) {
    return (
      <div className="card" style={{ position: "sticky", top: 12 }}>
        <div className="card-body">
          <h5 className="card-title mb-3">Детали</h5>
  
          <div className="mb-2">
            <div className="text-muted small">Имя</div>
            <div className="fw-semibold">{person?.name ?? "—"}</div>
          </div>
  
          <div className="row g-2 mb-3">
            <div className="col-6">
              <div className="text-muted small">Пол</div>
              <div>{person?.gender ?? "—"}</div>
            </div>
            <div className="col-6">
              <div className="text-muted small">Год рождения</div>
              <div>{person?.birthYear ?? "—"}</div>
            </div>
            <div className="col-6">
              <div className="text-muted small">Рост</div>
              <div>{person?.height ? `${person.height} см` : "—"}</div>
            </div>
            <div className="col-6">
              <div className="text-muted small">Статус</div>
              <span className="badge text-bg-success">готово</span>
            </div>
          </div>
  
          <div className="alert alert-warning mb-0">
          </div>
        </div>
      </div>
    );
  }
  