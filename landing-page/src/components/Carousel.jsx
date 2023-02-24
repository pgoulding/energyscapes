import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Slider from 'react-slick';

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
        {
        breakpoint: 1280,
        settings: {
            slidesToShow: 4,
        },
        },
        {
        breakpoint: 960,
        settings: {
            slidesToShow: 3,
        },
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
        },
        },
        {
        breakpoint: 400,
        settings: {
            slidesToShow: 1,
        },
        },
    ],
};

const Carousel = ({ items }) => {
    const classes = useTheme();
    const [isPaused, setIsPaused] = useState(false);

    const handlePause = (isPaused) => {
        setIsPaused(isPaused);
    };

    const handlePrev = () => {
        if (!isPaused) {
        slider.slickPrev();
        }
    };

    const handleNext = () => {
        if (!isPaused) {
        slider.slickNext();
        }
    };

    let slider;

    return (
        <div className={classes.root}>
            <Slider className={classes.slider} pauseOnHover={true}>
            {items.map((item, index) => (
                <div key={index}>
                    <img src={item.image} alt={item.name} />
                </div>
                ))}
            </Slider>
            <div className={`${classes.arrow} left`} onClick={handlePrev}>
                &lt;
            </div>
            <div className={`${classes.arrow} right`} onClick={handleNext}>
                &gt;
            </div>
        </div>
    );
};

export default Carousel;