import styled, { css } from 'styled-components';
import { Button } from '../../atoms';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';


export const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

export const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

export const HeroSlide = styled.div`

`;

export const HeroSlider = styled.div`
    
`;

export const HeroImage = styled.img`
    
`;

export const HeroContent = styled.div`
    
`;

export const HeroButton = styled(Button)`
    max-width: 160px;
`;

export const Arrow = styled(IoMdArrowRoundForward)`

`;

export const SliderButtons = styled.div`

`;