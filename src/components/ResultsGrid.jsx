import PersonCard from "./PersonCard";

export default function ResultsGrid({ items, selectedId, onSelect }) {
  return (
    <div className="row g-3">
      {items.map((p) => (
        <div className="col-12 col-md-6" key={p.id}>
          <PersonCard
            person={p}
            active={p.id === selectedId}
            onClick={() => onSelect(p.id)}
          />
        </div>
      ))}

      {items.length === 0 && (
        <div className="col-12">
          <div className="alert alert-info mb-0">Ничего не найдено.</div>
        </div>
      )}
    </div>
  );
}
