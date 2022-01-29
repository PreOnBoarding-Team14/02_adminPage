import React, { memo, useState } from 'react';
import { OptionSet } from '../../containers';
import ProductOptionStyled from './ProductOptionStyled';
import moment from 'moment';

const {
  Container,
  Text,
  TitleBar,
  RequiredStar,
  NullOption,
  OptionSetWrapper,
  OptionSetAddBtn,
} = ProductOptionStyled;

function ProductOption() {
  const [optionSetArr, setOptionSetArr] = useState([]);

  const onDelete = (type, setId, itemId) => {
    switch (type) {
      case 'deleteOptionSet':
        const delOptionSetList = optionSetArr.filter(
          (item) => item.optionSetId !== setId
        );
        setOptionSetArr(delOptionSetList);
        break;
      case 'deleteOptionItem':
        const delOptionItemList = optionSetArr.reduce((acc, value) => {
          if (value.optionSetId === setId) {
            acc.push({
              ...value,
              optionItemArr: value.optionItemArr.filter(
                (item) => item.optionItemId !== itemId
              ),
            });
          } else {
            acc.push(value);
          }
          return acc;
        }, []);
        setOptionSetArr(delOptionItemList);
        break;
      default:
        break;
    }
  };

  const onAdd = (e, type, id) => {
    e.preventDefault();
    switch (type) {
      case 'addOptionSet':
        const optionProps = {
          optionSetId: moment().format('MM-DD'),
          optionItemArr: [
            {
              optionName: '',
              normalPrice: '',
              salesPrice: '',
              stock: 0,
            },
          ],
        };
        setOptionSetArr([...optionSetArr, optionProps]);
        break;
      case 'addOptionItem':
        const optionList = optionSetArr.map((item) => {
          const optionItemProps = {
            optionItemid: `${item.optionSetId}_${
              item.optionItemArr.length + 1
            }`,
            moreOptionArr: [],
          };
          if (item.optionSetId !== id) return item;

          return {
            ...item,
            optionItemArr: [...item.optionItemArr, optionItemProps],
          };
        });
        setOptionSetArr(optionList);
        break;
      default:
        break;
    }
  };

  const getOptionSetItemList = () => {
    return optionSetArr.map((item) => (
      <OptionSet
        key={item.optionSetId}
        optionSetId={item.optionSetId}
        onDelete={onDelete}
        onAdd={onAdd}
        optionItemArr={item.optionItemArr}
      />
    ));
  };

  return (
    <Container>
      <TitleBar>
        <Text>
          상품옵션
          <RequiredStar />
        </Text>
        <OptionSetAddBtn onClick={(e) => onAdd(e, 'addOptionSet')}>
          + 옵션 세트 추가
        </OptionSetAddBtn>
      </TitleBar>
      {optionSetArr.length === 0 ? (
        <NullOption>옵션세트를 추가하여 옵션을 구성해주세요</NullOption>
      ) : (
        <OptionSetWrapper>{getOptionSetItemList()}</OptionSetWrapper>
      )}
    </Container>
  );
}

export default memo(ProductOption);
