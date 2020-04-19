import React from "react";
import Slider from "react-slick";

const Gallery = () => {

    const sliderSettings = {
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: "my-dots",
        adaptiveHeight: true,
        autoplaySpeed: 3500
    }

    return (
        <div className="gallery">
            <div className="container">
                <h2 className="gallery__title text-center">
                    Галерея
                </h2>
                <div className="row align-items-center">
                    <div className="col-10 offset-1">
                        <div className="gallery__images">
                            <div className="card">
                                <div className="carousel card-block">
                                    <Slider {...sliderSettings}>
                                        <img className="card-img-top" src="/img/DdnuRtUPQ8.jpg" alt="DdnuRtUPQ8.jpg"/>
                                        <img className="card-img-top" src="/img/oTHIj3KCrC.jpg" alt="oTHIj3KCrC.jpg"/>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
