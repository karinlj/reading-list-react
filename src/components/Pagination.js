const Pagination = ({ booksPerPage, totalBooks, paginate }) => {
  const pageNumbers = [];

  //total amount of pageNumbers
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination_container">
      <ul className="pagination">
        {/* click on every number and passing it to main component */}
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <span onClick={() => paginate(number)} className="page-link">
                {number}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
