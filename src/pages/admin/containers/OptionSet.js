import React from 'react';
import { AddOption } from '.';

export default function OptionSet({ attr }) {
  const { idx, onClick, optionsNum, optionAttr } = attr;
  /*
   * 이미지 첨부
   * 삭제
   * 옵션
   * 추가옵션
   */

  const selectAttr = [
    {
      width: '100px',
      height: '30px',
    },
  ];

  const selectOptionList = [
    {
      value: '비과세',
      name: '비과세',
      selected: true,
      disabled: false,
    },
    {
      value: '과세',
      name: '과세',
      selected: true,
      disabled: false,
    },
  ];

  // 추가 옵션 상품 등록
  const addOptionProduct = () => {
    return (
      <div>
        {/* ㄴ 자 모양..? */}
        <input type="text" placeholder="추가 옵션명" />
        <input type="text" placeholder="추가 옵션 정상가">
          원
        </input>
        <button onClick={(e) => onClick(e, 'addProductOption')}>삭제</button>
      </div>
    );
  };

  const getOptionItem = (num) => {
    // 삭제버튼
    // 이미지 + 옵션
    console.log('옵션 추가');
    return num.map((item) => <AddOption idx={item} attr={optionAttr} />);
  };

  // const addOptions = () => {
  //   return (
  //     <div>
  //       <button>삭제</button>
  //       <input
  //         type="text"
  //         placeholder="옵션명을 입력해 주세요. (필수)"
  //         onChange={(e) => onInputChange(e, 'optionName')}
  //       />
  //       <div>
  //         <input
  //           type="text"
  //           placeholder="상품 정상가 (필수)"
  //           onChange={(e) => onInputChange(e, 'normalPrice')}
  //         >
  //           원
  //         </input>
  //         {getDiscountRate}
  //         <input
  //           type="text"
  //           placeholder="상품 판매가 (필수)"
  //           onChange={(e) => onInputChange(e, 'salesPrice')}
  //         >
  //           원
  //         </input>
  //         <input type="text" placeholder="재고 (필수)">
  //           개
  //         </input>
  //         <FormSelect attr={selectAttr} option={selectOptionList} />
  //       </div>
  //       <button onClick={addOptionProduct}>+ 추가 옵션 상품 등록</button>
  //     </div>
  //   );
  // };

  return (
    <div>
      <button>삭제</button> {/* 옵션 세트 삭제 버튼 */}
      <div>
        <button>+ 이미지 첨부</button>
        {/* 옵션들 */}
        {getOptionItem(optionsNum)}
      </div>
      <button name={idx} onClick={(e) => onClick(e, 'addOption')}>
        + 옵션 추가
      </button>
    </div>
  );
}
