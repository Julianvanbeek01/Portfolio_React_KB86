import styled from 'styled-components';

export const Container = styled.div`
    background-color: #111;
    min-height: calc(100vh - 88px);
`

export const Hero = styled.div`
    background: url(${props => props.image}) center 25%;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: 110%;
    z-index: 1;

    @media screen and (max-width: 768px) {
        background-size: 300%;
        background-position: 15% 70%;
    }
`

export const Gradient = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100vw - 300px);
    background: linear-gradient(rgba(17, 17, 17, .2) 0%, 
                                rgba(17, 17, 17, .1) 30%,
                                rgba(17, 17, 17, .9) 90%,
                                rgba(17, 17, 17, 1) 100%);
    backdrop-filter: blur(10px);
    padding: 22vh 150px 0 150px;
    z-index: 2;
    top: 0;
    left: 0;

    @media screen and (max-width: 768px) {
        padding: 15vh 20px 0 20px;  
        width: calc(100vw - 40px);
        min-height: 85vh;
        background: linear-gradient(rgba(17, 17, 17, 1) 0%, 
                                rgba(17, 17, 17, .3) 20%,
                                rgba(17, 17, 17, .9) 90%,
                                rgba(17, 17, 17, 1) 100%);
    }
`

export const PageTitle = styled.span`
    color: white;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;

    &:after {
        content: '';
        background-color: white;
        display: block;
        height: 2px;
        width: 140px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin: .5em 0 .5em 0;
    }
`

export const SubTitle = styled.h1`
    color: white;
    font-size: 52px;
    font-weight: 500;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 100px;
    color: white;
    z-index: 3;
    text-align: center;
`

export const ProjectList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1300px;
    margin: 0 auto 4em auto;

    @media screen and (max-width: 768px) {
        margin-top: 10vh;
    }
`