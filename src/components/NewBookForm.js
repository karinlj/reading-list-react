import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  //destructure what we want from the context
  const { addBook } = useContext(BookContext);
  //2 pieces of state and set initially to ''
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleChange = (e) => {
    console.log("e", e.target.value);
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else {
      setAuthor(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //calling context func and passing parameters up to context
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="title"
        placeholder="Book title"
        value={title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        id="author"
        placeholder="Book author"
        value={author}
        onChange={handleChange}
        required
      />
      <button>Add Book</button>
    </form>
  );
};

export default NewBookForm;
