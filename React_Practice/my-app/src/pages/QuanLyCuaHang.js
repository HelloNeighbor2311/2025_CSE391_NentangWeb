import React from "react";

function QuanLyCuaHang({ names, onEdit, onDelete, onAdd }) {
  return (
    <div className="main">
      <div className="action">
        <div className="action-left">
          <button onClick={onAdd}>Thêm mới</button>
          <button>Xuất ra file</button>
        </div>
        <div className="action-middle">
          <input type="text" placeholder="Tìm kiếm..." />
          <button>Tìm kiếm</button>
        </div>
        <div className="action-right">
          <label for="results">
            <strong>Kết quả</strong>
          </label>
          <select id="results">
            <option value="20">20</option>
          </select>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <td><strong>Hành động</strong></td>
            <td><strong>STT</strong></td>
            <td><strong>Người quản lý</strong></td>
            <td><strong>Địa chỉ</strong></td>
            <td><strong>Lần cập nhật cuối</strong></td>
          </tr>
        </thead>

        <tbody>
            {names.map((name,index) => (
              <tr key={name.id}>
                <td>
                  <button onClick={() => onEdit(name)}>Chỉnh sửa</button>
                  <button onClick={() => onDelete(name.id)}>Xóa</button>
                </td>
                <td>{index + 1}</td>
                <td>{name.name}</td>
                <td>{name.address}</td>
                <td>{name.updatedAt}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuanLyCuaHang;
