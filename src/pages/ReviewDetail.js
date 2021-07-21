//ReviewDetail.js 20210720 5:30

//깃 합치는 작업 후 새로 만드는 페이지
import React,{useEffect, useState} from "react";
import styled from "styled-components";
import "../asset/css/modal.css";

import { Grid, Text, Button } from "../elements";
import { useSelector, useDispatch } from "react-redux";

import { getReviewDetail } from "../shared/api";
import axios from "axios";

import ModalWrite from "./ReviewWrite.js";

const url = "https://bestclone.herokuapp.com";
const api = axios.create({
    baseURL: url,
    headers: {
        authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6ImhhbGJlIiwiaWF0IjoxNjI2NTU4MDY0fQ.1VGoOT0fdkFdzw5MqQQMl0hvlA3nSXcK9kg_YPutyyA",
    },
});	

const ReviewDetail = (props) => {
    const { open, close, header, reviewId } = props;

    const [modalWriteOpen, setModalWriteOpen] = useState(false);
    const [modalDetailOpen, setModalDetailOpen] = useState(false);

    const [ Id , setId] = useState(0);
    const [list, setList] = useState({});

    async function getList() {
        //const list = await getReviewDetail(reviewId);
        //setList(list);
        openWriteModal(reviewId);
    }     

    useEffect(async () => {
        const list = await getReviewDetail(reviewId);
        setList(list);
          
        localStorage.setItem("title",list?.data?.data?.title || "");   
        localStorage.setItem("content",list?.data?.data?.content || "");   

    }, [reviewId]);

    const openWriteModal = (id) => {
        setModalWriteOpen(true);
        setId(id);

    };
    
    const closeWriteModal = () => {
        setModalWriteOpen(false);
    };
    //const user_info = "abcd" //useSelector((state) => state.user.user); //is_me 정보 가져오는 곳


    const deleteReview = () => {

        if(window.confirm("정말로 삭제하시겠습니까?")){
            api.delete(`/review/delete/${reviewId}`)
            .then(function (res) {
                console.log(res);
                window.alert("삭제되었습니다 😊")
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            });
            return;
        }
        return;

    }



    return (
        <div className={open ? "openModal modal" : "modal"}>
        {open ? (
            <section>
                <header background-color="#ff7c98">{header}</header>
                <main>
                    <Grid center padding="30px 20px">
                        <Text>제목
                        </Text>
                        <Text>
                            {list?.data?.data?.title}
                        </Text>
                    </Grid>
                    <Grid center padding="5px 20px">
                        <Text>내용
                        </Text>
                        <Text>
                            {list?.data?.data?.title}
                        </Text>
                    </Grid>
                    <Grid padding="5px 20px" is_flex>
                        <Grid is_flex>
                            <Button
                                _onClick={()=>{
                                    getList()
                                }}
                                width="115px"
                                height="34px"
                                bg="#d3c1ab"
                                radius="3px"
                                hoverBg="#ff7c98"
                                margin="0 10px"
                            >수정하기
                            </Button>
                            <Button
                                _onClick={()=>{
                                    deleteReview();
                                }}
                                width="115px"
                                height="34px"
                                bg="#d3c1ab"
                                radius="3px"
                                hoverBg="#ff7c98"
                                margin="0 500px 0 5px "

                            >삭제하기
                            </Button>
                        </Grid>    
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
                        reviewId = {reviewId}
                        reviewTitle = {list?.data?.data?.title}
                        reviewContent = {list?.data?.data?.content}
                        >
                        {/* ReviewWrite.js <main></main>에 내용이 출력된다.*/}
                        </ModalWrite>
                </main>
            </section>
        ) : null}
    </div>



    );
};

export default ReviewDetail;

