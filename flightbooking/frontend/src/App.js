import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DashBoard from "./components/admin/DashBoard/DashBoard";
import Staffs from "./components/admin/Staffs/Staffs";
import Customers from "./components/admin/Customers/Customers";
import LoginAdmin from "./components/login/admin/LoginAdmin";
import LoginUser from "./components/login/user/LoginUser";
import Flight from "./components/admin/Flight/Flight";
import TicketClass from "./components/admin/Flight/TicketsClass/TicketClass";
import EditFlight from './components/admin/Flight/EditFlight/EditFlight';
import ScrollToTop from './components/admin/ScrollToTop/ScrollToTop';
import SanBay from "./components/admin/Flight/SanBay/SanBay";
import EditAirport from './components/admin/Flight/SanBay/NewAirport/EditAirport';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginAdmin />} />
          <Route path="/loginuser" element={<LoginUser />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/staff" element={<Staffs />} />
          <Route path="/customer" element={<Customers />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/flightdetail/:id" element={<Flight />} />
          <Route path="/editflight/:id" element={<EditFlight />} />
          <Route path="/ticketclass" element={<TicketClass />} />
          <Route path="/airport" element={<SanBay />} />
          <Route path="/editairport/:id" element={<EditAirport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
