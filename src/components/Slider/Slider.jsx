import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from './Slider.module.css';

import slide1 from '../../assets/images/slider/slide1.jpg'; 
import slide2 from '../../assets/images/slider/slide2.jpg'; 
import slide3 from '../../assets/images/slider/slide3.jpg'; 
import slide4 from '../../assets/images/slider/slide4.jpg'; 
import slide5 from '../../assets/images/slider/slide5.jpg'; 

const slides = [
    {
        imageUrl: slide1,
        title: "First Slide Title",
        description: "This is the first slide description.",
        buttonText: "Learn More",
        buttonLink: "#"
    },
    {
        imageUrl: slide2,
        title: "Second Slide Title",
        description: "This is the second slide description.",
        buttonText: "Learn More",
        buttonLink: "#"
    },
    {
        imageUrl: slide3,
        title: "Third Slide Title",
        description: "This is the third slide description.",
        buttonText: "Learn More",
        buttonLink: "#"
    },
    {
        imageUrl: slide4,
        title: "Fourth Slide Title",
        description: "This is the fourth slide description.",
        buttonText: "Learn More",
        buttonLink: "#"
    },
    {
        imageUrl: slide5,
        title: "Fifth Slide Title",
        description: "This is the fifth slide description.",
        buttonText: "Learn More",
        buttonLink: "#"
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
    });

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // 3 секунды

        return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
    }, [currentSlide]); // Перезапуск интервала при изменении currentSlide

    return (
        <div className={styles.sliderContainer} {...handlers}>
            <div
                className={styles.slider}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, idx) => (
                    <div
                        className={styles.slide}
                        key={idx}
                        style={{ backgroundImage: `url(${slide.imageUrl})` }}
                    >
                        <div className={styles.content}>
                            <h2 className={styles.title}>{slide.title}</h2>
                            <p className={styles.description}>{slide.description}</p>
                            <a href={slide.buttonLink} className={styles.button}>
                                {slide.buttonText}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.navigationDots}>
                {slides.map((_, idx) => (
                    <span
                        key={idx}
                        className={`${styles.dot} ${idx === currentSlide ? styles.active : ''}`}
                        onClick={() => setCurrentSlide(idx)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;
