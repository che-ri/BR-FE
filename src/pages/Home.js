import React from "react";
import styled from "styled-components";
import Slider from "../components/Slider";
import Inner from "../components/Inner";

import main_banner1 from "../asset/mainBanner/1620351475.png";
import main_banner2 from "../asset/mainBanner/1620379522.jpg";
import main_banner3 from "../asset/mainBanner/1630631572.jpg";
import main_banner4 from "../asset/mainBanner/1638847240.png";

const Home = () => {
    return (
        <Container>
            <Inner style={{ position: "relative" }}>
                <Slider
                    items={[
                        main_banner1,
                        main_banner2,
                        main_banner3,
                        main_banner4,
                    ]}
                />
            </Inner>
        </Container>
    );
};

const Container = styled.div`
    height: max-content;
    width: 100%;
`;

export default Home;
