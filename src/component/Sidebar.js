import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom"; // Link 컴포넌트를 사용하므로 삭제하지 마세요.
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style={{ width: "280px" }}
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32">
          <use href="#bootstrap"></use>
        </svg>
        <span className="fs-4">Bootstrap</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">
            <svg className="bi me-2" width="16" height="16">
              <use href="#home"></use>
            </svg>
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use href="#speedometer2"></use>
            </svg>
            About
          </Link>
        </li>
        <li>
          <Link to="/orders" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use href="#table"></use>
            </svg>
            Services
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use href="#grid"></use>
            </svg>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/customers" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use href="#people-circle"></use>
            </svg>
            Login
          </Link>
        </li>
      </ul>
      <hr />
      <div className="d-flex align-items-center text-white text-decoration-none">
        <img
          src="https://github.com/mdo.png"
          alt=""
          width="32"
          height="32"
          className="rounded-circle me-2"
        />
        <strong>mdo</strong>
      </div>
    </div>
  );
};

export default Sidebar;
