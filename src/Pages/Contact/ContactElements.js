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
    background: linear-gradient(rgba(17, 17, 17, .8) 0%, 
                                rgba(17, 17, 17, .3) 20%,
                                rgba(17, 17, 17, .9) 70%,
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
        font-size: 32px;
    }
`

export const ContactContainer = styled.div`
    background-color: white;
    color: black;
    max-width: 800px;
    padding: 50px 200px;
    margin-top: 12vh;
    display: flex;
    justify-content: left;
    margin-bottom: 100px;

    @media screen and (max-width: 768px) {
        padding: 20px;
    }
`

export const ContactForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const Title = styled.h2`
    font-size: 38px;
    font-weight: 500;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        margin-bottom: 1em;
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    margin: 16px 16px 16px 0;
    letter-spacing: 1px;
    width: 100%;

    @media screen and (max-width: 768px) {
        margin: 8px 0;
    }

    &.half {
        width: calc(50% - 16px);
        box-sizing: border-box;

        @media screen and (max-width: 768px) {
            width: 100%;
        }
    }

    > span {
        font-size: 12px;
        margin-bottom: 4px;
        text-transform: uppercase;
        font-weight: 500;
        color: #333333;
    }

    > input, textarea {
        padding: 16px 16px;
        border: 1px solid #C5C5C5;
        border-radius: 4px;
        color: #111111;
        font-size: 16px;
        letter-spacing: 1px;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: rgba(0, 0, 0, .6);
            font-size: 14px;
        }
    }
`

export const SubmitButton = styled.input`
    background-color: #FF4F00;
    padding: 8px 16px;
    border-radius: 4px;
    color: white;
    box-shadow: 1px 1px 1px #C94001;
    cursor: pointer;
    position: relative;
    transition: all .2s ease-in-out;
    outline: none;
    border: none;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;

    margin: 16px 16px 0 auto;

    &:hover, &:active {
        background-color: #C94001;
        transition: all .2s ease-in-out;
    }
`