import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  //destructure what we want from the context
  const { books } = useContext(BookContext);

  return (
    <div>
      {books.length ? (
        <div className="book-list">
          <ul>
            {books.map((book) => {
              //   return <li key="{book.id}">{book.title}</li>;
              return <BookDetails book={book} key={book.id} />;
            })}
          </ul>
        </div>
      ) : (
        <div className="empty">No books to read. Hello free time! :) </div>
      )}
    </div>
  );
};

export default BookList;
