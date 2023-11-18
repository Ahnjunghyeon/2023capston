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
            <img className="cycle" alt="Cycle" src="cycle-1-3.png" />
            <div className="text-wrapper-2">상품명</div>
            <div className="text-wrapper-3">가격</div>
            <div className="text-wrapper-4">판매자명</div>
            <div className="text-wrapper-5">날짜</div>
          </div>
          <div className="link-2">
            <img className="cycle" alt="Cycle" src="image.png" />
            <div className="text-wrapper-2">상품명</div>
            <div className="text-wrapper-3">가격</div>
            <div className="text-wrapper-4">판매자명</div>
            <div className="text-wrapper-5">날짜</div>
          </div>
          <div className="link-3">
            <img className="cycle" alt="Cycle" src="cycle-1-2.png" />
            <div className="text-wrapper-2">상품명</div>
            <div className="text-wrapper-3">가격</div>
            <div className="text-wrapper-4">판매자명</div>
            <div className="text-wrapper-5">날짜</div>
          </div>
          <div className="link-4">
            <img className="cycle" alt="Cycle" src="cycle-1.png" />
            <div className="text-wrapper-2">상품명</div>
            <div className="text-wrapper-3">가격</div>
            <div className="text-wrapper-4">판매자명</div>
            <div className="text-wrapper-5">날짜</div>
          </div>
          {/* 물품개수 들어갈곳 */}
          <div className="text-wrapper-6">물품개수</div>
        </div>
        <div className="div-relative">
          <div className="div-flex">
            <div className="div-flex-2">
              {/* 사용자명 들어갈곳  */}
              <div className="heading">사용자명</div>
              <div className="ellipse" />
              <img
                className="rectangle"
                alt="Rectangle"
                src="rectangle-4.svg"
              />
              {/* 링크 공유하기 버튼 */}
              <div className="text-wrapper-7">링크 공유하기</div>
              {/* 카카오 공유버튼 */}
              <div className="text-wrapper-8">카카오버튼</div>
              {/* 인스타 공유버튼 */}
              <div className="text-wrapper-9">인스타버튼</div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-10">내 링크</div>
            {/* 랜덤링크 들어갈곳 */}
            <div className="text-wrapper-11">랜덤링크 들어갈곳</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mystore;
