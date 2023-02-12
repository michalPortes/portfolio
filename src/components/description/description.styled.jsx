import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgb(58, 58, 60);
    width: 40%;

    @media (max-width: 768px) {
        width: auto;
    }
`

export const Title = styled.h1`
    color: rgb(58, 58, 60);
    padding: 1rem;
    text-align: center; 
    @media (max-width: 768px) {
        width: auto;
    }
`
export const SubTitle = styled.h3`
    color: rgb(58, 58, 60);
    margin: 1rem;
    @media (max-width: 768px) {
        width: auto;
        margin: 3rem  auto 1rem  auto; 
    }
`
export const Paragraph = styled.p`
    color: rgba(99, 99, 102, 0.678);
    @media (max-width: 768px) {
        text-align: center;
        width: auto;
        margin-bottom: 10rem;
    }
`
