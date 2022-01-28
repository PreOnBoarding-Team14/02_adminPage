import styled from 'styled-components';
import { FormDatePicker, FormToggle } from 'components';
import { useCallback } from 'react';

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
  grid-template-rows: 1fr 1fr;
`;

const Title = styled.div`
  background-color: ${({ theme }) => theme.lightGrayColor};
  padding: 15px;
  border-right: 1px solid ${({ theme }) => theme.borderGrayColor};
  font-weight: bold;
`;

const DeliveryWithDate = styled.div`
  max-width: 500px;
`;

export default function ProductDelivery() {
  const onChange = useCallback(() => console.log('onChange'));

  const dateRangePickerAttr = {
    type: 'time',
    title: '주문시간',
    isRange: true,
    onChange,
  };

  const timePickerAttr = {
    type: 'date',
    title: '새벽배송',
    onChange,
  };

  const basicPickerAttr = {
    type: 'date',
    title: '일반 배송',
    onChange,
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
          <FormToggle attr={{ checked: false }} />
          <Title>방문 수령</Title>
          <FormToggle attr={{ checked: false }} />
          <Title>
            선 주문 <br />
            예약 배송
          </Title>
          <DeliveryWithDate>
            <FormToggle attr={{ checked: true }} />
            <FormDatePicker attr={dateRangePickerAttr} />
            <FormDatePicker attr={timePickerAttr} />
            <FormDatePicker attr={basicPickerAttr} />
          </DeliveryWithDate>
        </DeliverySetting>
      </Container>
      <Container>
        <TitleWrapper>
          <h1>상품 혜택 허용 설정</h1>
        </TitleWrapper>
        <DeliverySetting>
          <Title>마일리지 적립</Title>
          <FormToggle attr={{ checked: true }} />
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
          <FormToggle attr={{ checked: true }} />
        </DeliverySetting>
      </Container>
    </>
  );
}
