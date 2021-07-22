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

//아이스크림 디테일 페이지
export const getIcecream = title =>
    api.get(`menu/icecream/${title}`).then(res => res);

export const getEventList = () => api.get(`api/event`).then(res => res);

//페이지별 리뷰 불러오기
export const getReviewList = page =>
    api.get(`review/?page=${page}`).then(res => res);
// 리뷰 디테일 페이지
export const getReviewDetail = newId =>
    api.get(`review/${newId}`).then(res => res);

//제품 리뷰적기
export const setReview = (title, description) =>
    api.post("/review/write", { title, description }).then(res => res);

//스토어 정보
export const getStoreInfo = () => api.get("/api/markets").then(res => res);
