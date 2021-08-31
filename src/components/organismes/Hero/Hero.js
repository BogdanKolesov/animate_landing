import React, { useState, useRef, useEffect } from 'react';
import { HeroSection, HeroWrapper, HeroSlider, HeroImage, HeroContent, HeroButton, HeroSlide, Arrow, SliderButtons, PrevArrow, NextArrow } from './Hero.elements';


const Hero = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }
        timeout.current = setTimeout(nextSlide, 3500)

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length]);

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider >
                                    <HeroImage src={slide.image} alt={slide.alt} />
                                    <HeroContent>
                                        <h2>{slide.title}</h2>
                                        <p>{slide.price}</p>
                                        <HeroButton to={slide.path} primary>
                                            {slide.label}
                                            <Arrow />
                                        </HeroButton>
                                    </HeroContent>
                                </HeroSlider>
                            )}
                        </HeroSlide>
                    )
                })}
            </HeroWrapper>
            <SliderButtons>
                <PrevArrow onClick={prevSlide} />
                <NextArrow onClick={nextSlide} />
            </SliderButtons>
        </HeroSection>
    );
};

export default Hero;