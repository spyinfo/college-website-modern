import React, {Fragment, Component} from "react";
import {Switch, Route} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Main from "../main/main";
import Leaders from "../leaders/leaders";
import ErrorBoundry from "../error-boundry/error-boundry";
import Contact from "../contact/contact";
import {connect} from "react-redux";
import axios from "axios";
import {fetchCSRF} from "../../actions/csrfAction";


class App extends Component {


    componentDidMount() {
        this.props.fetchCSRF();
        console.log(axios.defaults.headers)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.token !== this.props.token) {
            console.log("componentDidUpdate", this.props)
            // axios.defaults.headers.common = {
            //     'X-Requested-With': 'XMLHttpRequest',
            //     'X-CSRF-TOKEN': this.props.token
            // }

            console.log(axios.defaults.headers)
        }
    }

    render() {

        return (
            <Fragment>
                <Header/>

                <ErrorBoundry>
                    <Switch>
                        <Route path="/" component={Main} exact/>
                        <Route path="/leaders" component={Leaders}/>

                        <Route path="/contacts" component={Contact}/>

                    </Switch>
                </ErrorBoundry>
                <Footer/>
            </Fragment>
        )
    }
}

const mapStateToProps = ({csrf}) => {
    return {
        token: csrf.csrf
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCSRF: fetchCSRF(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
