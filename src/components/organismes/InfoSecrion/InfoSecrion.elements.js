import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 2rem 0rem ;
`;

export const Container = styled.div`
    padding: (calc((100vw - 1300px) / 2))rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;

export const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '2' : '1')};

    h3{
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p{
        margin-bottom: 2rem;
        @media screen and (max-width: 768px){
        order: ${({ reverse }) => (reverse ? '2' : '1')};
    }
    }

`;

export const ColumnRight = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    order: ${({ reverse }) => (reverse ? '1' : '2')};

    @media screen and (max-width: 768px){
        order: ${({ reverse }) => (reverse ? '2' : '1')};
    }
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 768px){
            width: 90%;
            height: 90%;
        }
    }

`;

