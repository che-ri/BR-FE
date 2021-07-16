import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";

import Inner from "../components/Inner";

import main_banner1 from "../asset/mainBanner/1620351475.png";
import main_banner2 from "../asset/mainBanner/1620379522.jpg";
import main_banner3 from "../asset/mainBanner/1630631572.jpg";
import main_banner4 from "../asset/mainBanner/1638847240.png";

const Home = () => {
    return (
        <>
            <Img src={require("../asset/mainBanner/top_bnr.jpg").default} />
            <Container>
                <Inner style={{ position: "relative" }}>
                    <Slider
                        show={1}
                        items={[
                            { url: main_banner1 },
                            { url: main_banner2 },
                            { url: main_banner3 },
                            { url: main_banner4 },
                        ]}
                    />
                </Inner>
            </Container>
            <Title>
                <img
                    src={require("../asset/title/h_event.png").default}
                    alt="BR EVENT"
                />
            </Title>
            <Container style={{ marginBottom: "100px" }}>
                <Inner big>
                    <Slider
                        show={3}
                        items={[
                            {
                                url: require("../asset/mainBanner/br_event1.png")
                                    .default,
                                title: "해피오더 딜리버리로 간편하게 주문하세요!",
                                process: "상시진행",
                                event: "store",
                            },
                            {
                                url: require("../asset/mainBanner/br_event2.png")
                                    .default,
                                title: "배달의 민족에서 빠르게 주문하세요!",
                                process: "상시진행",
                                event: "store",
                            },
                            {
                                url: require("../asset/mainBanner/br_event3.png")
                                    .default,
                                title: "요기요에서 손쉽게 주문하세요!",
                                process: "상시진행",
                                event: "store",
                            },
                            {
                                url: require("../asset/mainBanner/br_event4.png")
                                    .default,
                                title: "카카오톡 주문하기에서 편리하게 주문하세요!",
                                process: "상시진행",
                                event: "store",
                            },
                            {
                                url: require("../asset/mainBanner/br_event5.jpg")
                                    .default,
                                title: "KT 멤버십 고객이라면 누구나 파인트 30% 할인!",
                                process: "",
                                event: "store",
                            },
                            {
                                url: require("../asset/mainBanner/br_event6.png")
                                    .default,
                                title: "제휴 할인 카드 혜택 안내",
                                process: "상시진행",
                                event: "store",
                            },
                            {
                                url: require("../asset/mainBanner/br_event7.png")
                                    .default,
                                title: "2018 한글날 기념 무료 글꼴 공개! 베스킨라빈스체",
                                process: "상시진행",
                                event: "online",
                            },
                            {
                                url: require("../asset/mainBanner/br_event8.png")
                                    .default,
                                title: "1회용 컵 사용 줄이기 안내",
                                process: "상시진행",
                                event: "store",
                            },
                            {
                                url: require("../asset/mainBanner/br_event9.jpg")
                                    .default,
                                title: "2021년 1분기 고객BEST 칭찬점포 안내",
                                process: "",
                                event: "store",
                            },
                        ]}
                    />
                </Inner>
            </Container>
            <Container>
                <Inner>
                    <Link to="/menu/main">
                        <BRMenu
                            src={
                                require("../asset/mainBanner/br_menu.png")
                                    .default
                            }
                            alt="BR MENU"
                        />
                    </Link>
                </Inner>
            </Container>
            <Container>
                <Inner big>
                    <Center>
                        <div>
                            <Title>
                                <img
                                    src={
                                        require("../asset/title/h_store.png")
                                            .default
                                    }
                                    alt="BR EVENT"
                                />
                            </Title>
                            <Link to="/">
                                <Store
                                    src={
                                        require("../asset/mainBanner/img_store.jpg")
                                            .default
                                    }
                                    alt="BR MENU"
                                />
                            </Link>
                        </div>
                        <div>
                            <Title>
                                <img
                                    src={
                                        require("../asset/title/h_happyorder_delivery.png")
                                            .default
                                    }
                                    alt="BR EVENT"
                                />
                            </Title>
                            <Link to="/">
                                <Delivery
                                    src={
                                        require("../asset/mainBanner/img_happyorder_delivery.png")
                                            .default
                                    }
                                    alt="BR MENU"
                                />
                            </Link>
                        </div>
                    </Center>
                </Inner>
            </Container>
        </>
    );
};

const Container = styled.div`
    height: max-content;
    width: 100%;
`;

const Img = styled.img`
    width: 100%;
`;

const BRMenu = styled.img`
    width: 100%;
`;

const Title = styled.div`
    margin: 70px auto;
    width: 100%;
    text-align: center;
    /* text-align: center; */
`;

const Store = styled.img`
    width: 100%;
`;
const Delivery = styled.img`
    width: 100%;
`;

const Center = styled.div`
    display: flex;
`;

export default Home;
