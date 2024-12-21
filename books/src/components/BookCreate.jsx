import "../index.css";
import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  const { createBook } = useBooksContext();
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>加入一本書</h3>
      <form onSubmit={handleSubmit}>
        <label>請輸入書名:</label>
        <input
          className="input"
          type="text"
          value={title}
          onChange={handleChange}
        />
        <button className="button">建立書單</button>
      </form>
    </div>
  );
}

export default BookList;
