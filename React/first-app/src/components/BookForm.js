import React, { useState } from "react";

function BookForm({ onAdd }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !author || !year) {
            alert('Vui lòng nhập đầy đủ thông tin');
            return;
        }
        
        const newBook = {
            id: Date.now(),
            title,
            author,
            year: parseInt(year),
        };
        onAdd(newBook);

        setTitle('');
        setAuthor('');
        setYear('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Thêm sách</h2>
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
            <button type="submit">Thêm sách</button>
        </form>
    )
}

export default BookForm;