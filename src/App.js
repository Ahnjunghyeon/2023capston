import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./Header";
import Login from "./component/Login";
import Storeopen from "./component/Storeopen";
import Mypage from "./component/Mypage";
import Mysell from "./component/Mysell"; // Mysell 컴포넌트를 import
import Sign from "./component/Sign"; // Sign 컴포넌트를 import
import Kakaosign from "./component/Kakaosign"; // Sign 컴포넌트를 import
import Instasign from "./component/Instasign"; // Sign 컴포넌트를 import
import "./App.css";
import Mystuff from "./component/Mystuff";

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
            <Route path="/sign" element={<Sign />} />{" "}
            {/* Sign 페이지 Route 추가 */}
            <Route path="/kakaosign" element={<Kakaosign />} />{" "}
            <Route path="/instasign" element={<Instasign />} />{" "}
            <Route path="/mystuff" element={<Mystuff />} />{" "}
            <Route path="/mystuff/:productName" element={<Mystuff />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Home 컴포넌트는 이전과 동일하게 유지

function Home() {
  const buttonStyle = {
    backgroundColor: "rgba(128, 0, 128, 0.8)", // 보라색과 80% 투명도
    color: "white", // 텍스트 색상을 흰색으로 설정
  };

  return (
    <div className="bg-light p-5 rounded">
      <img src="/followImage.jpg" alt="Follow Image" />
      <p className="lead"></p>
      <Link to="/storeopen" className="btn btn-lg" style={buttonStyle}>
        더보기
      </Link>
    </div>
  );
}

export default App;
