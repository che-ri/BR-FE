import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://bestclone.herokuapp.com";
const api = axios.create({
    baseURL: url,
    headers: {
        authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6ImhhbGJlIiwiaWF0IjoxNjI2NTU4MDY0fQ.1VGoOT0fdkFdzw5MqQQMl0hvlA3nSXcK9kg_YPutyyA",
    },
});

const initialState = {
    is_login: false,
    user_info: null,
};

const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {},
        logout: (state, action) => {},
        loginCheck: (state, action) => {},
    },
});

//회원가입
export const signupSV =
    (id, password, email, passwordconfirm, nickname) =>
    async (dispatch, getState, { history }) => {
        //id, password, email, passwordconfirm, nickname 순으로 서버에 보낼것.
        try {
            const signup = await api.post("/api/join", {
                id,
                password,
                email,
                passwordconfirm,
                nickname,
            });
            console.log(signup);

            //회원가입 실패!
            if (signup.data.ok === false) window.alert(signup.data.error);
            //회원가입 성공!
            else {
                window.alert("회원가입 완료! 🍧");
                history.push("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

export const { login, logout, loginCheck } = user.actions;
export default user.reducer;
