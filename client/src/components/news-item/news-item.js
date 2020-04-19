import React from "react";

const NewsItem = ({name, date, id}) => {
    return (
        <div className="news__item">
            <div className="news__title">
                <a href={`/news/${id}`} className="news__link">
                    {name}
                </a>
            </div>
            <div className="news__date">
                {date}
            </div>
        </div>
    )
}

export default NewsItem;
