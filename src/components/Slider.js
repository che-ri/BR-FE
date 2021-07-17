import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imgUrl = require("../asset/mainBnr/1620351475.png").default;

export default function SimpleSlider({
    items,
    show,
    title,
    process,
    online,
    store,
    position,
}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: show,
        slidesToScroll: 3,
        arrows: true,
        centerMode: true,
    };
    return (
        <Container>
            <StyledSlider {...settings}>
                {items.map((item, idx) => (
                    <div key={idx}>
                        <ImageContainer>
                            <Image src={item.url} />
                            {item.event === "online" ? (
                                <Event
                                    src={
                                        require("../asset/title/online_event.gif")
                                            .default
                                    }
                                />
                            ) : (
                                ""
                            )}
                            {item.event === "store" ? (
                                <Event
                                    src={
                                        require("../asset/title/store_event.gif")
                                            .default
                                    }
                                />
                            ) : (
                                ""
                            )}
                            <h5>{item.title}</h5>
                            <span>{item.process}</span>
                        </ImageContainer>
                    </div>
                ))}
            </StyledSlider>
        </Container>
    );
}

SimpleSlider.defaultProps = {
    items: [imgUrl, imgUrl],
};

const Container = styled.div`
    overflow: hidden;
`;

const StyledSlider = styled(Slider)`
    .slick-slide div {
        outline: none;
    }
    .slick-dots {
        /* bottom: 20px; */
        li {
            button {
                &:before {
                    color: white;
                }
            }
        }
    }
`;

const ImageContainer = styled.div`
    margin: 0 16px;
    h5 {
        margin: 5px 0;
    }
    span {
        font-size: 10px;
        color: #cdcdcd;
    }
`;

const Image = styled.img`
    margin: auto;
    width: 100%;
    height: 100%;
`;

const Event = styled.img`
    margin-top: 10px;
    width: 100px;
    height: 20px;
`;
