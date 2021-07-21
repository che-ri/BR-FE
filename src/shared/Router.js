import { Redirect, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

//컴포넌트
import Layout from "./Layout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import MenuDetail from "../pages/MenuDetail";
import Event from "../pages/Event";
import Store from "../pages/Store";
import Review from "../pages/Review";
import ReviewDetail from "../pages/ReviewDetail";
import ReviewWrite from "../pages/ReviewWrite";
import SearchResult from "../pages/SearchResult";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Mypage from "../pages/Mypage";

const AppRouter = () => {
    return (
        <ConnectedRouter history={history}>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/menu/icecream" component={Menu} />
                    <Route
                        exact
                        path="/menu/icecream/:title"
                        component={MenuDetail}
                    />
                    <Route exact path="/event" component={Event} />
                    <Route exact path="/store" component={Store} />
                    <Route exact path="/review" component={Review} />
                    <Route exact path="/review/:id" component={ReviewDetail} />
                    <Route exact path="/review/write" component={ReviewWrite} />
                    <Route
                        exact
                        path="/review/write/:id"
                        component={ReviewWrite}
                    />
                    <Route exact path="/search" component={SearchResult} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/join" component={Signup} />
                    <Route exact path="/mypage" component={Mypage} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Layout>
        </ConnectedRouter>
    );
};

export default AppRouter;
