import { Redirect, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

//컴포넌트
import Layout from "./Layout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Nutrient from "../pages/Nutrient";
import Event from "../pages/Event";
import Store from "../pages/Store";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const AppRouter = () => {
    return (
        <ConnectedRouter history={history}>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/menu/main" component={Menu} />
                    <Route exact path="/nutrient" component={Nutrient} />
                    <Route exact path="/event" component={Event} />
                    <Route exact path="/store" component={Store} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Layout>
        </ConnectedRouter>
    );
};

export default AppRouter;
