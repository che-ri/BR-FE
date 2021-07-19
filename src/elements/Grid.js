import React from "react";
import styled from "styled-components";

// 그리드 컴포넌트
/**
 *
 * @param {*} props
 * - _onClick : 버튼 클릭 시 실행할 함수
 * - is_flex : 플로팅 버튼인지 아닌 지 여부 boolean
 * - children : 열림 태그와 닫힘 태그 사이에 들어가는 자식 노드 / ex) <>여기에 들어가는 게 자식 노드!</>
 * - margin : margin 값 (px 등 단위를 포함한 string)
 * - width : width 값 (px 등 단위를 포함한 string)
 * - padding : padding 값 (px 등 단위를 포함한 string)
 * - bg : 배경 색상 코드 (# 포함한 string)
 * - center : 텍스트 정렬을 가운데로 할지 말지 boolean
 * @returns
 */
const Grid = (props) => {
  const {
    is_flex,
    width, height,
    margin,
    padding,
    bg,
    children,
    center,
    _onClick,
  } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
  };

  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: "100%",
  height: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  _onClick: () => {},
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
  ${(props) => (props.center ? `text-align: center;` : "")}
`;

export default Grid;
