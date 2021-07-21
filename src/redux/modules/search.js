import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const url = "https://bestclone.herokuapp.com";
const api = axios.create({
    baseURL: url,
    headers: {
        authorization: Cookies.get("token"),
    },
});

const initialState = {
    is_success: false,
    result: null,
};

const search = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchTerm: (state, action) => {
            state.result = action.payload.result;
            state.is_success = true;
        },
    },
});

//검색
export const searchSV =
    (keyword, hashtag, select) =>
    async (dispatch, getState, { history }) => {
        console.log(keyword, hashtag, select);
        api.post("/menu/search", {
            keyword,
            hashtag,
            select,
        })
            .then(res => {
                const {
                    data: { data: result },
                } = res;
                dispatch(searchTerm({ result }));
                history.push("/search");
            })
            .catch(error => console.log(error));
    };

export const { searchTerm } = search.actions;
export default search.reducer;
