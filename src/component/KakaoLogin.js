import React from "react";

const KakaoLogin = () => {
  // Kakao 로그인 요청 URL을 생성합니다.
  const REST_API_KEY = "YOUR_KAKAO_REST_API_KEY"; // 카카오 REST API 키
  const REDIRECT_URI = "YOUR_REDIRECT_URI"; // 리디렉션 URI
  const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // 카카오 로그인 페이지로 리디렉션합니다.
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_LOGIN_URL;
  };

  return <button onClick={handleKakaoLogin}>Kakao로 로그인</button>;
};

export default KakaoLogin;
