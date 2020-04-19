import React from "react";
import NewsItem from "../news-item/news-item";

const News = () => {
    return (
        <div className="news">
            <div className="news__head">
                Новости
            </div>


            <NewsItem name="Первая новость" date="19.04.2020" id="1"/>
            <NewsItem name="Вторая новость" date="19.04.2020" id="2"/>
            <NewsItem name="Вторая новость" date="19.04.2020" id="3"/>


            <div className="news__all-news">
                <a href="/all_news/1"><span className="hypertext">Все новости</span></a>
            </div>
        </div>
    )
}

export default News;

