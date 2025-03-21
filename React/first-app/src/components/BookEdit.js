import React, { useState, useEffect } from "react";

function BookEdit({ editingBook, onUpdate }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setYear(editingBook.year);
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !year) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    const updatedBook = {
      ...editingBook,
      title,
      author,
      year: parseInt(year),
    };
    onUpdate(updatedBook);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Chỉnh sửa sách</h2>
      <div>
        <label>Tiêu đề: </label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Tác giả: </label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Năm: </label>
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
      </div>
      <button type="submit">Cập nhật</button>
    </form>
  )
};

export default BookEdit;
