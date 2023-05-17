import React, { useState } from "react";
import "./SideBar.scss";

//Imported icons
import { FaBars } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io5";
import { HiHome, HiOutlineLogout } from "react-icons/hi";
import {
  FaUserGraduate,
  FaUserFriends,
  FaUserTie,
  FaChartPie,
  FaCog,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const SideBar = () => {

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <div className="side-nav-container">
      <div className="side-upper">
        <div className="side-heading">
          <div className="side-brand">
            <h2>Flight Booking</h2>
          </div>
        </div>

        <div className="side-content-container">
          <ul className="list-unstyled">
            <li>
              <Link
                to="/dashboard"
                className="text-nowrap text-decoration-none"
              >
                <HiHome className="icon" />
                <span>Trang Chủ</span>
              </Link>
            </li>
            <li>
              <Link to="/staff" className="text-nowrap text-decoration-none">
                <HiHome className="icon" />
                <span>Nhân Viên</span>
              </Link>
            </li>
            <li>
              <Link to="/customer" className="text-nowrap text-decoration-none">
                <HiHome className="icon" />
                <span>Khách Hàng</span>
              </Link>
            </li>
            <li>
              <Link to="/flight" className="text-nowrap text-decoration-none">
                <HiHome className="icon" />
                <span>Chuyến Bay</span>
              </Link>
            </li>
            <li>
              <Link to="/flight" className="text-nowrap text-decoration-none">
                <HiHome className="icon" />
                <span>Chuyến Bay</span>
              </Link>
            </li>
          </ul>
          <div className="desh-logout">
            <Link to="/" className="text-nowrap text-decoration-none">
              <HiOutlineLogout className="icon" />
              <span>Log Out</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
