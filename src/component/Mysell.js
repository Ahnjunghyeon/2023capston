import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Mysell.css";

const Mysell = () => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [checkboxes, setCheckboxes] = useState([false, false, false]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + images.length <= 10) {
      const urls = files.map((file) => URL.createObjectURL(file));
      setSelectedImages([...selectedImages, ...urls]);
      setImages([...images, ...files]);
    } else {
      alert("최대 10장까지만 업로드 가능합니다.");
    }
  };
  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);

    const remainingImages = updatedImages.map((file) =>
      URL.createObjectURL(file)
    );
    setImages(updatedImages);
    setSelectedImages(remainingImages);
  };

  const handleCancel = () => {
    // 취소 버튼 클릭 시 이미지 배열 유지
    setSelectedImages(selectedImages);
    setImages(images);
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = new Array(checkboxes.length).fill(false);
    updatedCheckboxes[index] = true;
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <div className="mystore">
      <div className="div">
        <div className="view">
          <div className="text-wrapper">기본정보</div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <hr /> {/* 가로선 */}
            <div className="rectangle" />
            <div className="text-wrapper-2">상품명</div>
            <input
              className="text-wrapper-3" // 여기에 새로운 클래스 이름을 추가할 수 있어요.
              type="text" // 텍스트 입력란으로 지정해줍니다.
              placeholder="상품명 입력" // 힌트 문구를 추가해 사용자에게 보여줍니다.
            />
          </div>
        </div>
        <div className="overlap">
          <hr /> {/* 가로선 */}
          {/* view-2 클래스 이미지 선택하기 */}
          <div className="view-2">
            <div className="text-wrapper-4">상품이미지</div>
            <div
              className="view-3"
              style={{
                width: "100%",
                height: "200px",
                display: "flex",
                overflowX: "auto",
              }}
            >
              {selectedImages.map((image, index) => (
                <div
                  key={index}
                  style={{ marginRight: "5px", position: "relative" }}
                >
                  <img
                    src={image}
                    alt={`이미지 ${index + 1}`}
                    style={{
                      width: "200px",
                      height: "160px",
                      objectFit: "cover",
                    }}
                  />
                  <button
                    onClick={() => removeImage(index)}
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      zIndex: 1, // 다른 요소 위에 표시되도록 zIndex 추가
                      background: "transparent", // 배경을 투명하게 설정
                      border: "none", // 테두리 제거
                      color: "white", // 텍스트 색상을 흰색으로 설정 (선택 사항)
                    }}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: "230px",
                marginLeft: "167px",
              }}
            >
              <div>{`${selectedImages.length}/10`}</div>
              <div className="img-select">
                <input
                  type="file"
                  accept="image/*"
                  className="img-input"
                  onChange={(e) => handleImageUpload(e)}
                  multiple
                />
              </div>
            </div>
          </div>
        </div>
        {/* 거래위치 */}
        <div className="view-5">
          <hr /> {/* 가로선 */}
          <div className="text-wrapper-6">거래위치</div>
          <div className="view-6">
            <div className="form-check" style={{ margin: "10px" }}>
              <input
                className="form-check-input"
                type="radio"
                id="flexCheckIndeterminateDisabled"
                name="checkboxGroup"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckIndeterminateDisabled"
                style={{
                  display: "block",
                  marginLeft: "10px",
                  whiteSpace: "nowrap",
                }}
              >
                내 근처
              </label>
            </div>
            <div className="form-check" style={{ margin: "10px" }}>
              <input
                className="form-check-input"
                type="radio"
                id="flexCheckDisabled"
                name="checkboxGroup"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckDisabled"
                style={{
                  display: "block",
                  marginLeft: "10px",
                  whiteSpace: "nowrap",
                }}
              >
                상대방 위치
              </label>
            </div>
            <div className="form-check" style={{ margin: "10px" }}>
              <input
                className="form-check-input"
                type="radio"
                id="flexCheckCheckedDisabled"
                name="checkboxGroup"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckCheckedDisabled"
                style={{
                  display: "block",
                  marginLeft: "10px",
                  whiteSpace: "nowrap",
                }}
              >
                상관 없음
              </label>
            </div>
          </div>
        </div>
        {/* 상품의 상태 코드 */}
        <div className="view-10">
          <hr /> {/* 가로선 */}
          <div className="text-wrapper-5">상품상태</div>
          <div className="overlap-2">
            {checkboxes.map((isChecked, index) => (
              <div
                key={index}
                className="form-check-inline"
                style={{ marginLeft: "30px" }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`inlineCheckbox${index}`}
                  value={`option${index}`}
                  checked={isChecked}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`inlineCheckbox${index}`}
                >
                  {index === 0
                    ? "새상품"
                    : index === 1
                    ? "중고"
                    : index === 2
                    ? "개봉만"
                    : ""}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="view-11">
          <div className="text-wrapper-4">가격</div>
          <hr /> {/* 가로선 */}
          {/* 가격입력칸  */}
          <input
            className="rectangle-2" // 여기에 새로운 클래스 이름을 추가할 수 있어요.
            type="text" // 텍스트 입력란으로 지정해줍니다.
            placeholder="가격 입력" // 힌트 문구를 추가해 사용자에게 보여줍니다.
          />
        </div>
        <div className="det">
          <hr /> {/* 가로선 */}
          <div className="detail_text">상세정보</div>
          <textarea
            className="details-textarea"
            placeholder="물품의 상세정보를 입력해주세요"
          ></textarea>
        </div>
        <button className="view-12">물품 등록하기</button>
      </div>
    </div>
  );
};
export default Mysell;
