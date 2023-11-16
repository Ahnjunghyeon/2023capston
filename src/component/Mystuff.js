import React from "react";
import { Link } from "react-router-dom";
import "./Mystuff.css";

function Mystuff() {
  return (
    <div className="web-joongna-com-by">
      <div className="div-mx-auto-wrapper">
        <div className="div-mx-auto">
          <div className="div-items-start">
            <div className="div-carouselwrapper">
              <div className="div-swiper" />
            </div>
            <div className="group">
              <div className="div-flex">
                <button className="button">카카오 구매 채팅하기</button>
                <button className="button">인스타 구매 채팅하기</button>
              </div>
              <div className="div-py">
                <div className="span-wrapper">
                  <div className="span">
                    <p className="text-wrapper">날짜</p>
                  </div>
                </div>
                <div className="div">
                  <div className="div-flex-2">
                    <div className="text-wrapper">배송비</div>
                    <div className="span-block">
                      <div className="text-wrapper-2">배송비 포함</div>
                    </div>
                  </div>
                  <div className="div-flex-3">
                    <div className="text-wrapper">페이</div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-2">미사용</div>
                    </div>
                  </div>
                  <div className="div-flex-4">
                    <div className="text-wrapper">제품 상태</div>
                    <div className="span-block-2">
                      <div className="text-wrapper-3">중고</div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="span-inline-block">
                    <div className="text-wrapper-4">*거래방법 선택</div>
                  </div>
                  <div className="div-flex-5" />
                </div>
              </div>
              <div className="div-pb">
                <div className="view">
                  <div className="div-text-heading">
                    <div className="overlap-group">
                      <div className="text-wrapper-5">가격</div>
                      <div className="text-wrapper-6">원</div>
                    </div>
                  </div>
                </div>
                <div className="heading">
                  <p className="p">상품명</p>
                  <p className="p">{/* TODO: 상품명 표시 */}</p>
                  <div className="view-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mystuff;
