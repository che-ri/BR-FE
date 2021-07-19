import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getIcecreamList } from "../shared/api.js";
import { spoon_right, spoon_left, arrow_next, arrow_prev } from "../asset/icon";

import Inner from "../components/Inner";
import IcecreamPost from "../components/IcecreamPost.js";
import Loader from "../components/Loader.js";

const Menu = () => {
    const [is_Loading, setIsLoading] = useState(false);
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        async function getList() {
            const {
                data: { data: list },
            } = await getIcecreamList(page);
            setList(list);
            setIsLoading(true);
        }

        return getList();
    }, [page]);
    return (
        <>
            {is_Loading ? (
                <>
                    <Container style={{ padding: "0 0 330px 0" }}>
                        <Container>
                            <Inner>
                                <Topbnr
                                    src={
                                        require("../asset/menu/bg_icecream_menu.gif")
                                            .default
                                    }
                                    alt="icecream_bnr"
                                />
                            </Inner>
                        </Container>
                        <Container>
                            <Inner big>
                                <Title>
                                    <img
                                        src={
                                            require("../asset/title/h_title_icecream.png")
                                                .default
                                        }
                                    />
                                </Title>
                            </Inner>
                        </Container>
                        <Container>
                            <Inner big>
                                <IcecreamList>
                                    {list.map((item, idx) => (
                                        <IcecreamPost key={idx} {...item} />
                                    ))}
                                </IcecreamList>
                            </Inner>
                        </Container>
                        <Container>
                            <Inner big>
                                <ButtonContainer>
                                    <button>
                                        <img src={arrow_prev} alt="prev" />
                                    </button>
                                    <button onClick={() => setPage(1)}>
                                        1
                                    </button>
                                    <button onClick={() => setPage(2)}>
                                        2
                                    </button>
                                    <button onClick={() => setPage(3)}>
                                        3
                                    </button>
                                    <button>
                                        <img src={arrow_next} alt="next" />
                                    </button>
                                </ButtonContainer>
                            </Inner>
                        </Container>
                    </Container>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};

const Container = styled.div`
    width: 100%;
`;

const Topbnr = styled.img`
    width: 100%;
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    button {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #e4dbd7;
        cursor: pointer;
        background: #fff;
        margin: 0 5px;
        font-size: 11px;
        :not(:first-child, :last-child):focus {
            background: #f56f98;
            border: 1px solid #f56f98;
            color: #fff;
        }
    }
`;

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

const IcecreamList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: auto;
`;

export default Menu;
