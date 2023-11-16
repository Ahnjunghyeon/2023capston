import React from "react";

function Navbar(props) {
  // App 컴포넌트에서 전달한 toggleDropdown 함수를 props로 받아옴
  const { toggleDropdown } = props;

  return (
    <nav className="navbar custom-bg">
      <div className="container-fluid">
        {/* 상점 로고 클릭 시 toggleDropdown 함수 호출 */}
        <a
          className="navbar-brand text-white"
          href="#"
          onClick={toggleDropdown}
        >
          메뉴추가부분
        </a>
        <nav className="navbar">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white border-white"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;
