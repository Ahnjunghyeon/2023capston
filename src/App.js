import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./Header";
import Login from "./component/Login";
import Storeopen from "./component/Storeopen";
import Mypage from "./component/Mypage";
import Mysell from "./component/Mysell";
import Sign from "./component/Sign";
import "./App.css";
import Mystuff from "./component/Mystuff";
import GREAPP from "../src/images/GREAPP.png";
import Fit from "../src/images/Fit.jpg";
import Store from "../src/images/Store.jpg";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/storeopen" element={<Storeopen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/mysell" element={<Mysell />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/mystuff" element={<Mystuff />} />
            <Route path="/mystuff/:productName" element={<Mystuff />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="web">
      <div className="frame">
        <div className="div">
          <div className="text-wrapper">Logo</div>
          <div className="text-wrapper-2">로그인</div>
          <img className="GREAPP" alt="Greapp" src={GREAPP} />
          <p className="p">팔로워들간 거래를 목적으로 개설한 쇼핑몰입니다.</p>
          <div className="text-wrapper-3">SNS를 기반으로 이루어지는</div>
          <p className="text-wrapper-4">
            그리고 가장 안전하고, 가까운 곳에서 구매해보세요
          </p>
          <p className="text-wrapper-5">
            그리고 자신에게 꼭 맞는 제품을 소개하고,
          </p>
          <div className="text-wrapper-6">나의 제품을 판매해보세요!</div>
          <img className="fit" alt="Fit" src={Fit} />
          <img className="store" alt="Store" src={Store} />
          <Link to="/storeopen" className="rectangle">
            {/* Link를 이용해 rectangle을 클릭했을 때 storeopen 페이지로 이동 */}{" "}
            <div className="text-wrapper-7">GREAP 바로가기</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
