import React from "react";
import styled from "styled-components";

// 버튼 컴포넌트
/**
 *
 * @param {*} props
 * - _onClick : 버튼 클릭 시 실행할 함수
 * - children : 열림 태그와 닫힘 태그 사이에 들어가는 자식 노드 / ex) <>여기에 들어가는 게 자식 노드!</>
 * - margin : margin 값 (px 등 단위를 포함한 string)
 * - width : width 값 (px 등 단위를 포함한 string)
 * - padding : padding 값 (px 등 단위를 포함한 string)
 * - bg : background-color 값 (#000000 같은 컬러 string)
 * - color : font color 값 (#000000 같은 컬러 string)
 * - shape circle 모양인지 oval 모양인지 구분
 * @returns
 */

const Button = props => {
    const {
        _onClick,
        children,
        margin,
        width,
        height,
        padding,
        shape,
        bg,
        color,
        radius,
        hoverBg,
    } = props; //shape- circle or oval

    const styles = {
        margin: margin,
        width: width,
        height: height,
        padding: padding,
        color: color,
        bg: bg,
        hoverBg,
        radius: radius,
    };
    if (shape === "circle") {
        return (
            <React.Fragment>
                <ButtonCircle {...styles} onClick={_onClick}>
                    {children}
                </ButtonCircle>
            </React.Fragment>
        );
    }

    if (shape === "oval") {
        return (
            <React.Fragment>
                <ButtonOval {...styles} onClick={_onClick}>
                    {children}
                </ButtonOval>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <ButtonOval {...styles} onClick={_onClick}>
                {children}
            </ButtonOval>
        </React.Fragment>
    );
};
Button.defaultProps = {
    children: null,
    _onClick: () => {},
    is_float: false,
    margin: false,
    width: "100%",
    padding: "10px 0px",
    hoverBg: false,
    is_login: true,
};

const ButtonCircle = styled.button`
    width: 45px;
    height: 45px;
    border-radius: 50px;
    background-color: ${props => props.bg};
    color: ${props => props.color};
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 0.3px solid #d3c1ab;
    ${props =>
        props.bg
            ? `background-color: ${props.bg};`
            : "background-color: #fff "};
    :hover {
        ${props => (props.hoverBg ? `background:${props.hoverBg};` : "")};
    }
`;

//default Button
const ButtonOval = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    ${props =>
        props.bg
            ? `background-color: ${props.bg};`
            : "background-color: #ff7c98"};
    color: #fff;
    padding: ${props => props.padding};
    ${props =>
        props.radius
            ? `border-radius: ${props.radius};`
            : "border-radius: 20px"};
    box-sizing: border-box;
    border: none;
    ${props => (props.margin ? `margin: ${props.margin};` : "")}
    cursor: pointer;
    :hover {
        ${props => (props.hoverBg ? `background:${props.hoverBg};` : "")};
    }
`;
export default Button;
