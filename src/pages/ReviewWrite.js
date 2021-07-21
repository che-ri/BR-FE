//ReviewWrite.js 20210720 7시
import React, { useRef, useState,useEffect } from "react";
import styled from "styled-components";
import "../asset/css/modal.css";
import {history} from "../redux/configureStore"

import { Grid, Image, Text, Button, Input } from "../elements";
import axios from "axios";

import { getReviewDetail } from "../shared/api";


const url = "https://bestclone.herokuapp.com";
const api = axios.create({
    baseURL: url,
    headers: {
        authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6ImhhbGJlIiwiaWF0IjoxNjI2NTU4MDY0fQ.1VGoOT0fdkFdzw5MqQQMl0hvlA3nSXcK9kg_YPutyyA",
    },
});

const ReviewWrite = props => {
    const { open, close, header, btnName , reviewId} = props;

    //const inputTitle = useRef();
    //const inputContent = useRef();
    //const [list, setList] = useState({});
    

    //is_edit가 false라면 그냥 글쓰기!
    //const is_edit = reviewId ? true : false;
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    const localStotageTitle = localStorage.getItem("title");
    const localStotageContent = localStorage.getItem("content");

    useEffect( () => {
            // list = await getReviewDetail(reviewId);
            //setList(list);
            setTitle(localStorage.getItem("title"))
            setContent(localStorage.getItem("content"))
            console.log(";;;")    
            //return getList();

    //title or content 이 바뀌면, useEffect 재실행된다.(아래 배열 때문에)     
    }, [localStotageTitle,localStotageContent ] );

    
    const changeTitle =(e) =>{
        setTitle(e.target.value)
    }

    const changeContent =(e) =>{
        setContent(e.target.value)
    }
   
    const addReview = () => {
        if (title === "" || content === "") {
            window.alert("칸을 채워주세요!");
            return;
        }
        
        api.post('/review/write', {
            title: title,
            content: content
        })
        .then(function (res) {
            console.log(res);
            window.location.reload()

        })
        .catch(function (error) {
            console.log(error);
        });

 
    };

    const editReview = () => {
        if (title === "" || content === "") {
            window.alert("칸을 채워주세요!");
            return;
        }

        api.put(`/review/write/${reviewId}`, {
            title: title,
            content: content
        })
        .then(function (res) {
            console.log(res);
            window.alert("수정되었어요.😊")
            window.location.reload()

        })
        .catch(function (error) {
            console.log(error);
        });

 
    };
    return (
        <div className={open ? "openModal modal" : "modal"}>
            {open ? (
                <section>
                    <header>{header}</header>
                    <main>
                        <Grid padding="10px 20px">
                            <Input
                                name="title"
                                type="text"
                                //ref={inputTitle}
                                value={title || ""}
                                _onChange={
                                    changeTitle
                                }
                                placeholder="제목"
                            ></Input>
                        </Grid>
                        <Grid padding="5px 20px">
                            <Input
                                name="content"
                                type="text"
                                value={content || ""}
                                //ref={inputContent}
                                _onChange={ 
                                    changeContent                        
                                }
                                placeholder="내용"
                            ></Input>
                        </Grid>

                        <Grid padding="5px 20px" is_flex>
                            <Button
                                _onClick={()=>{
                                    if(btnName){ //글쓰기가 아니고, 수정하기 상황일 때 btnName이 넘겨진다.
                                        editReview()
                                    }else{
                                        addReview()
                                    }
                                }}
                                width="115px"
                                height="34px"
                                bg="#d3c1ab"
                                radius="3px"
                                hoverBg="#ff7c98"
                            >{btnName? btnName : "작성하기"}
                            </Button>
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
                    </main>
                </section>
            ) : null}
        </div>
    );
};

export default ReviewWrite;
