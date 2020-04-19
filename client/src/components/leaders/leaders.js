import React, {Component, Fragment} from "react";
import axios from "axios";
import {IMAGES_URL, LEADERS_URL} from "../../constants/API";
import Loader from "../loader/loader";
import ErrorDisplay from "../error-display/error-display";

export default class Leaders extends Component {

    state = {
        leaders: [],
        loading: true,
        error: false
    }

    componentDidMount() {
        axios.get(LEADERS_URL)
            .then((data) => this.setState({
                leaders: data.data,
                error: false,
                loading: false
            }))
            .catch((error) => {
                console.error(error)
                this.setState({
                    loading: false,
                    error: true
                })
            })
    }

    render() {
        const {loading, error, leaders} = this.state;

        if (loading) return <Loader/>

        if (error) return <ErrorDisplay/>

        const renderLeaders = leaders.map((item) => {
            return (
                <Fragment key={item.id}>
                    <div className="container">
                        <div className="leaders__director">
                            <h3 className="leaders__title_default text-center">{item.job_lvl}</h3>
                            <div className="row">
                                <div className="col-lg-8 offset-lg-1">
                                    <div
                                        className="leaders__name">{`${item.lname} ${item.fname} ${item.patronymic}`}
                                    </div>
                                    <div className="leaders__address"><span
                                        className="stronger">Адрес:&nbsp;</span>{`Москва, Костомаровская наб., д. 29, каб. ${item.cabinet}`}
                                    </div>
                                    <div className="leaders__phone"><span
                                        className="stronger">Телефон:&nbsp;</span>{item.phone}
                                    </div>
                                    <div className="leaders__email">
                                        <span className="stronger">Эл. почта:&nbsp;</span>
                                        <span className="underline">
                                    <a href={`mailto:${item.email}`}>{item.email}</a>
                                </span>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="leaders__img">
                                        {item.image ? <img src={`${IMAGES_URL}/${item.image}`} alt={item.lname}/>
                                                    : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line"/>
                </Fragment>
            )
        })

        return (
            <section className="leaders">
                {renderLeaders}
            </section>
        )
    }
}
