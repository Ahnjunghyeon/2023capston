import React from "react";
import { Link } from "react-router-dom";
import KakaoLogin from "./KakaoLogin";
import "./Kakaosign.css";

function Kakaosign() {
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
          <div className="overlap">
            <div className="text-wrapper-3">회원가입 완료하기</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Kakaosign;
