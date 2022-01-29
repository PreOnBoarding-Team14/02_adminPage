import React, { useState } from 'react';

export default function MoreOption({ onEvent, moreOptionItemId }) {
  const [moreOptionProps, setMoreOptionProps] = useState({
    moreOptionName: '',
    moreOptionPrice: '',
  });

  const onChange = (e) => {
    e.preventDefault();
    setMoreOptionProps({ ...moreOptionProps, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* ㄴ 자 모양..? */}
      <input
        type="text"
        name="moreOptionName"
        onChange={onChange}
        placeholder="추가 옵션명 (필수)"
      />
      <input
        type="text"
        name="moreOptionPrice"
        onChange={onChange}
        placeholder="추가 옵션 정상가 (필수)"
      />
      <span>원</span>
      <button onClick={(e) => onEvent(e, 'deleteMoreOption', moreOptionItemId)}>
        삭제
      </button>
    </div>
  );
}
