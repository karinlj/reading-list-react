import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";
import Pagination from "./Pagination";

const BookList = () => {
  //destructure what we want from the context
  const { books } = useContext(BookContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(3);

  //get current posts
  const indexOfLastBook = booksPerPage * currentPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  //slice out the number of posts we want (3)
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      {books.length ? (
        <div className="book-list">
          <ul>
            {currentBooks.map((book) => {
              return <BookDetails book={book} key={book.id} />;
            })}
          </ul>
        </div>
      ) : (
        <div className="empty">No books to read. Hello free time! :) </div>
      )}
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        paginate={paginate}
      />
    </div>
  );
};

export default BookList;
