import React from "react";
import styled from "styled-components";
import Inner from "../components/Inner";
import { Link } from "react-router-dom";
import {
    facebook,
    twitter,
    blog,
    instagram,
    youtube,
    logo,
    search,
} from "../asset/icon";

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <Inner big isFlex>
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
                            href="https://blog.naver.com/NBlogTop.naver?isHttpsRedirect=true&blogId=brgirl31"
                            target="_blank"
                        >
                            <img src={blog} alt="blog" />
                        </a>
                        <a
                            href="https://www.instagram.com/baskinrobbinskorea/"
                            target="_blank"
                        >
                            <img src={instagram} alt="instagram" />
                        </a>
                        <a
                            href="https://www.youtube.com/user/baskinrobbinskorea"
                            target="_blank"
                        >
                            <img src={youtube} alt="youtube" />
                        </a>
                    </Sns>
                    <Logo to="/">
                        <img src={logo} alt="logo" />
                    </Logo>
                    <Contact>
                        <a href="http://www.baskinrobbins.co.kr/customer/ccm.php">
                            고객센터
                        </a>
                        <a href="http://www.baskinrobbins.co.kr/about/contact_us.php">
                            CONTACT US
                        </a>
                        <Search>
                            <img src={search} alt="" />
                        </Search>
                    </Contact>
                </Inner>
            </HeaderContainer>
            <NavContainer>
                <Inner big isFlex>
                    <LeftNav>
                        <ul>
                            <li>
                                <Link style={{ color: "#ff7c98" }} to="/login">
                                    LOGIN
                                </Link>
                            </li>
                            <li>
                                <Link to="/join">JOIN</Link>
                            </li>
                        </ul>
                    </LeftNav>
                    <RightNav>
                        <ul>
                            <li>
                                <Link to="/">FLAVOL OF THE MONTH</Link>
                            </li>
                            <li>
                                <Link to="/menu/icecream">MENU</Link>
                            </li>
                            <li>
                                <Link to="/event">EVENT</Link>
                            </li>
                            <li>
                                <Link to="/store">STORE</Link>
                            </li>
                            <li>
                                <Link to="/review">REVIEW</Link>
                            </li>
                        </ul>
                    </RightNav>
                </Inner>
            </NavContainer>
        </>
    );
};

const HeaderContainer = styled.header`
    width: 100vw;
    height: 114px;
    background: url("http://www.baskinrobbins.co.kr/assets/images/common/bg_header.gif");
`;

const NavContainer = styled.div`
    width: 100%;
    height: 40px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #4a3d39;
    font-weight: 400;
`;

const Contact = styled.div`
    display: flex;
    align-items: center;
    a {
        font-size: 5px;
        color: #4a3d39;
        margin-right: 20px;
        letter-spacing: 0.01px;
    }
`;

const Sns = styled.div`
    a:not(:last-child) {
        margin-right: 10px;
    }
    img {
        width: 30px;
        height: 30px;
    }
`;

const Logo = styled(Link)`
    img {
        width: 80px;
        height: 80px;
    }
`;

const Search = styled.button`
    background: none;
    cursor: pointer;
    img {
        width: 50px;
        height: 50px;
    }
`;

const LeftNav = styled.div`
    width: 10%;
    color: #4a3d39;

    ul {
        display: flex;
        justify-content: space-between;
        li {
            font-weight: bold;
            font-size: 7px;
        }
    }
`;
const RightNav = styled.div`
    width: 80%;
    color: #483834;
    ul {
        display: flex;
        justify-content: space-between;
        li {
            font-weight: bold;
            font-size: 12px;
        }
    }
`;

export default Header;
