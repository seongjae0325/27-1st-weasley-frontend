import React from 'react';
import { Link } from 'react-router-dom';

import './ProductTop.scss';

const ProductDetailTop = ({ detail, count, countUpEvent, countDownEvent }) => {
  console.log(detail.RESULT.name);
  console.log(detail[0]);
  console.log(detail.RESULT.category_price);
  return (
    <>
      <section className="productDetailTop">
        <div className="productDetailImage">
          <img src={detail.RESULT.thumb} alt="cleanser" />
        </div>
        <div className="productDetailInfo">
          <div className="productInfoHeader">
            <span className="productTitleName">{detail.RESULT.name}</span>
            <span className="productInfoOptions">
              <Link to="#">타입변경</Link>
            </span>
          </div>
          <div className="productInfoBottom">
            <span className="reviewAverageView">
              <span className="reviewAverageViewCount">별그림</span>
              <span className="reviewAverageViewScore">4.4점</span>
            </span>
            <span className="capacity">180mL (8주 사용 분량)</span>
            <div className="countUp">
              <span>
                <input
                  type="button"
                  disabled={count === 1 ? true : false}
                  onClick={countDownEvent}
                  value="-"
                />
              </span>
              <span className="productCount">{count}</span>
              <span>
                <input type="button" onClick={countUpEvent} value="+" />
              </span>
            </div>
          </div>
          <form className="buttonAction">
            <button type="button" className="buyButton">
              구독하기
            </button>
            <button
              type="button"
              className="buyButton"
              onClick={() => {
                fetch('결제API', {
                  headers: {
                    Authorization:
                      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
                  },
                  method: 'POST',
                  body: JSON.stringify({ product_id: 1, amount: 99 }),
                })
                  .then(function (res) {
                    return res.json();
                  })
                  .then(data => {
                    console.log(data.MESSAGE);
                  })
                  .catch(error => {
                    console.log(error);
                  });
              }}
            >
              구매하기
            </button>
          </form>
          <div className="priceTab">
            <span className="productPrice">{detail.RESULT.category_price}</span>
            <span>원</span>
          </div>
        </div>
      </section>
      <section className="productDetailMain">
        <div className="productDetailTitle">
          <h1 className="productDetailTitleContents">
            우리는 이런 변화가 더 건강한 피부를
            <br />
            만드는 길이라고 믿습니다. 그러한 믿음으로,
            <br /> 제품의 효능부터 사용감, 안전성까지
            <br /> 신경써서 만들었습니다.
          </h1>
        </div>
        <div className="slideBanner">
          <div className="leftWrap">
            <p className="leftTag">사용감</p>
            <p className="leftTitle">
              미끌거리지 않는
              <br /> 부드러운 거품,
              <br /> 세안 후 당기지 않는 촉촉함
            </p>
          </div>
          <div className="slideImage">
            <img
              src="images/productdetail/cleanser_sensitive_1.47732c05.png"
              alt="slide1"
            />
          </div>
        </div>
        <div className="costInfographic">
          <div className="productDetailTitle">
            <h1 className="productDetailTitleContents">
              제품에 들어가는 비용을
              <br />
              투명하게 공개합니다.
            </h1>
          </div>
          <div className="costInfo">
            <span>
              <p>제조비</p>
              <p>3,001원</p>
            </span>
            <span>
              <p>제조비</p>
              <p>3,001원</p>
            </span>
            <span>
              <p>제조비</p>
              <p>3,001원</p>
            </span>
            <span>
              <p>제조비</p>
              <p>3,001원</p>
            </span>
          </div>
          <div className="resultWrap">
            <div className="circle">오픈워크7600원</div>
            <div className="circle">시중주요브랜드25000원</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailTop;
