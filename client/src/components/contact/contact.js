import React, {Component} from "react";
import InputMask from "react-input-mask";
import is from "is_js";
import axios from "axios";
import {POST_REQUEST_URL} from "../../constants/API";
import {connect} from "react-redux";

class Contact extends Component {

    state = {
        isFormValid: false,
        form: {
            name: {
                value: '',
                errorMessage: 'Введите свое имя',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 2
                }
            },
            email: {
                value: '',
                errorMessage: 'Введите корректный e-mail',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            phone: {
                value: '',
                errorMessage: 'Введите корректный номер телефона',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    tel: true
                }
            },
            text: {
                value: '',
                errorMessage: 'Введите текст',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 8
                }
            }
        }
    }

    onChangeHandle = (e) => {
        let isFormValid = true;
        const {value, name} = e.target;

        const form = {...this.state.form}
        const control = {...form[name]}

        control.value = value;
        control.touched = true;
        control.valid = this.validateForm(value, control.validation)

        form[name] = control;

        Object.keys(form).forEach((item) => {
            isFormValid = form[item].valid && isFormValid
        })

        this.setState({
            form,
            isFormValid
        })
    }

    onSubmit = async (e) => {
        e.preventDefault()

        console.log(this.props)

        const {form: {name, phone, email, text}} = this.state

        const data = {
            name: name.value,
            phone: phone.value,
            email: email.value,
            text: text.value
        }

        const response = await axios.post(POST_REQUEST_URL, data);

        console.log(response)
    }

    validateForm = (value, validation) => {
        if (!validation) return true

        let isValid = true

        if (validation.required) isValid = value.trim() !== '' && isValid

        if (validation.email) isValid = is.email(value) && isValid

        if (validation.tel) isValid = !isNaN(value[17]) && isValid

        if (validation.minLength) isValid = value.length >= validation.minLength && isValid

        return isValid
    }

    render() {

        const {form: {name, phone, email, text}} = this.state

        return (
            <section className="contacts">
                <div className="container">
                    <h2 className="text-center">Контакты</h2>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-1">
                            <div className="contacts__contact">
                                <div className="contacts__title">
                                    Адрес:
                                </div>
                                <div className="contacts__description">
                                    Москва, Костомаровская наб., д. 29
                                </div>
                            </div>
                            <div className="contacts__contact">
                                <div className="contacts__title">
                                    Телефон колледжа:
                                </div>
                                <div className="contacts__description">
                                    8 (925) 743 - 11 - 91
                                </div>
                            </div>
                            <div className="contacts__contact">
                                <div className="contacts__title">
                                    Телефон приемной комиссии:
                                </div>
                                <div className="contacts__description">
                                    8 (495) 917 - 08 - 47
                                </div>
                            </div>
                            <div className="contacts__contact">
                                <div className="contacts__title">
                                    Электронная почта:
                                </div>
                                <div className="contacts__description">
                                    priemka@mgkit.ru
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1 col-8 offset-2">
                            <div className="contacts__title" id="contact-with-us">
                                Свяжитесь с нами
                            </div>
                            <form className="form" onSubmit={this.onSubmit}>

                                {!name.valid && name.touched ? <label className="error" htmlFor="name">{name.errorMessage}</label> : null}
                                <input type="text"
                                       className="form__field"
                                       placeholder="Имя"
                                       name="name"
                                       value={name.value}
                                       onChange={this.onChangeHandle}/>


                                {!email.valid && email.touched ? <label className="error" htmlFor="email">{email.errorMessage}</label> : null}
                                <input type="email"
                                       className="form__field"
                                       placeholder="E-mail"
                                       name="email"
                                       value={email.value}
                                       onChange={this.onChangeHandle}/>


                                {!phone.valid && phone.touched ? <label className="error" htmlFor="phone">{phone.errorMessage}</label> : null}
                                <InputMask type="tel"
                                           className="form__field"
                                           mask="+7 (999) 999-99-99"
                                           placeholder="Телефон"
                                           value={phone.value}
                                           name="phone"
                                           onChange={this.onChangeHandle}/>


                                {!text.valid && text.touched ? <label className="error" htmlFor="text">{text.errorMessage}</label> : null}
                                <textarea name="text" className="form__field text-area" id="textarea" cols="30" rows="10" placeholder="Текст письма" onChange={this.onChangeHandle} value={text.value}/>

                                <button className="form__button" type="submit" disabled={!this.state.isFormValid}>Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A327cffc569f5320ede8eb065370e8adcd964730869d4cde0c44a16f3afea63af&amp;source=constructor" width="100%" height="479" frameBorder="0"/>
            </section>
        )
    }
}

const mapStateToProps = ({csrf}) => {
    return {
        token: csrf.csrf
    }
}

export default connect(mapStateToProps)(Contact)
