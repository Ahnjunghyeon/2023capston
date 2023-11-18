import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import GrapeLogo from "../src/images/GREAP.png";
import "./Header.css";

function Header() {
  const navbarTextStyle = {
    color: "black",
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-white mb-4">
      <div className="container-fluid">
        <div className="col-4 d-flex justify-content-center">
          <Link to="/" style={{ textDecoration: "none" }}>
            <a className="navbar-brand" href="#">
              <img
                src={GrapeLogo}
                alt="GrapeLogo"
                width="150"
                height="100"
                className="d-inline-block align-text-top"
              />
            </a>
          </Link>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <form className="d-flex">
            <div className="input-group">
              <button
                className="btn btn-outline"
                type="submit"
                style={{
                  width: "40px",
                  borderColor: "#807097",
                }}
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{
                    color: "#807097",
                  }}
                />
              </button>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "300px" }}
              />
            </div>
          </form>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mb-2 mb-md-0">
              {/* 상점보기 메뉴 */}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  style={{
                    ...navbarTextStyle,
                    padding: "12px 12px",
                    borderRadius: "24px",
                    border: "none",
                    textDecoration: "none",
                    display: "inline-block", // inline-block 추가
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "30%",
                    marginLeft: "10px",
                  }}
                >
                  상점보기
                </Link>
              </li>
              {/* 내 상점 메뉴 */}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/mysell"
                  style={{
                    ...navbarTextStyle,
                    padding: "12px 12px",
                    borderRadius: "24px",
                    border: "none",
                    textDecoration: "none",
                    display: "inline-block", // inline-block 추가
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "30%",
                    marginLeft: "10px",
                  }}
                >
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
                  style={{
                    ...navbarTextStyle,
                    padding: "12px 12px",
                    borderRadius: "24px",
                    border: "none",
                    textDecoration: "none",
                    display: "inline-block", // inline-block 추가
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "30%",
                    marginLeft: "10px",
                  }}
                >
                  마이페이지
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Mypage"
                      style={navbarTextStyle}
                    >
                      내 정보
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Mystuff"
                      style={navbarTextStyle}
                    >
                      내 상품
                    </Link>
                  </li>
                </ul>
              </li>
              {/* 로그인 메뉴 */}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/login"
                  style={{
                    ...navbarTextStyle,
                    padding: "12px 12px",
                    borderRadius: "24px",
                    border: "none",
                    textDecoration: "none",
                    display: "inline-block", // inline-block 추가
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "30%",
                    marginLeft: "10px",
                  }}
                >
                  로그인
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
