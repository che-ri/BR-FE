import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imgUrl = require("../asset/mainBanner/1620351475.png").default;

export default function SimpleSlider({ items }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
    };
    return (
        <Container>
            <Image
                src={require("../asset/mainBanner/1620379683.jpg").default}
            />
            <StyledSlider {...settings}>
                {items.map(item => (
                    <div key={items[item]}>
                        <ImageContainer>
                            <Image src={item} />
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
        bottom: 25px;
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
`;

const Image = styled.img`
    margin: auto;
    width: 100%;
    height: 100%;
`;
