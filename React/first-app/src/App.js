import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookEdit from './components/BookEdit';
import './App.css';

function App() {
  const  [books, setBooks]  = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleUpdateBook = (updatedBook) => {
    const newList = books.map(b =>
      b.id === updatedBook.id ? updatedBook : b
    );
    setBooks(newList);
    setEditingBook(null);
  }

  const handeleEditClick = (book) => {
    setEditingBook(book);
  };

  const handleDeleteBook = (id) => {
    const newList = books.filter(b => b.id !== id);
    setBooks(newList);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>Quản lý sách</h1>
      <BookForm onAdd={handleAddBook} />
      <BookList books={books} onEdit={handeleEditClick} onDelete={handleDeleteBook} />
      {editingBook && <BookEdit onUpdate={handleUpdateBook} editingBook={editingBook} />}
    </div>
  );
}

export default App;