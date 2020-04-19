import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-5 col-xl-4 col-md-5 col-12 text-center">
                        <div className="contact-info">
                            <img src="/img/logo-mgutu.png" alt="logo"/>
                                <div className="contact-info__text">
                                    Москва, Костомаровская наб., д. 29 <br/>
                                    8 (495) 917 - 08 - 47 <br/>
                                    priemka@mgkit.ru <br/>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-xl-7 col-md-6 offset-md-1 col-12 text-center">

                        <ul className="links">
                            <li>
                                <a href="https://vk.com/unikitpage" title="Vkontakte" target="_blank"><img
                                    src="/img/vk.svg" alt="Vkontakte"/></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/vuzmgutu/" title="Facebook" target="_blank"><img
                                    src="/img/facebook.svg" alt="Facebook"/></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/hashtag/mgutu" title="Twitter" target="_blank"><img
                                    src="/img/twitter.svg" alt="Twitter"/></a>
                            </li>
                            <li>
                                <a href="https://groups.google.com/a/mgkit.ru/forum/#!forum/students"
                                   title="Google Drive" target="_blank"><img src="/img/drive.svg"
                                                                             alt="Google Drive"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="line"/>

            <div className="college text-center">
                2020 - Университетский колледж информационных технологий
            </div>
        </footer>
    )
}

export default Footer;
