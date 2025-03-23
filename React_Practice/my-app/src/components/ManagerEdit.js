import React, { useState, useEffect } from "react";

function ManagerEdit({ editingManager, onUpdate }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (editingManager) {
      setName(editingManager.name);
      setAddress(editingManager.address);
    }
  }, [editingManager]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    const updatedManager = {
      ...editingManager,
      name,
      address,
    };
    onUpdate(updatedManager);
  };

  return (
    <form className="onEdit" onSubmit={handleSubmit}>
      <h2>Chỉnh sửa người quản lý</h2>
      <div>
        <label>Tên: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Địa chỉ: </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button type="submit">Cập nhật</button>
    </form>
  );
}

export default ManagerEdit;