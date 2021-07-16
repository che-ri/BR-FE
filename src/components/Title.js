import React from "react";
import styled from "styled-components";

const Title = ({ children }) => {
    return <StyledTitle>{children}</StyledTitle>;
};

const StyledTitle = styled.h3`
    text-align: center;
    font-size: 16px;
    font-weight: 900;
    width: 100%;
    margin: 70px 0;
`;

export default Title;
