import React from "react";

function BookList({ books, onEdit, onDelete }) {
  return (
    <div>
      <h2>Danh sách sách</h2>
      <table>
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Tác giả</th>
            <th>Năm</th>
            <th>Lựa chọn</th>
          </tr>
        </thead>

        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>
                <button onClick={() => onEdit (book)}>Chỉnh sửa</button>
                <button onClick={() => onDelete (book.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
