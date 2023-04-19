import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/admin/DashBoard/DashBoard";
import Staffs from "./components/admin/Staffs/Staffs";
import Customers from "./components/admin/Customers/Customers";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/staff" element={<Staffs />} />
          <Route path="/customer" element={<Customers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
