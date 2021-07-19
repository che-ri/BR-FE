import React from "react";
import styled from "styled-components";

const Loader = () => {
    return (
        <>
            <Container>
                <span>로딩중입니다! 조금만 기다려주세요 :-)</span>
            </Container>
        </>
    );
};

const Container = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
`;

export default Loader;
