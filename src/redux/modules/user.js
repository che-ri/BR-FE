import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const url = "https://bestclone.herokuapp.com";
const api = axios.create({
    baseURL: url,
    headers: {
        authorization: Cookies.get("token"),
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
        login: (state, action) => {
            state.is_login = true;
        },
        logout: (state, action) => {
            Cookies.remove("token");
            state.user_info = undefined;
            state.is_login = false;
        },
        loginCheck: (state, action) => {
            state.user_info = action.payload.user_info;
            state.is_login = true;
        },
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

            //회원가입 실패!
            if (signup.data.ok === false) toast(`${signup.data.error} 🍧`);
            //회원가입 성공!
            else {
                toast("회원가입 완료! 🍧");
                history.push("/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

//로그인
export const loginSV =
    (id, password) =>
    async (dispatch, getState, { history }) => {
        api.post("api/login", { id, password }).then((res) => {
            const {
                data: { token },
            } = res;
            //로그인 실패 시 error 팝업을 뜨게 한다.
            if (res.data.ok === false) return toast(`${res.data.error} 🍧`);
            Cookies.set("token", token, { expires: 7 }); //쿠키에 토큰 저장
            toast("로그인 완료! 🍧");
            window.location = "/";
        });
    };

export const loginCheckSV =
    () =>
    async (dispatch, getState, { history }) => {
        const token = Cookies.get("token");
        if (token === undefined) return;
        api.get("api/mypage", { token }).then((res) => {
            const {
                data: { data: user_info },
            } = res;
            dispatch(loginCheck({ user_info }));
        });
    };

export const { logout, loginCheck, login } = user.actions;
export default user.reducer;
