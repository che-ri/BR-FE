import React from "react";
import styled from "styled-components";

import { Grid } from "./index";

// 인풋 컴포넌트
/**
 * 
 * @param {*} props 
 * - placeholder 인풋 박스에 미리 넣어줄 텍스트
 * - _onChange 인풋에 들어갈 값(text, file 등)이 변경되면 실행할 함수
 * - type 인풋 박스의 타입 (file, text 등)
 * - value 인풋 박스의 값
 * @returns 
 */
const Input = (props) => {
  const {
    placeholder, _onChange, multiLine, value,
    type,} = props;
    
  if (multiLine) {
    return (
        <ElTextarea type={type} rows={10}
        onChange={_onChange}
        placeholder={placeholder}
        value={value} 
         />
    );    
  }
  return (
          <ElInput type={type} onChange={_onChange} placeholder={placeholder} value={value}  />
  );
};

Input.defaultProps = {
  multiLine: false,
  placeholder:"",
  type: "text",
};

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const ElInput = styled.input`
  border : none;
  border-bottom: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
  
`;

export default Input;
