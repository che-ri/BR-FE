import React from "react";
import styled from "styled-components";

const Inner = ({ children, big, small, isFlex }) => {
    if (big)
        return (
            <Container big isFlex>
                {children}
            </Container>
        );
    if (small)
        return (
            <Container small isFlex>
                {children}
            </Container>
        );
    return <Container isFlex>{children}</Container>;
};

Inner.defaultProps = {
    children: null,
    size: "100%",
    big: false,
    small: false,
    isFlex: false,
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
`;

export default Inner;
