import React, {Fragment} from "react";
import {Switch, Route} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Main from "../main/main";

const App = () => {
    return (
        <Fragment>
            <Header/>

            <Switch>
                <Route path="/" component={Main} exact/>

            </Switch>

            <Footer/>
        </Fragment>
    )
}

export default App;
