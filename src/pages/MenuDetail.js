import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getIcecream } from "../shared/api";

import Inner from "../components/Inner";
import {
    spoon_top,
    facebook,
    twitter,
    copy,
    favorite,
    favorite_on,
} from "../asset/icon";
import Loader from "../components/Loader";

const MenuDetail = props => {
    const [is_loading, setIsLoading] = useState(false);
    const [item, setItem] = useState({});
    const [is_favorite, setIsFavorite] = useState(false);
    useEffect(() => {
        async function getItem() {
            const {
                match: {
                    params: { title: keyword },
                },
            } = props;
            const title = encodeURIComponent(keyword);
            const {
                data: { data: item },
            } = await getIcecream(title);
            setItem(item);
            setIsLoading(true);
        }
        getItem();
    }, []);
    return (
        <>
            {is_loading ? (
                <>
                    <Container>
                        <Inner big>
                            <Title>
                                <img src={spoon_top} alt="icon" />
                                <HashTag>
                                    {item.allergy.map((ele, idx) => {
                                        if (
                                            item.allergy.length === 1 ||
                                            idx === item.allergy.length - 1
                                        )
                                            return (
                                                <span>{`${ele.allergy}`}</span>
                                            );
                                        return (
                                            <span>{`${ele.allergy}, `}</span>
                                        );
                                    })}
                                </HashTag>
                                <span>{item.title}</span>
                                <Image>
                                    <img src={item.image} alt={item.title} />
                                </Image>
                                <Button href="https://www.happyconstore.com/brand/main.do?brandSeq=1474297546090049">
                                    구매하기
                                </Button>
                            </Title>
                        </Inner>
                    </Container>
                    <Container>
                        <Inner big>
                            <Sns>
                                <a onClick={() => setIsFavorite(true)}>
                                    <img
                                        src={
                                            is_favorite ? favorite_on : favorite
                                        }
                                        alt="favorite"
                                    />
                                </a>
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
                                <a>
                                    <img src={copy} alt="copy" />
                                </a>
                            </Sns>
                        </Inner>
                    </Container>
                    <Container>
                        <Inner big padding="60px 0">
                            <img
                                src={require("../asset/menu/price.png").default}
                                alt="price"
                            />
                        </Inner>
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

const Title = styled.div`
    position: relative;
    padding-top: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    span {
        line-height: 1;
        font-size: 45px;
        font-weight: lighter;
    }
`;

const Button = styled.a`
    position: absolute;
    bottom: -20px;
    background: #f56f98;
    padding: 15px 50px;
    color: #fff;
    border: none;
    font-size: 14px;
    border-radius: 25px; ;
`;

const Image = styled.div`
    width: 100%;
    border-bottom: 2px solid #f56f98;
    text-align: center;
`;
const HashTag = styled.div`
    height: 20px;
    text-align: center;
    margin-top: 10px;
    span {
        font-size: 10px;
        color: #a0623d;
        font-weight: lighter;
    }
`;

const Sns = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 50px 0 7px 0;
    border-bottom: 1px solid #ededed;
    a {
        :not(:first-child) {
            margin-left: 10px;
        }
    }
`;

export default MenuDetail;
