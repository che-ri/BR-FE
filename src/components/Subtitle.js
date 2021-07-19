//이거를 긁어와서 사용하면 됩니다.

import React from "react";
import styled from "styled-components";
import { spoon_left, spoon_right } from "../asset/icon";

const Subtitle = () => {
    return (
        <Title>
            <img
                src={require("../asset/title/h_title_icecream.png").default}
                alt="제목명"
            />
        </Title>
    );
};

const Title = styled.div`
    width: max-content;
    margin: auto;
    margin-top: 105px;
    margin-bottom: 35px;
    position: relative;
    ::before {
        content: "";
        display: block;
        position: absolute;
        left: -50px;
        width: 36px;
        height: 12px;
        background: url(${spoon_left}) no-repeat;
    }
    ::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: -50px;
        width: 36px;
        height: 12px;
        background: url(${spoon_right}) no-repeat;
    }
`;

export default Subtitle;
