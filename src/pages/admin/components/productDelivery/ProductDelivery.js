import styled from 'styled-components';
import { FormDatePicker, FormToggle } from 'components';
import { useEffect, useState } from 'react';

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.mainBgColor};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  margin-bottom: 30px;
`;

const TitleWrapper = styled.div`
  font-size: ${({ theme }) => theme.bigFontSize};
  color: ${({ theme }) => theme.veryBlackText};
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.borderGrayColor};
  padding: 15px 18px;
`;

const DeliverySetting = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr;
  grid-template-rows: 1fr;
`;

const Title = styled.div`
  background-color: ${({ theme }) => theme.lightGrayColor};
  padding: 15px;
  border-right: 1px solid ${({ theme }) => theme.borderGrayColor};
  font-weight: bold;
`;

const DatePickers = styled.div`
  padding: 20px;
`;

export default function ProductDelivery() {
  const [start, setStart] = useState(false);
  const [receipt, setReceipt] = useState(false);
  const [reservation, setReservation] = useState(false);
  const [mileage, setMileage] = useState(true);
  const [card, setCard] = useState(false);

  // 선 주문 예약 배송 토글 버튼 활성화 시
  useEffect(() => {
    if (reservation) {
      setStart(false);
      setReceipt(false);
    }
  }, [reservation]);

  // 사용자 배송일 출발일 지정 및 방문 수령 토글 버튼 활성화 시
  useEffect(() => {
    if (start || receipt) {
      setReservation(false);
    }
  }, [start, receipt]);

  const dateRangePickerAttr = {
    type: 'time',
    title: '주문시간',
    isRange: true,
  };

  const timePickerAttr = {
    type: 'date',
    title: '새벽배송',
  };

  const basicPickerAttr = {
    type: 'date',
    title: '일반 배송',
  };

  return (
    <>
      <Container>
        <TitleWrapper>
          <h1>상품 배송 설정</h1>
        </TitleWrapper>
        <DeliverySetting>
          <Title>
            사용자 배송일 <br />
            출발일 지정
          </Title>
          <FormToggle isClick={start} setIsClick={setStart} />
          <Title>방문 수령</Title>
          <FormToggle isClick={receipt} setIsClick={setReceipt} />
          <Title>
            선 주문 <br />
            예약 배송
          </Title>
          <div>
            <FormToggle isClick={reservation} setIsClick={setReservation} />
            <DatePickers>
              <FormDatePicker attr={dateRangePickerAttr} />
              <br />
              <FormDatePicker attr={timePickerAttr} />
              <FormDatePicker attr={basicPickerAttr} />
            </DatePickers>
          </div>
        </DeliverySetting>
      </Container>
      <Container>
        <TitleWrapper>
          <h1>상품 혜택 허용 설정</h1>
        </TitleWrapper>
        <DeliverySetting>
          <Title>마일리지 적립</Title>
          <FormToggle
            isClick={mileage}
            setIsClick={() => setMileage(!mileage)}
          />
        </DeliverySetting>
      </Container>
      <Container>
        <TitleWrapper>
          <h1>기타 설정</h1>
        </TitleWrapper>
        <DeliverySetting>
          <Title>
            감사카드 <br />
            제공
          </Title>
          <FormToggle isClick={card} setIsClick={() => setCard(!card)} />
        </DeliverySetting>
      </Container>
    </>
  );
}
