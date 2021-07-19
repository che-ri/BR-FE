import React, { useState } from "react";
import { Grid, Button } from "../elements";

import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addReviewDB } from "../redux/modules/review";

import { spoon_left, spoon_right } from "../asset/icon";
import Modal from "./ReviewWrite.js";

const Review = props => {
    const [modalOpen, setModalOpen] = useState(false);

    const movePage = () => {
        console.log("n번째 페이지로 이동");
    };
    const moveFourPagesNext = () => {
        console.log("n+4번째 페이지로 이동");
    };
    const moveFourPagesPrev = () => {
        console.log("n-4번째 페이지로 이동");
    };

    const review_list = [
        { idx: 1, title: "title1", date: "date1" },
        { idx: 2, title: "title2", date: "date2" },
    ];

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <Grid width="900px" margin="0px auto">
                <Title>
                    <img
                        src={require("../asset/title/h_notice.png").default}
                        alt="제목명"
                    />
                </Title>
                <Grid width="100%">
                    <BntBox>
                        <Button
                            _onClick={() => {
                                openModal();
                            }}
                            width="115px"
                            height="34px"
                            bg="#d3c1ab"
                            radius="3px"
                        >
                            글쓰기
                        </Button>
                    </BntBox>
                </Grid>
                {/* <Grid is_flex>
                    <Grid>
                        <p>
                            총 <span color="#ff7c98">{props.postCnt} 53</span>
                            건이 검색되었습니다.
                        </p>
                    </Grid>
                    <Grid is_flex>
                        <Select name="search">
                            <option value="전체" selected>
                                전체
                            </option>
                            <option value="제목">제목</option>
                            <option value="내용">내용</option>
                        </Select>
                        <Input />
                        <Button
                            width="115px"
                            height="34px"
                            bg="#d3c1ab"
                            radius="3px"
                            margin="0 0 0 3px"
                        >
                            검색
                        </Button>
                    </Grid>
                </Grid> */}

                <Grid>
                    <Line />

                    {review_list.map((p, idx) => {
                        return (
                            <>
                                <Grid is flex margin="0 auto">
                                    <TR>
                                        <TD
                                            width="72px"
                                            height="75px"
                                            margin="10px 20px"
                                        >
                                            {idx}
                                        </TD>
                                        <TD width="85%" height="75px">
                                            {p.title}
                                        </TD>
                                        <TD
                                            width="91px"
                                            height="75px"
                                            margin="5px"
                                        >
                                            {p.date}
                                        </TD>
                                    </TR>
                                </Grid>

                                {/*</Grid>*/}
                            </>
                        );
                    })}

                    <Modal
                        open={modalOpen}
                        close={closeModal}
                        header="리뷰 작성하기"
                    >
                        {/* ReviewWrite.js <main></main>에 내용이 출력된다.*/}
                    </Modal>
                </Grid>
            </Grid>
        </>
    );
};
export default Review;

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

const Line = styled.hr`
    border: 0.5px solid #ff7c98;
    text-align: center;
    width: 100%;
    margin: 0;
    background-color: #ff7c98;
`;
const Select = styled.select`
    background: #fff;
    border: 1px solid #d1cecc;
    padding: 8px 1px 8px 10px;
    border-radius: 4px;
    width: 128px;
    color: #636363;
    margin-right: 5px;
    box-shadow: 0 0 5px 0;
    height: 34px;
`;

const Input = styled.input`
    width: 236px;
    height: 34px;
    padding: 8px 1px 8px 10px;
    border: 0;
    background: #efefef;
    font-size: 13px;
    line-height: 16px;
    box-sizing: border-box;
`;

const TR = styled.tr`
    border-bottom: 1px solid #dadada;
    text-align: center;
    color: #2f231c;
    font-size: 13px;
    margin-top: 10px;
`;

const TD = styled.td`
    border-bottom: 1px solid #dadada;
    text-align: center;
    color: #2f231c;
    font-size: 13px;
    padding: 20px 0 0 0;
`;

const ArrowButton = styled.div`
    width: 45px;
    height: 45px;
    display: flex;
    background: url(${props => props.icon_url});
    background-size: cover;
    cursor: pointer;
`;

const BntBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 5px;
    button:hover {
        background: #ff7c98;
    }
`;
