import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = (props) => {
  const { book } = props;

  //consume the context for I need the delete func
  const { deleteBook } = useContext(BookContext);

  //calling context func and passing parameter up to context
  const handleClick = (id) => {
    console.log("id", id);
    deleteBook(id);
  };
  return (
    <li onClick={() => handleClick(book.id)}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
