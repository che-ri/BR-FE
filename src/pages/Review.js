import React, { useState, useEffect } from "react";
import { Grid, Button } from "../elements";
import Inner from "../components/Inner";
import styled from "styled-components";
import { spoon_left, spoon_right } from "../asset/icon";
import { arrow_next, arrow_prev } from "../asset/icon";

import ModalWrite from "./ReviewWrite.js"
import ModalDetail from "./ReviewDetail.js";

import { getReviewList } from "../shared/api.js";
import {useSelector} from "react-redux";



const Review = props => {
    const [modalWriteOpen, setModalWriteOpen] = useState(false);
    const [modalDetailOpen, setModalDetailOpen] = useState(false);
    const [reviewId , setReviewId] = useState(0);
    const [userConfirm , setUserConfirm] = useState(false);

    const user_info = useSelector((state)=> state.user.user_info);
    const is_login = useSelector((state)=> state.user.is_login);
    
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function getList() {
            const {
                data: { data: list },
            } = await getReviewList(page);
            setList(list);
        }
        return getList();
    }, [page]);

    let reviewList = list.reviews;
    let pageArr = new Array(list.totalPage);
    pageArr.fill(0);

    const prevPage = (page) => {
        if(page <= 4){
            window.alert("페이지 이동 불가")
            return;
        }
        if(page-1<= 4 * page){
            page = page - 4
        }
        setPage(page=> page-4);
    }

    const nextPage = (page) => {
        if(page >= list.totalPage){
            page= list.totalPage
            return;
        }
        if(4 * (page+1) < page+1){
            page = page + 4
        }
        setPage(page=> page+4);
    }

    const openWriteModal = () => {
        setModalWriteOpen(true);
    };
    const closeWriteModal = () => {
        setModalWriteOpen(false);
    };
    const openDetailModal = (id) => {
        setModalDetailOpen(true);
        setReviewId(id);
    };
    const closeDetailModal = () => {
        setModalDetailOpen(false);
        setUserConfirm(false)
        localStorage.setItem("title","");
        localStorage.setItem("content","");
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
                                if(!is_login){
                                    window.alert("로그인후 이용해주세요 😊")
                                    return 
                                }
                                openWriteModal();
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

                <Grid>
                    <Line />

                    { reviewList ? reviewList.map((p, idx) => {
                        
                        return (
                            <>
                                <Grid is flex margin="0 auto"
                                 _onClick={()=>{
                                    console.log("user_info.id 비교",user_info.id === p.userId,user_info.id, p.userId);
                                        if(user_info.id === p.userId){
                                            setUserConfirm(true)
                                            openDetailModal(p.id);                                       
                                        }else{
                                            openDetailModal(p.id);
                                        }
                                 }} key={idx}
                                >

                                    <TR>
                                        <TD
                                            width="72px"
                                            height="75px"
                                            margin="10px 20px"
                                        >
                                            {(list.total - 7*(page-1))-idx}
                                        </TD>
                                        <TD width="85%" height="75px" align="left">
                                            {p.title}
                                        </TD>
                                        <TD
                                            width="200px"
                                            height="75px"
                                            margin="5px"
                                        >
                                            {p.createdAt.split('T')[0]}
                                        </TD>
                                    </TR>
                                </Grid>
                            </>
                        );
                    }): console.log("게시물이 0건입니다.")}

                        <Container>
                            <Inner big>
                                <ButtonContainer>
                                <button onClick={ () =>{
                                    if(page <= 4){
                                        if(page === 1){
                                            window.alert("첫번째 페이지 입니다.")
                                            return 
                                        }
                                        setPage(1)
                                        return
                                    } 
                                    prevPage()
                                  }
                                }>
                                        
                                <img src={arrow_prev} alt="prev"/>
                                </button>
                                {pageArr.map((p, idx) => {                                    
                                    return (
                                        <>
                                        <button onClick={ () =>
                                            setPage(idx+1)
                                        }>
                                            {idx+1}
                                        </button>
                                        </>
                                    )
                                })
                                }
                                <button onClick={ () =>{
                                    if(page+4 >= list.totalPage ) {
                                        if(page === 7){
                                            window.alert("마지막 페이지입니다.")
                                            return 
                                        }
                                        setPage(list.totalPage)
                                        return
                                    }
                                    nextPage()
                                  }
                                }>
                                    <img src={arrow_next} alt="next" />
                                </button>
                                </ButtonContainer>
                            </Inner>
                        </Container>

                    <ModalWrite
                        open={modalWriteOpen}
                        close={closeWriteModal}
                        header="리뷰 작성하기"
                    >
                        {/* ReviewWrite.js <main></main>의 내용 출력*/}
                    </ModalWrite>
                    <ModalDetail
                        open={modalDetailOpen}
                        close={closeDetailModal}
                        header="리뷰 상세보기"
                        reviewId = {reviewId}
                        userConfirm = {userConfirm}
                    >
                        {/* ReviewDetail.js <main></main>의 내용 출력*/}
                    </ModalDetail>
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

const TR = styled.tr`
    border-bottom: 1px solid #dadada;
    text-align: center;
    color: #2f231c;
    font-size: 13px;
    margin-top: 10px;
    color: #948780;
`;

const TD = styled.td`
    border-bottom: 1px solid #dadada;
    color: #2f231c;
    font-size: 13px;
    padding: 20px 0 0 0;
    color: #948780
    ${(props) => (props.align ? `text-align: ${props.align};` : "center")}
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


const Container = styled.div`
    width: 100%;
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    button {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #e4dbd7;
        cursor: pointer;
        background: #fff;
        margin: 0 5px;
        font-size: 11px;
        :not(:first-child, :last-child):focus {
            background: #f56f98;
            border: 1px solid #f56f98;
            color: #fff;
        }
    }
`;