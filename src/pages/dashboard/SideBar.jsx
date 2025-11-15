import React from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="sidebar d-flex flex-column p-3">
      <h3 className="text-white text-center mb-4">Admin</h3>

      <ul className="nav flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active">
            <FaTachometerAlt className="me-2" /> Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            <FaUsers className="me-2" /> Users
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            <FaChartBar className="me-2" /> Reports
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            <FaCog className="me-2" /> Settings
          </a>
        </li>
      </ul>

      <hr />

      <div className="logout mt-auto">
        <a href="#" className="nav-link logout-link">
          <FaSignOutAlt className="me-2" /> Logout
        </a>
      </div>
    </div>
  );
};

export default SideBar;
