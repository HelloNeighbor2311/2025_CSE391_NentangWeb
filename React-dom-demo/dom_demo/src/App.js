import React from "react";
import { Link, Route, Routes} from "react-router-dom";
import HomePages from "./pages/home";
import NewsPage from "./pages/news";
import ContactPage from "./pages/contact";
import SignIn from "./pages/sign-in";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/news">Tin tức</Link>
          </li>
          <li>
            <Link to="/contact">Liên lạc</Link>
          </li>
          <li>
            <Link to="sign-in">Đăng nhập</Link>
          </li>
        </ul>
      </nav>
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
    <footer>
      <p>&copy; This is the best footer.</p>
    </footer>
    </div>
  );
}

export default App;