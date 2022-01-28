import React from 'react';
import { AddOption } from '.';

export default function OptionSet({ attr }) {
  const { optionSetIdx, onClick, onInputChange, optionArr } = attr;
  /*
   * 이미지 첨부
   * 삭제
   * 옵션
   * 추가옵션
   */
  // 추가 옵션 상품 등록
  const addOptionProduct = () => {
    return (
      <div>
        {/* ㄴ 자 모양..? */}
        <input type="text" placeholder="추가 옵션명" />
        <input type="text" placeholder="추가 옵션 정상가" />
        <span>원</span>
        <button onClick={(e) => onClick(e, 'addProductOption')}>삭제</button>
      </div>
    );
  };

  const optionItemAttr = {
    optionArr,
    onInputChange,
    onClick,
    optionSetIdx,
  };

  const getOptionItem = (listArr) =>
    listArr.map((item, index) => (
      <AddOption key={index} attr={optionItemAttr} />
    ));

  return (
    <div>
      <button>삭제</button> {/* 옵션 세트 삭제 버튼 */}
      <div>
        <button>+ 이미지 첨부</button>
        {/* 옵션들 */}
        {getOptionItem(optionArr)}
      </div>
      <button name={optionSetIdx} onClick={(e) => onClick(e, 'addOption')}>
        + 옵션 추가
      </button>
    </div>
  );
}
