import React, { memo } from 'react';
import { OptionItem } from '.';

function OptionSet({ optionSetId, onDelete, onAdd, optionItemArr }) {
  /*
   * 이미지 첨부
   * 삭제
   * 옵션
   * 추가옵션
   */

  return (
    <div>
      {/* 옵션 세트 삭제 버튼 */}
      <button onClick={(e) => onDelete(e, 'deleteOptionSet', optionSetId)}>
        삭제
      </button>
      <div>
        <button>+ 이미지 첨부</button>
        {/* 옵션들 */}
        {optionItemArr.map((item) => (
          <OptionItem
            key={`${optionSetId}_${optionItemArr.length + 1}`}
            optionItemId={`${optionSetId}_${optionItemArr.length + 1}`}
            onDelete={onDelete}
            onAdd={onAdd}
          />
        ))}
      </div>
      <button onClick={(e) => onAdd(e, 'addOptionItem', optionSetId)}>
        + 옵션 추가
      </button>
    </div>
  );
}

export default memo(OptionSet);
