import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-md-2 col-3">
                        <a href="/"><img src="/img/logo.png" alt="logo" className="img-fluid"/></a>
                    </div>
                    <div className="col-lg-5 col-md-9 col-6 offset-lg-0">
                        <h3>
                            Университетский колледж информационных технологий
                        </h3>
                    </div>
                    <div className="col-3 col-md-1 d-lg-none">
                        <a href="#" id="menu-bar" onClick="openNav()">
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
                            <a href="/">Главная</a>
                        </li>
                        <li>
                            <a>
                                Сведения
                                <img src="/img/menu-down.svg" alt="dropdown"/>
                            </a>
                            <ul className="submenu">
                                <li>
                                    <a href="/about">Основные сведения</a>
                                </li>
                                <li>
                                    <a href="/document">Документы</a>
                                </li>
                                <li>
                                    <a href="/education">Образование</a>
                                </li>
                                <li>
                                    <a href="/leaders">Руководство</a>
                                </li>
                                <li>
                                    <a href="/vacant_places">Вакантные места для перевода</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>
                                Студенту
                                <img src="/img/menu-down.svg" alt="dropdown"/>
                            </a>
                            <ul className="submenu">
                                <li>
                                    <a href="/main-schedule">Расписание занятий</a>
                                </li>
                                <li>
                                    <a href="/materials">Учебные материалы</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>
                                Абитуриенту
                                <img src="/img/menu-down.svg" alt="dropdown"/>
                            </a>
                            <ul className="submenu">
                                <li>
                                    <a href="/specialty">Специальности</a>
                                </li>
                                <li>
                                    <a href="/plan">План приема на
                                                    2020 - 2021
                                                    год</a>
                                </li>
                                <li>
                                    <a href="/open-days">Дни открытых дверей</a>
                                </li>
                                <li>
                                    <a href="/paid">Стоимость обучения</a>
                                </li>
                                <li>
                                    <a href="/statistics">Статистика набора
                                                          2020 - 2021</a>
                                </li>
                                <li>
                                    <a href="/entering-documents">Документы для поступления</a>
                                </li>
                                <li>
                                    <a href="/questions">Вопросы по поступлению</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/contacts">Контакты</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
