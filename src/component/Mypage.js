import React from "react";
import { Link } from "react-router-dom";
import "./Mypage.css";

function Mystore() {
  return (
    <div className="screen">
      <div className="div">
        <div className="main">
          <div className="text-wrapper"> 개의 상품</div>
          <div className="link">
            <div className="card" style={{ width: "18rem" }}>
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div className="card-body">
                <h5 className="card-title">상품명</h5>
                <p className="card-text">가격</p>
                <p className="card-text">날짜</p>

                {/* Use Link to navigate to Mystuff.js */}
                <Link to="/mystuff" className="btn btn-primary">
                  상품보기
                </Link>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="div-relative">
          <div className="div-flex">
            <div className="nickname">
              <div className="nickname">junghhyy</div>
            </div>
          </div>
          <div className="relative" />
        </div>
      </div>
    </div>
  );
}

export default Mystore;
