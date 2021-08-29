import React from 'react';
import { HeroSection, HeroWrapper, HeroSlider, HeroImage, HeroContent, HeroButton, Arrow } from './Hero.elements';
import { SliderData } from '../../../data/SliderData';


const Hero = ({ slides }) => {
    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlider key={index}>
                            <HeroImage />
                            <HeroContent>
                                <h2>{slide.title}</h2>
                                <p>{slide.price}</p>
                                <HeroButton to={slide.path} primary>
                                    {slide.label}
                                    <Arrow />
                                </HeroButton>
                            </HeroContent>
                        </HeroSlider>
                    )
                })}
            </HeroWrapper>
        </HeroSection>
    );
};

export default Hero;