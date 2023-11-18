import React from "react";
import { Link } from "react-router-dom";

import "./Sign.css";

const Sign = () => {
  //카카오톡
  const REST_API_KEY = "ee1656f10977a74e60cf2cd41e6bc0d6";
  const REDIRECT_URI = "http://localhost:3000";
  const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code
  `;
  // 카카오 로그인 페이지로 리디렉션합니다.
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_LOGIN_URL;
  };

  // 인스타그램

  return (
    <div className="sign">
      <div className="div">
        <div className="view">
          <Link to="/login">
            <button className="rectangle">돌아가기</button>
          </Link>
        </div>
        <div className="view-2">
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
          <button className="kakaobutton" onClick={handleKakaoLogin}>
            카카오톡으로 회원가입
          </button>
        </div>
        <div className="overlap-group-wrapper">
          {/* 인스타그램으로 회원가입 버튼 */}
          <button className="instabutton">인스타그램으로 회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Sign;
