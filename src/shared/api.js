import axios from "axios";
const url = "https://bestclone.herokuapp.com";
const api = axios.create({
    baseURL: url,
    headers: {
        authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6ImhhbGJlIiwiaWF0IjoxNjI2NTU4MDY0fQ.1VGoOT0fdkFdzw5MqQQMl0hvlA3nSXcK9kg_YPutyyA",
    },
});

// 모든 아이스크림 리스트

export const getIcecreamList = page =>
    api.get(`menu/icecream/?page=${page}`).then(res => res);

//제품디테일 페이지
export const getIcecream = title =>
    api.get(`menu/icecream/${title}`).then(res => res);
