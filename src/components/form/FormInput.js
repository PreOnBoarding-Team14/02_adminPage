import styled from 'styled-components';

export default function FormInput({ attr }) {
  return (
    <>
      <label>
        {attr.title}
        {attr.required ? <span color="red">*</span> : null}
      </label>
      <input
        type="text"
        minLength={attr.minLength}
        maxLength={attr.maxLength}
      />
    </>
  );
}
