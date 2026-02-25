export default function PaginationMock() {
    return (
      <div className="d-flex align-items-center justify-content-between mt-4">
        <div className="text-muted small">Макет</div>
  
        <nav>
          <ul className="pagination mb-0">
            <li className="page-item disabled">
              <button className="page-link" type="button">Назад</button>
            </li>
            <li className="page-item active">
              <button className="page-link" type="button">1</button>
            </li>
            <li className="page-item">
              <button className="page-link" type="button">2</button>
            </li>
            <li className="page-item">
              <button className="page-link" type="button">Вперёд</button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  