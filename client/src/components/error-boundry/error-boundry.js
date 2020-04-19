import React, {Component} from "react";
import ErrorDisplay from "../error-display/error-display";

export default class ErrorBoundry extends Component {

    state = {
        isError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            isError: true
        })
    }

    render() {

        if (this.state.isError) return <ErrorDisplay/>

        return this.props.children
    }
}
