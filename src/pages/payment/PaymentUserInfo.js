const PaymentUserInfo = ({
  userAddressInputValue,
  setUserAddressInputValue,
}) => {
  return (
    <div className="paymentUserInfo">
      <div className="userWrap">
        <div className="userInfo">
          <sapn className="userName">김찰스</sapn>
          <span className="userPhone">01012345678</span>
          <p className="userAddress">{userAddressInputValue}</p>
        </div>
        <div className="modifyButtonWrap">
          <span className="modifyButton">수정</span>
        </div>
      </div>
      <div className="paymentMethod">
        <div className="methodTitle">
          <h1>결제수단을 선택해주세요.</h1>
        </div>
        <form className="methodForm">
          <button className="methodButton point">포인트로 결제</button>
        </form>
        <form className="payForm">
          <button
            className="payButton"
            onClick={() => {
              fetch('결제api', {
                method: 'post',
                headers: {
                  Authorization:
                    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
                },
                body: JSON.stringify({
                  address: '',
                }),
              })
                .then(res => res.json())
                .then(data => setUserAddressInputValue(data));
            }}
          >
            결제하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentUserInfo;
