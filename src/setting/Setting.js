// 필요한 모듈 또는 라이브러리 가져오기
import React from "react";

// 함수형 컴포넌트 또는 클래스 컴포넌트 정의
function Setting() {
  // 컴포넌트의 상태 및 로직 정의
  const [count, setCount] = React.useState(0);

  // JSX를 사용하여 컴포넌트의 UI 정의
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// 컴포넌트를 다른 파일에서 사용할 수 있도록 내보내기
export default Setting;
