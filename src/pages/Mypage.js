import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { spoon_left, spoon_right } from "../asset/icon";
import Text from "../elements/Text";
import Inner from "../components/Inner";

const Mypage = () => {
    const user = useSelector(state => state.user.user_info);
    return (
        <>
            <Container>
                <Inner big>
                    <Title>
                        <img
                            src={require("../asset/title/h_mybr.png").default}
                            alt="제목명"
                        />
                    </Title>
                    <Subtitle>
                        <Text>회원님을 위한 배스킨라빈스의 다양한 정보</Text>
                    </Subtitle>
                </Inner>
            </Container>
            <Container>
                <Inner big>
                    <ContentContainer>
                        <ContentBox>
                            <TopBox>
                                <PointTitle
                                    src={
                                        require("../asset/mypage/h_happypoint.png")
                                            .default
                                    }
                                    alt="My happy point"
                                />
                                <img
                                    src={
                                        require("../asset/mypage/img_happypoint_card.png")
                                            .default
                                    }
                                    alt="happypoint card"
                                />
                                <Text
                                    size="30px"
                                    color="#a5a5a5"
                                    margin="0 0 0 30px"
                                >
                                    안녕하세요{" "}
                                    <span style={{ color: "#2f231c" }}>
                                        {user.nickname}
                                    </span>
                                    님!
                                </Text>
                            </TopBox>
                            <BottomBox>
                                <BottomLeft>
                                    <div>
                                        <img
                                            src={
                                                require("../asset/mypage/icon_happypoint.png")
                                                    .default
                                            }
                                            alt="icon"
                                        />
                                        <Text size="17px" margin="0 0 0 10px">
                                            해피포인트는 어떻게 발급 받나요?
                                        </Text>
                                    </div>
                                    <div>
                                        <Text color="#948780">
                                            파리크라상,파리바게뜨, 배스킨라빈스,
                                            던킨도너츠, 파스쿠찌, 빚은등 전국
                                            6천여개의 해피포인트 가맹점에서
                                            1,000원 이상 구매 후 요청 시 즉시
                                            발급해 드립니다.
                                        </Text>
                                    </div>
                                    <div>
                                        <a
                                            href="http://www.happypointcard.com/myPage/myCard/regNewCard.spc"
                                            target="_blank"
                                        >
                                            해피포인트 카드 등록
                                        </a>
                                        <a
                                            href="https://www.happypointcard.com/myPage/myPoint/saveUse.spc"
                                            target="_blank"
                                        >
                                            해피포인트 상세내역 확인
                                        </a>
                                    </div>
                                </BottomLeft>
                                <BottomRight>
                                    <span>사용가능 총 포인트</span>
                                    <span>0 P</span>
                                </BottomRight>
                            </BottomBox>
                        </ContentBox>
                    </ContentContainer>
                </Inner>
            </Container>
        </>
    );
};

const Container = styled.div`
    width: 100%;
`;

const Title = styled.div`
    width: max-content;
    margin: 105px auto 5px auto;
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

const Subtitle = styled.div`
    width: max-content;
    margin: 0 auto 100px auto;
`;

const ContentContainer = styled.div`
    border-top: 2px solid #ff7c98;
    padding-top: 100px;
`;

const ContentBox = styled.div`
    border: 1px solid #c6bfb3;
    border-radius: 5px;
`;

const TopBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #c6bfb3;
    padding: 30px 0;
`;

const PointTitle = styled.img`
    position: absolute;
    top: -20px;
`;

const BottomBox = styled.div`
    padding: 30px;
    display: flex;
    justify-content: space-between;
`;

const BottomLeft = styled.div`
    width: 50%;
    div:not(:last-child) {
        margin-bottom: 20px;
    }
    div:first-child {
        display: flex;
    }
    div:nth-child(2) {
        width: 80%;
    }
    img {
        display: block;
    }
    a {
        background: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid #e0d6d1;
        word-spacing: -2px;
        letter-spacing: -1px;
        :first-child {
            color: #ff7c98;
            border: 1px solid #ff7c98;
            margin-right: 5px;
        }
    }
`;
const BottomRight = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    span:first-child {
        color: #aca09a;
        font-size: 20px;
    }
    span:last-child {
        color: #ff8400;
        font-size: 33px;
        line-height: 1;
        font-weight: 700;
    }
`;

export default Mypage;
