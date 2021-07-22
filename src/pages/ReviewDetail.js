import React, { useEffect, useState } from "react";
import { Grid, Text, Button } from "../elements";
import "../asset/css/modal.css";

import ModalWrite from "./ReviewWrite.js";

import { getReviewDetail } from "../shared/api";
import axios from "axios";
import Cookies from "js-cookie";

const url = "https://bestclone.herokuapp.com";
const api = axios.create({
    baseURL: url,
    headers: {
        authorization: Cookies.get("token"),
    },
});

const ReviewDetail = props => {
    const { open, close, header, reviewId, userConfirm } = props;

    const [modalWriteOpen, setModalWriteOpen] = useState(false);

    const [Id, setId] = useState(0);
    const [list, setList] = useState({});

    async function getList() {
        openWriteModal(reviewId);
    }

    useEffect(async () => {
        const list = await getReviewDetail(reviewId);
        setList(list);

        localStorage.setItem("title", list?.data?.data?.title || "");
        localStorage.setItem("content", list?.data?.data?.content || "");
    }, [reviewId]);

    const openWriteModal = id => {
        setModalWriteOpen(true);
        setId(id);
    };

    const closeWriteModal = () => {
        setModalWriteOpen(false);
    };
    const deleteReview = () => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            api.delete(`/review/delete/${reviewId}`)
                .then(function (res) {
                    window.alert("삭제되었습니다 😊");
                    window.location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });
            return;
        }
        return;
    };

    return (
        <div className={open ? "openModal modal" : "modal"}>
            {open ? (
                <section>
                    <header background-color="#ff7c98">{header}</header>
                    <main>
                        <Grid center padding="20px 150px">
                            <Text size="17px" margin="10px 0px" align="start">
                                제목🍧
                            </Text>
                            <Text align="start">{list?.data?.data?.title}</Text>
                        </Grid>
                        <Grid center padding="20px 150px 50px 150px">
                            <Text size="17px" margin="10px 0px" align="start">
                                내용🍧
                            </Text>
                            <Text align="start">
                                {list?.data?.data?.content}
                            </Text>
                        </Grid>
                        <Grid padding="5px 20px" is_flex>
                            {userConfirm && (
                                <Grid is_flex>
                                    <Button
                                        _onClick={() => {
                                            getList();
                                        }}
                                        width="115px"
                                        height="34px"
                                        bg="#d3c1ab"
                                        radius="3px"
                                        hoverBg="#ff7c98"
                                        margin="0 10px"
                                    >
                                        수정하기
                                    </Button>

                                    <Button
                                        _onClick={() => {
                                            deleteReview();
                                        }}
                                        width="115px"
                                        height="34px"
                                        bg="#d3c1ab"
                                        radius="3px"
                                        hoverBg="#ff7c98"
                                        margin="0 500px 0 5px "
                                    >
                                        삭제하기
                                    </Button>
                                </Grid>
                            )}
                            <Button
                                className="close"
                                _onClick={close}
                                width="115px"
                                height="34px"
                                bg="#6c757d"
                                radius="3px"
                            >
                                close
                            </Button>
                        </Grid>

                        <ModalWrite
                            open={modalWriteOpen}
                            close={closeWriteModal}
                            header="리뷰 수정하기"
                            btnName="수정하기"
                            reviewId={reviewId}
                            reviewTitle={list?.data?.data?.title}
                            reviewContent={list?.data?.data?.content}
                        >
                            {/* ReviewWrite.js <main></main>의ㅣ 내용 출력*/}
                        </ModalWrite>
                    </main>
                </section>
            ) : null}
        </div>
    );
};

export default ReviewDetail;
