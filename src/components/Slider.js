import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imgUrl = require("../asset/mainBnr/1620351475.png").default;

export default function SimpleSlider({
    dots,
    items,
    show,
    scroll,
    multi,
    autoplay,
    autoplaySpeed,
}) {
    const settings = {
        dots: dots,
        infinite: true,
        speed: 500,
        slidesToShow: show,
        slidesToScroll: scroll,
        multi,
        autoplay,
        autoplaySpeed,
    };

    return (
        <Container>
            <StyledSlider {...settings}>
                {items.map((item, idx) => (
                    <div key={idx}>
                        <ImageContainer {...settings}>
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
    multi: false,
};

const Container = styled.div`
    overflow: hidden;
`;

const StyledSlider = styled(Slider)`
    ${props =>
        !props.multi
            ? `.slick-slide div {
        outline: none;
    }
    .slick-dots {
        bottom: 30px;
        li {
            width: 30px;
            &.slick-active{
                button:before{
                    color:black;}
                }
            button {
                
                &:before {
                    color: white;
                    font-size: 15px;
                }
            }
        }
    }
    .slick-prev,
    .slick-next {
        :before {
            font-size: 100px;
        }
    }
    .slick-prev {
        left: 50px;
        z-index: 10;
    }
    .slick-next {
        right: 150px;
    }`
            : `.slick-slide div {
        outline: none;
    }
    .slick-dots {
        bottom: 0px;
        li {
            width: 30px;
            button {
                &:before {
                    color: black;
                    font-size: 10px;
                }
            }
        }
    }
    }`}
`;

const ImageContainer = styled.div`
    ${props =>
        !props.multi
            ? `margin: 0;`
            : `margin: 0 16px 50px 16px;
    h5 {
        margin: 5px 0;
    }
    span {
        font-size: 10px;
        color: #cdcdcd;
    }`}
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
