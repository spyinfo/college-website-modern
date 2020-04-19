import React from "react";
import "./error-display.scss";
import img from "./minus-512.png";

const ErrorDisplay = () => {
    return (
        <div className="error-display">
            <img src={img} alt="error" className="error-display__img"/>
            <span className="error-display__item error-display__item_main">Упс! Кажется что-то пошло не так!</span>
            <span className="error-display__item">Повторите попытку!</span>
        </div>
    )
}

export default ErrorDisplay;
