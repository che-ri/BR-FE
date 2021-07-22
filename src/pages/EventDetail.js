import React, { useState } from "react";
import styled from "styled-components";
import {Grid} from "../elements"

import {
    facebook,
    twitter,
    youtube,
} from "../asset/icon";

import { useLocation } from "react-router-dom";
const EventDetail = (props) => {

    const location = useLocation(); 
    const eventImgUrl = location.state?.imgUrl;
    const eventTitle = location.state?.title;
    const eventPeriod = location.state?.period;

    return (
        <Container  padding="0 0 5px 0" margin="0 auto" >
            
            <Grid is_flex width="600px" margin="0 auto" padding="24px 0 0 0;">
                <Grid center padding="30px 0">
                <Img width="33px" height="24px">
                        <img src={require("../asset/title/ico_store_event.gif").default}
                        alt="event"/>
                </Img>
                <Img width="91px" height="11px">
                        <img src={require("../asset/title/tit_store_event.gif").default}
                        alt="event"/>
                </Img>
                </Grid>

            </Grid>
            <Title margin="11px 200px">{eventTitle}</Title>

            <Grid is_flex width="600px" margin="0 auto" padding="12px 0;">
                <SubText color="#948780" size="17px">{eventPeriod}</SubText>
                <Sns>
                        <a
                            href="https://www.facebook.com/baskinrobbinskr/"
                            target="_blank"
                        >
                            <img src={facebook} alt="facebook" />
                        </a>
                        <a
                            href="https://twitter.com/BaskinrobbinsKR"
                            target="_blank"
                        >
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a
                            href="https://www.youtube.com/user/baskinrobbinskorea"
                            target="_blank"
                        >
                            <img src={youtube} alt="youtube" />
                        </a>
                    </Sns>

            </Grid>
            <Img width="600px" height="900px" border="1px">
                <img src={eventImgUrl} alt={eventTitle}/>
            </Img> 
        </Container>
    );

};

const Container = styled.div`
    ${(props) => (props.padding ? `padding: ${props.padding};` : "0 0")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "0 0")}
    display: flex;
    width: 60%;
    flex-direction: column;
    border: 1px solid #ebebeb;
`;

const Title = styled.div`
    color: #2f231c;
    font-size: 17px;
    line-height: 38px;
    font-weight: normal;
    text-align: center;
    border-bottom: 2px solid #ff7c98;
    padding-bottom: 22px;
`

const Img = styled.div`
    ${(props) => (props.border ? `border: ${props.border};` : "")}
    img {
        display: block;
        ${(props) => (props.width ? `width: ${props.width};` : "30px")}
        ${(props) => (props.height ? `height: ${props.height};` : "30px")}

        margin: auto;
    }
`;
const SubText = styled.div`
    font-size: 11px;
    margin: "11px 0"
    ${(props) => (props.color ? `color: ${props.color};` : "black")}


`
const Sns = styled.div`
    a:not(:last-child) {
        margin-right: 10px;
    }
    img {
        width: 30px;
        height: 30px;
    }
`;


export default EventDetail;

