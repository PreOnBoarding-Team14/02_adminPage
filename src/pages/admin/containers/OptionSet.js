import React, { memo } from 'react';
import { FormImagePreview } from '../../../components';
import { OptionItem } from '.';
import ProductOptionStyled from '../components/productOption/ProductOptionStyled';
import moment from 'moment';

const { OptionSetAddBtn, DeleteBtn, DeleteBtnWrapper } = ProductOptionStyled;

function OptionSet({ optionSetId, onDelete, onAdd, optionItemArr }) {
  return (
    <>
      <DeleteBtnWrapper>
        <DeleteBtn onClick={() => onDelete('deleteOptionSet', optionSetId)}>
          삭제
        </DeleteBtn>
      </DeleteBtnWrapper>

      <FormImagePreview />
      {optionItemArr.map((item) => (
        <OptionItem
          key={`${optionSetId}_${optionItemArr.length + 1}`}
          optionItemId={`${optionSetId}_${moment().format('HH:mm:ss')}`}
          onDelete={onDelete}
          onAdd={onAdd}
        />
      ))}
      <OptionSetAddBtn onClick={(e) => onAdd(e, 'addOptionItem', optionSetId)}>
        + 옵션 추가
      </OptionSetAddBtn>
    </>
  );
}

export default memo(OptionSet);
