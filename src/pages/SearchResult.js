import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { spoon_left, spoon_right } from "../asset/icon";
import Inner from "../components/Inner";
import Text from "../elements/Text";
import IcecreamPost from "../components/IcecreamPost";

const SearchResult = props => {
    const result = useSelector(state => state.search.result);
    return (
        <>
            <Title>
                <img
                    src={require("../asset/title/h_search_result.png").default}
                    alt="제목명"
                />
            </Title>
            <Container>
                <Inner big center padding="50px 0">
                    <Text>
                        검색결과 총{" "}
                        <span style={{ color: "#ff7c98" }}>
                            {result.length}
                        </span>
                        건 검색되었습니다.
                    </Text>
                </Inner>
            </Container>
            <Container>
                <Inner big center>
                    <IcecreamList>
                        {result.map((item, idx) => (
                            <IcecreamPost key={idx} {...item} />
                        ))}
                    </IcecreamList>
                </Inner>
            </Container>
        </>
    );
};

const Title = styled.div`
    width: max-content;
    margin: auto;
    margin-top: 105px;
    margin-bottom: 35px;
    position: relative;

    ::before {
        content: "";
        display: block;
        position: absolute;
        left: -50px;
        top: 6px;
        width: 36px;
        height: 12px;
        background: url(${spoon_left}) no-repeat;
    }
    ::after {
        content: "";
        display: block;
        position: absolute;
        top: 6px;
        right: -50px;
        width: 36px;
        height: 12px;
        background: url(${spoon_right}) no-repeat;
    }
`;

const Container = styled.div`
    width: 100%;
`;

const IcecreamList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: auto;
    border-top: 2px solid #ff7c98;
`;

export default SearchResult;
