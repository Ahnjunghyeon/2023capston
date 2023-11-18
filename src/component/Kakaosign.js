import React from "react";
import { Link } from "react-router-dom";
import KakaoLogin from "./KakaoLogin";
import "./Kakaosign.css";

const Kakaosign = () => {
  const REST_API_KEY = "ee1656f10977a74e60cf2cd41e6bc0d6";
  const REDIRECT_URI = "http://localhost:3000";
  const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code
  `;

  // 카카오 로그인 페이지로 리디렉션합니다.
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_LOGIN_URL;
  };
  return (
    <div className="screen">
      <div className="div">
        <div className="view">
          <div className="overlap-group">
            <div className="text-wrapper">GRAPE</div>
            <div className="text-wrapper-2">카카오계정 회원가입</div>
            <div className="view-2">
              <p className="span-wrapper">
                <span className="span">(필수) 계정 팔로워 정보이용</span>
              </p>
              <img
                className="rectangle"
                alt="Rectangle"
                src="rectangle-6.svg"
              />
            </div>
            <div className="view-3">
              <p className="span-wrapper">
                <span className="span">(필수) 계정 팔로워 정보이용</span>
              </p>
              <img className="rectangle" alt="Rectangle" src="image.svg" />
            </div>
            <div className="view-4">
              <p className="span-wrapper">
                <span className="span">(필수) 계정 팔로워 정보이용</span>
              </p>
              <img
                className="rectangle"
                alt="Rectangle"
                src="rectangle-6-2.svg"
              />
            </div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <button className="overlap" onClick={handleKakaoLogin}>
            카카오톡 회원가입하기
          </button>
        </div>
      </div>
    </div>
  );
};
export default Kakaosign;
