import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import QuanLyCuaHang from "./pages/QuanLyCuaHang";
import NoPage from "./pages/NoPage";
import ManagerForm from "./components/ManagerForm";
import ManagerEdit from "./components/ManagerEdit";
import "./App.css";

function App() {

  const namesData = JSON.parse(localStorage.getItem("names"));
  const [names, setNames] = useState(namesData || []);
  const [showForm, setShowForm] = useState(false);
  const [editingManager, setEditingManager] = useState(null);

  const handleAdd = (name) => {
    setNames(names => {
      const newList = [...names, name];

      const jsonList = JSON.stringify(newList);
      localStorage.setItem("names", jsonList);
      return newList;
    });
    setShowForm(false);
  };

  const handleEditManager = (updatedManager) => {
    const newList = names.map((n => n.id === updatedManager.id ? updatedManager : n));
    setNames(newList);
    localStorage.setItem("names", JSON.stringify(newList));
    setEditingManager(null);
  }

  const handleEditClick = (name) => {
    setEditingManager(name);
  }

  const handleDeleteManager = (id) => {
    const newList = names.filter(n => n.id !== id);
    setNames(newList);
    localStorage.setItem("names", JSON.stringify(newList));
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="QuanLyCuaHang"
            element={
              <QuanLyCuaHang names={names} onAdd={() => setShowForm(true)} onEdit={handleEditClick} onDelete={handleDeleteManager}/>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      {showForm && <ManagerForm onAdd={handleAdd} />}
      {editingManager && <ManagerEdit editingManager={editingManager} onUpdate={handleEditManager} />}
    </>
  );
}

export default App;
