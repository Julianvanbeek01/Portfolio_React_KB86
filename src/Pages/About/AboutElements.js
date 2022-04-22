import styled from 'styled-components';

export const Container = styled.div`
    background-color: #111;
`

export const Hero = styled.div`
    background: url(${props => props.image}) center 25%;
    width: 100vw;
    height: 90vh;
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
    background: linear-gradient(rgba(17, 17, 17, .8) 0%, 
                                rgba(17, 17, 17, .5) 40%,
                                rgba(17, 17, 17, .9) 90%,
                                rgba(17, 17, 17, 1) 100%);
    backdrop-filter: blur(20px);
    height: 68vh;
    padding: 22vh 150px 0 150px;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;

    @media screen and (max-width: 768px) {
        padding: 15vh 20px 0 20px;  
        width: calc(100vw - 40px);
        height: 75vh;
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
        font-size: 32px;
    }
`

export const AboutContainer = styled.div`
    background-color: white;
    color: black;
    max-width: 800px;
    padding: 50px 200px;
    text-align: left;
    margin-top: 15vh;

    > h2 {
        font-weight: 400;
        font-size: 36px;
        margin-bottom: 8px;
    }

    > p {
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 1px;
    }

    @media screen and (max-width: 768px) {
        margin: 15vh 10px 0 10px;
        padding: 20px;

        > h2 {
            font-size: 24px;
            font-weight: 500;
        }

        > p {
            font-size: 16px;
        }
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

export const Heading = styled.h2`
    font-size: 32px;
    color: white;
    font-weight: 500;

    &:after {
        content: '';
        background-color: white;
        display: block;
        height: 2px;
        width: 140px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin: .5em 0;
    }


    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
`

export const Experience = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;

    > p {
        font-size: 18px;
        color: rgba(255, 255, 255, .7);
        letter-spacing: 1px;
        width: 40vw;
        line-height: 28px;
        font-weight: 300;
        margin-bottom: 60px;
    }

    @media screen and (max-width: 768px) {
        > p {
            width: calc(100vw - 40px);
            text-align: left;
            font-size: 16px;
        }
    }
`

export const TimeLine = styled.table`
    width: 70vw;
    text-align: center;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 100vw;
        padding: 0 20px;
        text-align: left;
    }

    > thead > tr > th {
        font-size: 22px;
        font-weight: 500;
        padding: 8px 0;
        width: calc(100% / 3);

        @media screen and (max-width: 768px) {
            font-size: 18px;
        }
    }

    > tbody > tr > td {
        font-size: 18px;
        color: rgba(255, 255, 255, .7);
        padding-bottom: 16px;
        font-weight: 300;

        @media screen and (max-width: 768px) {
            font-size: 14px;
        }
    }
`

export const Skills = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;

    > p {
        font-size: 18px;
        color: rgba(255, 255, 255, .7);
        letter-spacing: 1px;
        width: 40vw;
        line-height: 28px;
        font-weight: 300;
        margin-bottom: 60px;

        @media screen and (max-width: 768px) {
            width: calc(100vw - 40px);
            text-align: left;
            font-size: 16px; 
        }
    }
`

export const SkillsList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1400px;
    width: 80vw;
`