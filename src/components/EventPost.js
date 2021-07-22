import React from "react";
import styled from "styled-components";
//import { store_event } from "../asset/title";
import {Grid} from "../elements"
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const EventPost = (props) =>{
    const {imgUrl, content} = props
    const history = useHistory(); 

    let [title, period] = ["", ""]

    if(content.indexOf("-") != -1){
        let find = content.indexOf("-")-4
        title =content.substring(0, find);
        period = content.substring(find, content.length);
    }else{
        let find = content.indexOf("상")
        title = content.split(find-1)[0];
        period = content.substring(content.length-4, content.length);
        
    }
    
    return (
        <Container padding="3px 8px 0 0" margin="3px auto" >
            <Grid _onClick={()=>
                history.push("/event/detail", { imgUrl, title, period})                      
            }>
            
            <Img border="1px">
                <img src={imgUrl} alt={title}/>
            </Img>
            <Div margin=" 22px 0 8px 0">     
            <img src={require("../asset/title/store_event.gif").default}
                            alt="event" margin="3px 0"></img>
            </Div>
            <Div>
                <Span size="17px">{title}</Span>           
            </Div>
            <Div>
                <Span size="11px" margin="11px 0">{period}</Span>
            </Div>
            </Grid>
        </Container>
    );
};

const Container = styled.div`
    ${(props) => (props.padding ? `padding: ${props.padding};` : "0 0")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "0 0")}
    display: flex;
    width: 100%;
    flex-direction: column;
    border: 1px solid #ebebeb;
`;



const Img = styled.div`
    ${(props) => (props.border ? `border: ${props.border};` : "")}
    img {
        display: block;
        width: 289px;
        margin: auto;
        height: 289px;
    }
`;

const Div = styled.div`
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;
const Span = styled.span`
    display: block;
    ${(props) => (props.size ? `font-size: ${props.size};` : "13px")}
    text-align : center;
`

export default EventPost;