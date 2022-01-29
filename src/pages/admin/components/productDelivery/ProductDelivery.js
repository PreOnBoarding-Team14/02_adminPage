import { FormDatePicker, FormToggle } from 'components';
import { useEffect, useState } from 'react';
import ProductDeliveryStyled from './ProductDeliveryStyled';

const {
  Container,
  TitleWrapper,
  DeliverySetting,
  Title,
  DatePickers,
  TitleSpan,
} = ProductDeliveryStyled;

export default function ProductDelivery() {
  const [start, setStart] = useState(false);
  const [receipt, setReceipt] = useState(false);
  const [reservation, setReservation] = useState(false);
  const [mileage, setMileage] = useState(true);
  const [card, setCard] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const onStartChange = (e) => {
    if (!e._d) {
      return;
    }
    setStartDate((old) => {
      const start = e._d;
      const year = start.getFullYear();
      const month = start.getMonth() + 1;
      const day = start.getDate();
      const newDate = `${year}-${month}-${day}`;
      return newDate;
    });
  };

  const onEndChange = (e) => {
    if (!e._d) {
      return;
    }
    setEndDate((old) => {
      const start = e._d;
      const year = start.getFullYear();
      const month = start.getMonth() + 1;
      const day = start.getDate() + 1;
      const newDate = `${year}-${month}-${day}`;
      return newDate;
    });
  };

  useEffect(() => {
    if (reservation) {
      setStart(false);
      setReceipt(false);
    }
  }, [reservation]);

  useEffect(() => {
    if (start || receipt) {
      setReservation(false);
    }
  }, [start, receipt]);

  const dateRangePickerAttr = {
    type: 'time',
    title: '주문시간',
    isRange: true,
    onChange: onStartChange,
    onEndDateChange: onEndChange,
  };

  const timePickerAttr = {
    type: 'date',
    title: '새벽배송',
    start: startDate,
    end: endDate,
  };

  const basicPickerAttr = {
    type: 'date',
    title: '일반 배송',
    start: startDate,
    end: endDate,
  };

  return (
    <>
      <Container>
        <TitleWrapper>
          <h1>상품 배송 설정</h1>
        </TitleWrapper>
        <DeliverySetting>
          <Title>
            <TitleSpan>사용자 배송일</TitleSpan>
            <TitleSpan>출발일 지정</TitleSpan>
          </Title>
          <FormToggle isClick={start} setIsClick={setStart} />
          <Title>방문 수령</Title>
          <FormToggle isClick={receipt} setIsClick={setReceipt} />
          <Title>
            <TitleSpan>선 주문</TitleSpan>
            <TitleSpan>예약 배송</TitleSpan>
          </Title>
          <div>
            <FormToggle isClick={reservation} setIsClick={setReservation} />
            <DatePickers>
              <FormDatePicker attr={dateRangePickerAttr} />
            </DatePickers>
            <DatePickers>
              <FormDatePicker attr={timePickerAttr} />
              <TitleSpan style={{ marginRight: '20px' }} />
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
