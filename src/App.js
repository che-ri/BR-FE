import React, { useEffect } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { loginCheckSV } from "./redux/modules/user";
import { useDispatch } from "react-redux";

//컴포넌트
import Router from "./shared/Router";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loginCheckSV());
    }, []);
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    );
};

export default App;
