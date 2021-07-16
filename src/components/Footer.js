import IteratorComplete from "es-abstract/2015/IteratorComplete";
import React from "react";
import styled from "styled-components";
import Inner from "../components/Inner";

const Footer = () => {
    return (
        <>
            <Container
                style={{
                    borderTop: "1px solid #FEAF2B",
                    margin: "100px 0 0 0",
                }}
            >
                <Inner big>
                    <Items>
                        <Item>
                            <a
                                href="http://www.baskinrobbins.co.kr/about/br_system.php"
                                target="_blank"
                            >
                                점포개설문의
                            </a>
                        </Item>
                        <Item>
                            <a
                                href="http://www.baskinrobbins.co.kr/about/jobs.php"
                                target="_blank"
                            >
                                채용문의
                            </a>
                        </Item>
                        <Item>
                            <a
                                href="http://www.spc.co.kr/spc/group/GEM_info.spc"
                                target="_blank"
                            >
                                윤리신고센터
                            </a>
                        </Item>
                        <Item>
                            <a
                                href="https://www.happypointcard.com/page/customer/term.spc"
                                target="_blank"
                            >
                                이용약관
                            </a>
                        </Item>
                        <Item>
                            <a
                                href="http://www.baskinrobbins.co.kr/customer/policy.php"
                                target="_blank"
                                style={{ color: "#ff7c98" }}
                            >
                                개인정보처리방침
                            </a>
                        </Item>
                        <Item>
                            <a
                                href="http://www.baskinrobbins.co.kr/customer/policy_cctv.php"
                                target="_blank"
                            >
                                영상정보처리기기운영관리방침
                            </a>
                        </Item>
                        <Item>
                            <a
                                href="http://happy.spc.co.kr/indexframe.jsp"
                                target="_blank"
                            >
                                거래희망회사 사전등록
                            </a>
                        </Item>
                    </Items>
                </Inner>
            </Container>
            <Container
                style={{
                    background: "#F9F8F7",
                }}
            >
                <Inner big>
                    <Items>
                        <Item>
                            <img
                                src={
                                    require("../asset/footer/btn_happypoint.png")
                                        .default
                                }
                            />
                        </Item>
                        <Item>
                            <img
                                src={
                                    require("../asset/footer/btn_happymarket.png")
                                        .default
                                }
                            />
                        </Item>
                        <Item>
                            <img
                                src={
                                    require("../asset/footer/btn_spc_story.png")
                                        .default
                                }
                            />
                        </Item>
                        <Item>
                            <img
                                src={
                                    require("../asset/footer/btn_norton.gif")
                                        .default
                                }
                            />
                        </Item>
                        <Item>
                            <img
                                src={
                                    require("../asset/footer/btn_ccm.gif")
                                        .default
                                }
                            />
                        </Item>
                        <Item>
                            <img
                                src={
                                    require("../asset/footer/btn_ksa.png")
                                        .default
                                }
                            />
                        </Item>
                        <Item>
                            <Select name="FAMILY SITE">
                                <Option value="">--FAMILY SITE--</Option>
                                <Option>배스킨 스쿨</Option>
                                <Option>SPC그룹사이트</Option>
                                <Option>SPCMAGAZINE</Option>
                                <Option>BR코리아</Option>
                                <Option>해피포인트카드</Option>
                                <Option>파스쿠찌</Option>
                                <Option>삼립</Option>
                                <Option>파리바게트</Option>
                                <Option>던킨도너츠</Option>
                            </Select>
                        </Item>
                    </Items>
                </Inner>
            </Container>
            <Container>
                <Inner big>
                    <Center>
                        <img
                            src={
                                require("../asset/footer/footer_logo.png")
                                    .default
                            }
                        />
                    </Center>
                </Inner>
            </Container>
            <Container style={{ margin: "0 0 50px 0" }}>
                <Inner big>
                    <Column>
                        <Desc>
                            <Center>
                                <span>사업자 등록번호: 303-81-09535</span>
                                <span>비알코리아(주)대표이사 도세호</span>
                                <span>
                                    서울특별시 서초구 남부순환로 2620(양재동
                                    11-149번지)
                                </span>
                            </Center>
                        </Desc>
                        <Desc>
                            <Center>
                                <span>TEL : 080-555-3131</span>
                                <span>개인정보관리책임자 : 김경우</span>
                            </Center>
                        </Desc>
                        <Desc>
                            <Center>
                                <span>
                                    Copyright ⓒ 2016 BRKOREA Company. All Rights
                                    Reserved.
                                </span>
                            </Center>
                        </Desc>
                    </Column>
                </Inner>
            </Container>
        </>
    );
};

const Container = styled.div`
    width: 100%;
    &:not(:last-child) {
        padding: 20px 0;
    }
`;

const Items = styled.ul`
    display: flex;
    justify-content: center;
`;

const Item = styled.li`
    margin: 0 20px;
`;

const Select = styled.select`
    color: #726454;
`;

const Option = styled.option`
    color: #726454;
`;

const Desc = styled.div`
    font-size: 7px;
    width: 100%;
    span {
        margin: 2px 7px;
        color: #726454;
        letter-spacing: 0.01;
    }
    :last-child {
        margin: 6px 10px;
        span {
            color: #cdcdcd;
        }
    }
`;

const Center = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Column = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export default Footer;
