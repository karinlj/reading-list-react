import BookcontextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import NewBookForm from "./components/NewBookForm";

function App() {
  return (
    <div className="App">
      <BookcontextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookcontextProvider>
    </div>
  );
}

export default App;
