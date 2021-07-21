import React from "react";
import styled from "styled-components";

const Inner = ({ children, big, small, isFlex, padding, center }) => {
    const styles = { isFlex, padding, center };
    if (big)
        return (
            <Container big {...styles}>
                {children}
            </Container>
        );
    if (small)
        return (
            <Container small {...styles}>
                {children}
            </Container>
        );
    return <Container {...styles}>{children}</Container>;
};

Inner.defaultProps = {
    children: null,
    size: "100%",
    big: false,
    small: false,
    isFlex: false,
    padding: false,
    center: false,
};

const Container = styled.div`
    height: 100%;
    ${props =>
        props.big
            ? `width:916px;`
            : props.small
            ? `width:1200px;`
            : `width:100%;`}
    margin: auto;
    ${props =>
        props.isFlex
            ? `display:flex; justify-content:space-between; align-items:center;`
            : ""}
    ${props =>
        props.center
            ? `display:flex; justify-content:center; align-items:center;`
            : ""}   
    ${props => (props.padding ? `padding:${props.padding}` : "")}
`;

export default Inner;
