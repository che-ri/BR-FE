import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Text, Input, Grid, Button } from "../elements";
import { signupSV } from "../redux/modules/user";
import { spoon_left, spoon_right } from "../asset/icon";
import { emailCheck } from "../shared/common";

const Signup = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwd_check, setPwdCheck] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");

    const signup = () => {
        if (
            id === "" ||
            pwd === "" ||
            pwd_check === "" ||
            nickname === "" ||
            email === ""
        ) {
            window.alert("정보를 모두 입력해주세요!");
            return;
        }
        if (pwd !== pwd_check) {
            window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다!");
            return;
        }
        // console.log(id, pwd, email, pwd_check, nickname);
        dispatch(signupSV(id, pwd, email, pwd_check, nickname));
    };

    return (
        <>
            <Grid width="400px" margin="100px auto 0 auto">
                <Title>
                    <Text size="20px" align="center" bold>
                        회원가입
                    </Text>
                </Title>
                <Grid width="400px">
                    <Grid margin="0 0 20px 0">
                        <Input
                            type="text"
                            placeholder="아이디"
                            _onChange={e => {
                                setId(e.target.value);
                            }}
                        />
                        <Text color="#a0623d" size="11px">
                            {id.length < 3 ? "3글자 이상 입력해주세요!" : ""}
                        </Text>
                    </Grid>
                    <Grid margin="0 0 20px 0">
                        <Input
                            type="text"
                            placeholder="닉네임"
                            _onChange={e => {
                                setNickname(e.target.value);
                            }}
                        />
                        <Text color="#a0623d" size="11px">
                            {nickname.length < 3
                                ? "3글자 이상 입력해주세요!"
                                : ""}
                        </Text>
                    </Grid>

                    <Grid margin="0 0 20px 0">
                        <Input
                            type="password"
                            placeholder="비밀번호"
                            _onChange={e => {
                                setPwd(e.target.value);
                            }}
                        />
                        <Text color="#a0623d" size="11px">
                            {pwd.length < 3 ? "3글자 이상 입력해주세요!" : ""}
                        </Text>
                    </Grid>
                    <Grid margin="0 0 20px 0">
                        <Input
                            type="password"
                            placeholder="비밀번호 확인"
                            _onChange={e => {
                                setPwdCheck(e.target.value);
                            }}
                        />
                        <Text color="#a0623d" size="11px">
                            {pwd !== pwd_check
                                ? "비밀번호와 일치시켜주세요!"
                                : ""}
                        </Text>
                    </Grid>
                    <Grid margin="0 0 20px 0">
                        <Input
                            type="text"
                            placeholder="이메일"
                            _onChange={e => {
                                setEmail(e.target.value);
                            }}
                        />
                        <Text color="#a0623d" size="11px">
                            {emailCheck(email)
                                ? ""
                                : "이메일형식을 맞춰주세요!"}
                        </Text>
                    </Grid>
                    <Button
                        _onClick={() => {
                            signup();
                        }}
                        radius="20px"
                    >
                        회원가입
                    </Button>
                </Grid>
            </Grid>
        </>
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
        top: 8px;
    }
    ::after {
        content: "";
        display: block;
        position: absolute;
        top: 8px;
        right: -50px;
        width: 36px;
        height: 12px;
        background: url(${spoon_right}) no-repeat;
    }
`;

export default Signup;
