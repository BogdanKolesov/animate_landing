import React from 'react';
import { Section, Container, ColumnLeft, ColumnRight } from './InfoSecrion.elements';
import { Button } from '../../atoms';

const InfoSection = ({ heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image }) => {
    return (
        <Section>
            <Container>
                <ColumnLeft reverse={reverse} >
                    <h3>{heading}</h3>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button primary to='/homes'>{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt="home" />
                </ColumnRight>
            </Container>
        </Section >
    );
};

export default InfoSection;