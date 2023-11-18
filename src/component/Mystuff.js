import React from "react";
import { Link } from "react-router-dom";
import "./Mystuff.css";

function Mystore() {
  return (
    <div className="div-mx-auto">
      <div className="div">
        <div className="div-items-start">
          <div className="div-carouselwrapper">
            <div className="div-swiper">
              {/* 대표 이미지를 받아오도록 수정할코드 */}
              {/* <img className="store" alt="Store" src={Store} /> */}
              <div className="rectangle" />
            </div>
          </div>
          <div className="group">
            <div className="div-flex">
              <button className="button">카카오톡으로 구매</button>
              <button className="button">인스타그램으로 구매</button>
            </div>
            <div className="div-py">
              <div className="span-wrapper">
                <div className="span">
                  {/* 날짜 받아올부분 */}
                  <p className="text-wrapper">2019-11-26 · 조회 18 · 찜 0</p>
                </div>
              </div>
              <div className="div-flex-2">
                <div className="div-flex-3">
                  <div className="text-wrapper">거래위치</div>
                  <div className="span-block">
                    {/* 거래위치 받아올부분 */}
                    <div className="text-wrapper-2">거래위치 표시</div>
                  </div>
                </div>
                <div className="div-flex-4">
                  <div className="text-wrapper">상품상태</div>
                  <div className="div-wrapper">
                    {/* 상품상태 받아올부분 */}
                    <div className="text-wrapper-2">상품상태</div>
                  </div>
                </div>
                <div className="div-flex-5">
                  <div className="text-wrapper">제품 상태</div>
                  <div className="span-block-2">
                    <div className="text-wrapper-3">중고</div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="span-inline-block" />
                <div className="div-flex-6" />
              </div>
            </div>
            <div className="div-pb">
              <div className="view">
                <div className="div-text-heading">
                  {/* 가격 들어갈자리 */}
                  <div className="text-wrapper-4">가격</div>
                  <div className="text-wrapper-5">원</div>
                </div>
              </div>
              <div className="heading">
                {/* 상품명 들어갈자리 */}
                <div className="text-wrapper-6">상품명 들어갈 자리</div>
                <div className="view-2" />
              </div>
            </div>
          </div>
        </div>
        {/* 전체사진 받아올 부분 */}
        <img className="img" alt="Rectangle" src="rectangle-3.svg" />
      </div>
    </div>
  );
}

export default Mystore;
