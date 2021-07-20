import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const IcecreamPost = ({ title, image, hashTags }) => {
    return (
        <Container>
            <Link to={`/menu/icecream/${title}`}>
                <Title>{title}</Title>
                <HashTag>
                    {hashTags.map((item, idx) => {
                        if (idx < 2)
                            return <span key={idx}>{`#${item.hashtag} `}</span>;
                    })}
                </HashTag>
                <Img>
                    <img src={image} alt={title} />
                </Img>
            </Link>
        </Container>
    );
};

const Container = styled.div`
    padding: 0 0 6px 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    border: 1px solid #ebebeb;
`;

const Title = styled.h5`
    padding: 20px 0 0 0;
    text-align: center;
    font-size: 15px;
`;

const HashTag = styled.div`
    height: 20px;
    text-align: center;
    font-size: 10px;
    span {
        color: #9d9d9d;
    }
`;

const Img = styled.div`
    img {
        display: block;
        width: 80%;
        margin: auto;
        height: auto;
    }
`;

export default IcecreamPost;
