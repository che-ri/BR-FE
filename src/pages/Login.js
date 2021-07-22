import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import styled from "styled-components";
import { loginSV } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = props => {
    const dispatch = useDispatch();
    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");

    const toast_error_setting = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };

    const login = () => {
        if (id === "" || pwd === "")
            return toast(
                "아이디 혹은 비밀번호가 공란입니다! 🍧",
                toast_error_setting
            );
        if (id.length < 3) return toast("아이디는 3글자 이상이예요! 🍧");
        if (pwd.length < 3) return toast("패스워드는 3글자 이상이예요! 🍧");
        return dispatch(loginSV(id, pwd));
    };

    const signup = () => {
        props.history.push("/signup");
    };

    return (
        <>
            <Grid width="400px" margin="100px auto 0 auto">
                <Text size="1.5em" align="center">
                    로그인
                </Text>
                <Grid wdith="400px">
                    <Grid margin="0 0 20px 0">
                        <Input
                            type="text"
                            placeholder="아이디"
                            _onChange={e => {
                                setId(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid margin="0 0 20px 0">
                        <Input
                            type="password"
                            placeholder="비밀번호"
                            _onChange={e => {
                                setPwd(e.target.value);
                            }}
                        />
                    </Grid>
                    <ToastContainer />
                    <Grid margin="0 0 20px 0">
                        <Button
                            _onClick={() => {
                                login();
                            }}
                            margin="10px 0px"
                        >
                            로그인
                        </Button>
                    </Grid>
                </Grid>
                <Controls>
                    <A href="https://www.happypointcard.com/page/member-info/find-id-pw-form.spc?findType=id">
                        아이디 찾기
                    </A>
                    <A href="https://www.happypointcard.com/page/member-info/find-id-pw-form.spc?findType=pw">
                        &nbsp;비밀번호 찾기
                    </A>
                    <A
                        onClick={() => {
                            props.history.push("/join");
                        }}
                    >
                        회원가입
                    </A>
                </Controls>
            </Grid>
        </>
    );
};

export default Login;

const A = styled.a`
    color: black;
    cursor: pointer;
    &:hover {
        color: #d3c1ab;
    }
`;

const Controls = styled.div`
    padding: 0 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
