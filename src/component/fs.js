import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {
  const navbarTextStyle = {
    color: "black",
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span style={navbarTextStyle}>로고</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {/* 상점보기 메뉴 */}
            <li className="nav-item">
              <Link className="nav-link active" to="/" style={navbarTextStyle}>
                상점보기
              </Link>
            </li>
            {/* 내 상점 메뉴 */}
            <li className="nav-item">
              <Link className="nav-link" to="/mysell" style={navbarTextStyle}>
                물품등록
              </Link>
            </li>
            {/* 마이페이지 메뉴 (드롭다운으로 변경) */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={navbarTextStyle}
              >
                마이페이지
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    내 정보
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    내 상점
                  </a>
                </li>
              </ul>
            </li>
            {/* 로그인 메뉴 */}
            <li className="nav-item">
              <Link className="nav-link" to="/login" style={navbarTextStyle}>
                로그인
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
