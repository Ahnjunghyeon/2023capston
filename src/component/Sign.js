import React from "react";
import { Link } from "react-router-dom";
import KakaoLogin from "./KakaoLogin";
import "./Sign.css";

function Sign() {
  return (
    <div className="sign">
      <div className="div">
        <div className="view">
          <div className="overlap-group">
            <div className="text-wrapper">GRAPE</div>
            <div className="text-wrapper-2">GRAPE 계정 생성하기</div>
            <p className="p">
              보유하고 계신 SNS 계정으로 회원가입이 가능합니다.
            </p>
          </div>
        </div>
        <div className="overlap-wrapper">
          {/* 카카오톡으로 회원가입 버튼 */}
          <Link to="/kakaosign">
            <button className="kakaobutton">카카오톡으로 회원가입</button>
          </Link>
        </div>
        <div className="overlap-group-wrapper">
          {/* 인스타그램으로 회원가입 버튼 */}
          <Link to="/instasign">
            <button className="instabutton">인스타그램으로 회원가입</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sign;
