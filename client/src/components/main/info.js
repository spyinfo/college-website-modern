import React from "react";
import News from "../news/news";
import Gallery from "./gallery";

const Info = () => {

    return (
        <section className="info">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="info__text">
                            Сегодня колледж — это многопрофильное учебное заведение, обладающее высоким административным
                            и педагогическим ресурсом, позволяющим готовить высококлассных специалистов в области
                            IT-технологий, рекламы и земельно-имущественных отношений, гармонично развитых личностей,
                            грамотных конкурентоспособных на рынке труда специалистов. Контингент студентов насчитывает
                            свыше 1200 человек, профессорско-преподавательский состав — свыше 60 человек.
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1 col-md-6 offset-md-3">
                        <News/>
                    </div>
                </div>
            </div>
            <Gallery/>
        </section>
    )
}

export default Info;
