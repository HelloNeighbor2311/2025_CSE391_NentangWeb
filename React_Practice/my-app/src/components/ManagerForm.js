import React, { useState } from "react";

function ManagerForm({ onAdd })  {
    const [name, setName] = useState('');
    const [address, setAdress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !address) {
            alert('Vui lòng nhập đầy đủ thông tin');
            return;
        }

        const newName = {
            id: Date.now(),
            name,
            address,
            updatedAt: new Date().toLocaleString(),
        };
        onAdd(newName);

        setName('');
        setAdress('');
    }

    return (
        <form className="onAdd" onSubmit={handleSubmit}>
            <h2>Thêm mới</h2>
            <div>
                <label>Người quản lý: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Địa chỉ: </label>
                <input type="text" value={address} onChange={(e) => setAdress(e.target.value)} />
            </div>
            <button type="submit">Thêm mới</button>
        </form>
    )
}

export default ManagerForm;