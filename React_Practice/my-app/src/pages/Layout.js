import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="header">
          <Link to="/">Trường Đại học Thuỷ Lợi</Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/QuanLyCuaHang">Quản Lý cửa hàng</Link>
            </li>
            <li className="search">
              <input type="text" placeholder="Tìm kiếm..." />
              <button>Tìm kiếm</button>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
