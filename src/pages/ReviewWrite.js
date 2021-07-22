import React, { useState,useEffect } from "react";
import "../asset/css/modal.css";

import { Grid, Button, Input } from "../elements";
import axios from "axios";
import Cookies from "js-cookie";

const url = "https://bestclone.herokuapp.com";
const api = axios.create({
    baseURL: url,
    headers: {
        authorization: Cookies.get("token"),
    },
});

const ReviewWrite = props => {
    const { open, close, header, btnName , reviewId} = props;

    const localStotageTitle = localStorage.getItem("title");
    const localStotageContent = localStorage.getItem("content");

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect( () => {
            setTitle(localStorage.getItem("title"))
            setContent(localStorage.getItem("content"))  
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
                        <Grid padding="10px 200px">
                            <Input 
                                name="title"
                                type="text"
                                value={title || ""}
                                _onChange={
                                    changeTitle
                                }
                                placeholder="제목"
                            ></Input>
                        </Grid>
                        <Grid padding="20px 200px">
                            <Input
                                name="content"
                                type="text"
                                value={content || ""}
                                _onChange={ 
                                    changeContent                        
                                }
                                placeholder="내용"
                            ></Input>
                        </Grid>

                        <Grid padding="20px 200px" margin="0 0 0 240px " >
                            <Button
                                _onClick={()=>{
                                    if(btnName){ //수정하기 버튼클릭시 btnName이 넘겨진다.
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
                                margin= "3px"
                            >{btnName? btnName : "작성하기"}
                            </Button>
                            <Button
                                className="close"
                                _onClick={                                    
                                    close
                                }
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
