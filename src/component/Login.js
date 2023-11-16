import React from "react";
import { Link } from "react-router-dom";
import KakaoLogin from "./KakaoLogin";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="div">
        <div className="view">
          <Link to="/Sign">
            <button className="rectangle">계정 생성하기</button>
          </Link>
        </div>
        <div className="view-2">
          <div className="text-wrapper-3">GRAPE</div>
          <p className="p">GRAPE는 SNS 계정을 기반으로 이용하실 수 있습니다.</p>
          <div className="ID">
            <div className="div-wrapper">
              <div className="text-wrapper-4">ID</div>
            </div>
          </div>
          <div className="overlap">
            <div className="text-wrapper-5">SNS 계정 로그인</div>
            <img className="line" alt="Line" src="line-1.png" />
          </div>
        </div>
        <div className="button-wrapper">
          <button className="button">카카오로 시작하기</button>
          <button className="button2">인스타그램으로 시작하기</button>
        </div>
        <div className="view-3"></div>
      </div>
    </div>
  );
}

export default Login;
