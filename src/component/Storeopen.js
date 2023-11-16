import React from "react";

function Storeopen() {
  // 이미지와 관련된 데이터
  const articles = [
    {
      eventLabel: "667625214",
      imageSrc: "판매 예시 사진 이미지주소 ",
      title: "판매 제목",
      price: "가 격",
      region: "위 치",
      likes: "좋아요",
      chatCount: "채팅 수",
    },
    {
      eventLabel: "667625214",
      imageSrc: "판매 예시 사진 이미지주소 ",
      title: "판매 제목",
      price: "가 격",
      region: "위 치",
      likes: "좋아요",
      chatCount: "채팅 수",
    },
    {
      eventLabel: "667625214",
      imageSrc: "판매 예시 사진 이미지주소 ",
      title: "판매 제목",
      price: "가 격",
      region: "위 치",
      likes: "좋아요",
      chatCount: "채팅 수",
    },
    {
      eventLabel: "667625214",
      imageSrc: "판매 예시 사진 이미지주소 ",
      title: "판매 제목",
      price: "가 격",
      region: "위 치",
      likes: "좋아요",
      chatCount: "채팅 수",
    },
    // 다른 항목들 추가
  ];

  return (
    <div>
      <main className="container">
        <section className="fleamarket-article-list">
          <h1 className="text-center article-list-title">중고거래 인기매물</h1>
          <div className="cards-wrap">
            {articles.map((article, index) => (
              <article className="card-top" key={index}>
                <a
                  className="card-link"
                  data-event-label={article.eventLabel}
                  href={`/articles/${article.eventLabel}`}
                >
                  <div className="card-photo">
                    <img alt={article.title} src={article.imageSrc} />
                  </div>
                  <div className="card-desc">
                    <h2 className="card-title">{article.title}</h2>
                    <div className="card-price">{article.price}</div>
                    <div className="card-region-name">{article.region}</div>
                    <div className="card-counts">
                      <span>관심 {article.likes}</span>∙
                      <span>채팅 {article.chatCount}</span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
          <div className="text-center article-list-more">
            <a
              className="text-bold text-black text-m"
              id="hot-articles-more"
              data-url="/hot_articles"
            >
              인기매물 더 보기
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Storeopen;
