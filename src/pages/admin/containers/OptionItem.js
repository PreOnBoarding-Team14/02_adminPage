import React, { useState, memo } from 'react';
import { FormSelect } from 'components';
import { MoreOption } from '.';
import ProductOptionStyled from '../components/productOption/ProductOptionStyled';

const {
  DeleteBtn,
  OptionSetItem,
  OptionName,
  PriceInputWrapper,
  PriceInput,
  DeleteBtnWrapper,
  TextUnit,
  PlusOptionButton,
  DiscountPrice,
} = ProductOptionStyled;

const selectAttr = [
  {
    width: '100px',
    height: '30px',
    defaultValue: '비과세',
  },
];

const selectOptionList = [
  {
    value: '비과세',
    name: '비과세',
    disabled: false,
  },
  {
    value: '과세',
    name: '과세',
    disabled: false,
  },
];

function OptionItem({ optionItemId, onDelete }) {
  const [moreOptionArr, setMoreOptionArr] = useState([]);
  const [optionProps, setOptionProps] = useState({
    optionName: '',
    normalPrice: '',
    salesPrice: '',
    stock: 0,
  });

  const getDiscountRate = () => {
    const discountPrice = Math.floor(
      (optionProps.salesPrice / optionProps.normalPrice) * 100
    );
    return discountPrice > 1 ? `(${discountPrice}%)` : '(할인율없음)';
  };

  const onEvent = (e, type, id) => {
    e.preventDefault();
    switch (type) {
      case 'changeOption':
        setOptionProps({ ...optionProps, [e.target.name]: e.target.value });
        break;
      case 'addMoreOption':
        const moreOptionProps = {
          moreOptionItemId: `${optionItemId}_${moreOptionArr.length + 1}`,
          moreOptionArr: [
            {
              moreOptionName: '',
              moreOptionPrice: '',
            },
          ],
        };
        setMoreOptionArr([...moreOptionArr, moreOptionProps]);
        break;
      case 'deleteMoreOption':
        const deleteMoreOptionList = moreOptionArr.reduce((acc, value) => {
          if (value.moreOptionItemId === id) {
            acc.push({
              ...value,
              moreOptionArr: value.moreOptionArr.filter(
                (item) => item.moreOptionItemId !== id
              ),
            });
          } else acc.push(value);
          return acc;
        }, []);
        setMoreOptionArr(deleteMoreOptionList);
        break;
      default:
        break;
    }
  };

  return (
    <OptionSetItem>
      <DeleteBtnWrapper>
        <DeleteBtn onClick={() => onDelete('deleteOptionItem')}>삭제</DeleteBtn>
      </DeleteBtnWrapper>
      <OptionName
        type="text"
        name="optionName"
        placeholder="옵션명을 입력해 주세요. (필수)"
        onChange={(e) => onEvent(e, 'changeOption')}
      />
      <PriceInputWrapper>
        <PriceInput
          type="number"
          name="normalPrice"
          placeholder="상품 정상가 (필수)"
          onChange={(e) => onEvent(e, 'changeOption')}
        />
        <TextUnit>원</TextUnit>
        <DiscountPrice>{getDiscountRate()}</DiscountPrice>
        <PriceInput
          type="number"
          name="salesPrice"
          placeholder="상품 판매가 (필수)"
          onChange={(e) => onEvent(e, 'changeOption')}
        />
        <TextUnit>원</TextUnit>
        <PriceInput type="number" name="stock" placeholder="재고 (필수)" />
        <TextUnit>개</TextUnit>
        <FormSelect attr={selectAttr} option={selectOptionList} />
      </PriceInputWrapper>
      <div>
        {moreOptionArr.map((item) => (
          <MoreOption
            key={item.moreOptionItemId}
            moreOptionItemId={item.moreOptionItemId}
            onEvent={onEvent}
          />
        ))}
      </div>
      <PlusOptionButton onClick={(e) => onEvent(e, 'addMoreOption')}>
        + 추가 옵션 상품 등록
      </PlusOptionButton>
    </OptionSetItem>
  );
}

export default memo(OptionItem);
