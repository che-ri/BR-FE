import React,{useRef, useState} from 'react';
import styled from "styled-components";
import "../asset/css/modal.css";

import { Grid, Image, Text, Button, Input } from "../elements";
import { useSelector, useDispatch } from "react-redux";

import { addReviewDB} from "../redux/modules/review";

const ReviewWrite = ( props ) => {
    const { open, close, header } = props;


    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const inputTitle = useRef();
    const inputContent = useRef();

    const addPost = () => {
        console.log(title,content)
        if(title==="" || content===""){
            window.alert("칸을 채워주세요!")
            return;
        }

        const review = {
          title: title,
          content:content,
        };
        


        console.log("review==>", review);
        if(dispatch(addReviewDB(review)))
          console.log("성공!")
        else
          console.log("실패");

        
        console.log(inputTitle.current)
      };
    
    
    return (
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        {header}
                        <Button width= "115px" height ="34px" bg="#d3c1ab" radius="3px" className="close" onClick={close}> &times; </Button>
                    </header>
                    <main>
                        <Grid padding="10px 20px">
                        <Input name="title" type="text" ref={inputTitle} _onChange={(e)=>{
                            setTitle(e.target.value);}
                        } placeholder="제목"></Input>
                        </Grid>
                        <Grid padding="5px 20px">
                        <Input name="content" type="text" ref={inputContent} _onChange={(e)=>{
                            setContent(e.target.value);}} placeholder="내용" multiLine></Input> 
                        </Grid>                   

                        <Grid padding="5px 20px">
                        <Button _onClick={()=>addPost()} width= "115px" height ="34px" bg="#d3c1ab" radius="3px">
                            작성하기
                        </Button>
                        </Grid>
                    </main>
                    <footer>
                        <button className="close" onClick={close}> close </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}


export default ReviewWrite