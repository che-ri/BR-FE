import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Inner from "../components/Inner";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/modules/user";
import Button from "../elements/Button";
import { searchSV } from "../redux/modules/search";
import {
    facebook,
    twitter,
    blog,
    instagram,
    youtube,
    logo,
    search,
} from "../asset/icon";
import { history } from "../redux/configureStore";

const Header = () => {
    const dispatch = useDispatch();
    const is_login = useSelector(state => state.user.is_login); //로그인상태에 따른 헤더버튼 변화
    const hashInput = useRef();

    //검색버튼 토글
    const [toggle, setToggle] = useState(false);

    //검색어
    const [term, setTerm] = useState("");
    const [hash, setHash] = useState("");
    const [allergy_list, setAllergyList] = useState([]);

    const _allergy_list = [
        "계란",
        "대두",
        "돼지고기",
        "땅콩",
        "밀",
        "복숭아",
        "우유",
    ];

    //알러지 check하면 list에 추가하기
    const onClickHandler = target => {
        //알러지 선택취소의 경우
        if (allergy_list.includes(target)) {
            setAllergyList(allergy_list.filter(ele => ele !== target));
            return;
        }
        //불변성 유지
        return setAllergyList([...allergy_list, target]);
    };

    //해쉬클릭하면 hash 바꾸기
    const clickHash = value => {
        hashInput.current.value = value;
        setHash(value);
    };

    //검색
    const searchTerm = () => {
        console.log("검색중🐜");
        const hashTerm = hash.slice(1); //해쉬 검색 보내기 전에 #빼고 보내기!
        dispatch(searchSV(term, hashTerm, allergy_list));
    };

    return (
        <Container>
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
                        <Search
                            onClick={() => {
                                toggle ? setToggle(false) : setToggle(true);
                            }}
                        >
                            <img src={search} alt="search" />
                        </Search>
                    </Contact>
                </Inner>
            </HeaderContainer>
            <NavContainer>
                <Inner big isFlex>
                    <LeftNav>
                        {/* 로그인상태에 따른 메뉴 버튼 변화 */}
                        {is_login ? (
                            <ul>
                                <li onClick={() => dispatch(logout())}>
                                    <Link style={{ color: "#ff7c98" }} to="/">
                                        LOOUT
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/mypage">MY PAGE</Link>
                                </li>
                            </ul>
                        ) : (
                            <ul>
                                <li>
                                    <Link
                                        style={{ color: "#ff7c98" }}
                                        to="/login"
                                    >
                                        LOGIN
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/join">JOIN</Link>
                                </li>
                            </ul>
                        )}
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
            <SearchContainer className={toggle ? "on" : "off"}>
                <Inner big isFlex>
                    <GridContainer>
                        <span>제품명</span>
                        <input
                            type="text"
                            onChange={e => setTerm(e.target.value)}
                        />
                        <span>해시태그</span>
                        <div>
                            <input
                                type="text"
                                ref={hashInput}
                                placeholder="하나만 입력해주세요!"
                                onChange={e => setHash(e.target.value)}
                            />
                        </div>
                        <PopularHash style={{ gridColumn: "4/5" }}>
                            <span style={{ color: "#9c9c9c" }}>
                                • 자주 찾는 해시태그
                            </span>
                            <a onClick={e => clickHash(e.target.innerText)}>
                                #꿀.바.망
                            </a>
                            <a onClick={e => clickHash(e.target.innerText)}>
                                #머스크메론
                            </a>
                            <a onClick={e => clickHash(e.target.innerText)}>
                                #월넛
                            </a>
                        </PopularHash>
                        <span style={{ gridColumn: "1/2", gridRow: "3/4" }}>
                            알레르기 성분
                        </span>
                        <AllergyContainer
                            style={{ gridColumn: "2/3", gridRow: "3/4" }}
                        >
                            {_allergy_list.map((allergy, idx) => (
                                <div>
                                    <input
                                        type="checkbox"
                                        onChange={() => {
                                            onClickHandler(allergy);
                                        }}
                                        key={idx}
                                    />
                                    <span>{allergy}</span>
                                </div>
                            ))}
                        </AllergyContainer>
                    </GridContainer>
                </Inner>
                <Inner big>
                    <SearchBox>
                        <Button width="150px" _onClick={searchTerm}>
                            검색
                        </Button>
                    </SearchBox>
                </Inner>
            </SearchContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    position: relative;
    z-index: 10;
`;

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

const toogleOn = keyframes`
  0% {
    opacity: 0;
    transform: translatey(-50px)
  }
  100% {
    opacity: 1;
    transform: translatey(0)

}
`;

const SearchContainer = styled.div`
    background: #fff;
    width: 100%;
    position: absolute;
    z-index: 5;
    &.on {
        animation: ${toogleOn} 0.5s alternate;
    }
    &.off {
        display: none;
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 70px 1fr 100px 1fr;
    padding: 25px 0;
    width: 100%;
    gap: 5px 30px;
    align-items: center;
    input:not([type="checkbox"]) {
        background: #efefef;
        border: none;
        padding: 7px 10px;
        width: 100%;
        font-size: 12px;
        ::placeholder {
            font-size: 5px;
        }
    }
    span {
        color: #2f231c;
    }
`;

const AllergyContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
    > div {
        display: flex;
        align-items: center;
        width: 100%;
        input {
            margin-right: 5px;
        }
    }
`;

const PopularHash = styled.div`
    font-size: 8px;
    span {
        margin-right: 5px;
    }
    a {
        color: #ff7c98;
        cursor: pointer;
        :hover {
            color: #d3c1ab;
        }
        :not(:last-child) {
            margin-right: 5px;
        }
    }
`;

const SearchBox = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 25px;
`;
const SearchBtn = styled.button`
    background: #ff7c98;
    border-radius: 18px;
`;

export default Header;
