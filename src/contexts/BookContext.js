import React, { createContext, useState, useEffect } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  //books state
  const [books, setBooks] = useState(
    // [
    //   { title: "Cat of the wind", author: "Filip Ljunggren", id: 0 },
    //   { title: "The final cat", author: "Hugo Ljunggren", id: 1 },
    //   { title: "The shadow of the cat", author: "Truls Ljunggren", id: 2 },
    // ],
    () => {
      const localData = localStorage.getItem("books");
      // return JSON.parse(localData);
      return localData ? JSON.parse(localData) : [];
    }
  );

  //useEffect runs every time data updates and on 1st render
  useEffect(() => {
    //turn books object into a JSON string
    //run this hook on changes in books data
    //set in localStorage
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  //adding a book
  const addBook = (title, author) => {
    const newBook = {
      title: title,
      author: author,
      id: Math.random(),
    };
    setBooks([...books, newBook]);
  };
  //deleting a book
  const deleteBook = (id) => {
    setBooks(
      books.filter((book) => {
        return book.id !== id;
      })
    );
  };
  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {/* all inside */}
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
