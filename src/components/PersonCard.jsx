export default function PersonCard({ person, active, onClick }) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={
          "card text-start w-100 border " + (active ? "border-primary" : "border-light")
        }
        style={{ transition: "0.15s ease" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
      >
        <div className="card-body">
          <div className="d-flex align-items-start justify-content-between gap-2">
            <div>
              <h6 className="card-title mb-1">{person.name}</h6>
              <div className="text-muted small">
                пол: <b>{person.gender}</b> · год рождения: <b>{person.birthYear}</b>
              </div>
            </div>
  
            {active && <span className="badge text-bg-primary">выбран</span>}
          </div>
  
          <hr className="my-3" />
  
          <div className="d-flex gap-2 flex-wrap">
            <span className="badge text-bg-light">рост: {person.height} см</span>
            <span className="badge text-bg-light">id: {person.id}</span>
          </div>
        </div>
      </button>
    );
  }
  