import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-md-2 col-3">
                        <Link to="/"><img src="/img/logo.png" alt="logo" className="img-fluid"/></Link>
                    </div>
                    <div className="col-lg-5 col-md-9 col-6 offset-lg-0">
                        <h3>
                            Университетский колледж информационных технологий
                        </h3>
                    </div>
                    <div className="col-3 col-md-1 d-lg-none">
                        <a href="#" id="menu-bar">
                            <svg className="ham hamRotate" viewBox="0 0 100 100" width="60">
                                <path
                                    className="line top"
                                    d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"/>
                                <path
                                    className="line middle"
                                    d="m 70,50 h -40"/>
                                <path
                                    className="line bottom"
                                    d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"/>
                            </svg>
                        </a>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block justify-content-center">
                        <div className="telephone">
                    <span className="telephone__text">
                        Телефон приемной комиссии
                    </span>
                            <span className="telephone__number">
                         +7 901 732 15 18
                    </span>
                        </div>
                    </div>
                </div>
                <nav>
                    <ul className="menu">
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        <li>
                            <span>
                                Сведения
                                <img src="/img/menu-down.svg" alt="dropdown"/>
                            </span>
                            <ul className="submenu">
                                <li>
                                    <Link to="/about">Основные сведения</Link>
                                </li>
                                <li>
                                    <Link to="/document">Документы</Link>
                                </li>
                                <li>
                                    <Link to="/education">Образование</Link>
                                </li>
                                <li>
                                    <Link to="/leaders">Руководство</Link>
                                </li>
                                <li>
                                    <Link to="/vacant_places">Вакантные места для перевода</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>
                                Студенту
                                <img src="/img/menu-down.svg" alt="dropdown"/>
                            </span>
                            <ul className="submenu">
                                <li>
                                    <Link to="/main-schedule">Расписание занятий</Link>
                                </li>
                                <li>
                                    <Link to="/materials">Учебные материалы</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>
                                Абитуриенту
                                <img src="/img/menu-down.svg" alt="dropdown"/>
                            </span>
                            <ul className="submenu">
                                <li>
                                    <Link to="/specialty">Специальности</Link>
                                </li>
                                <li>
                                    <Link to="/plan">План приема на
                                                    2020 - 2021
                                                    год</Link>
                                </li>
                                <li>
                                    <Link to="/open-days">Дни открытых дверей</Link>
                                </li>
                                <li>
                                    <Link to="/paid">Стоимость обучения</Link>
                                </li>
                                <li>
                                    <Link to="/statistics">Статистика набора
                                                          2020 - 2021</Link>
                                </li>
                                <li>
                                    <Link to="/entering-documents">Документы для поступления</Link>
                                </li>
                                <li>
                                    <Link to="/questions">Вопросы по поступлению</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/contacts">Контакты</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
