import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color: #111;
`

export const Hero = styled.div`
    background-image: url(${props => props.image});
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-color: black;
    background-size: 110%;
    background-position-x: 30vw;
    background-position-y: 55%;
    z-index: 1;

    @media screen and (max-width: 768px) {
        background-size: 300%;
        background-position: 15% 70%;
    }
`

export const Gradient = styled.div`
    display: block;
    width: calc(100vw - 300px);
    background: linear-gradient(rgba(17, 17, 17, 1) 0%, 
                                rgba(17, 17, 17, 0) 20%,
                                rgba(17, 17, 17, .9) 70%,
                                rgba(17, 17, 17, 1) 100%);
    height: 60vh;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    padding: 40vh 150px 0 150px;

    @media screen and (max-width: 768px) {
        padding: 50vh 20px 0 20px;  
        width: calc(100vw - 40px);
        height: 50vh;
        background: linear-gradient(rgba(17, 17, 17, 1) 0%, 
                                rgba(17, 17, 17, 0) 20%,
                                rgba(17, 17, 17, .9) 90%,
                                rgba(17, 17, 17, 1) 100%);
    }
`

export const Name = styled.span`
    font-size: 24px;

    display: block;
    color: rgba(255, 255, 255, .7);
    text-transform: uppercase;
    letter-spacing: 2px;
    transform: translateY(16px);

    @media screen and (max-width: 768px) {
        font-size: 14px;
        transform: translateY(4px);
    }
`

export const Function = styled.h1`
    display: block;
    font-weight: 500;
    font-size: 72px;
    color: white;

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }
`

export const Characteristics = styled.div`
    margin-bottom: 2em;
    max-width: 600px;

    @media screen and (max-wdith: 768px) {
        max-width: 100%;
    }
`

export const Characteristic = styled.span`
    color: rgba(255, 255, 255, .7);
    white-space: pre;
    letter-spacing: 1px;
    font-weight: 300;

    &:after {       
        content: '';
        display: inline-block;
        height: 16px;
        width: 2px;
        background-color: white;
        margin-right: 1.5em;
        position: relative;
        left: .75em;
        transform: translateY(2px);
    }
`

export const Button = styled(Link)`
    background-color: #FF4F00;
    padding: 8px 3em;
    border-radius: 4px;
    color: white;
    box-shadow: 1px 1px 1px #C94001;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    transition: all .2s ease-in-out;

    &:hover, &:active {
        background-color: #C94001;
        transition: all .2s ease-in-out;
    }

    @media screen and (max-width: 768px) {
        margin: 0 auto;
        width: 60vw;
        display: block;
        text-align: center;
        margin-top: 3em;
    }
`

export const Scroll = styled.span`
    display: block;
    position: absolute;
    height: 2em;
    width: 1em;
    top: calc(100vh - 4.5em);
    left: 50%;
    transform: translateX(-50%);
    border: 2px solid #fff;
    border-radius: 1em;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        height: 1.5em;
        width: .75em;
    }
`

export const ScrollWheel = styled.span`
    display: block;
    position: absolute;
    left: 50%;
    background: #fff;
    height: .4em;
    width: .4em;
    top: .3em;
    margin-left: -.2em;
    border-radius: 50%;
    transform-origin: top center;
    backface-visibility: hidden;
    animation: scroll_2 2s ease-out infinite;

    @keyframes scroll_2 {
        0%   { transform: translateY(0); opacity: 1; }
        25%  { opacity: 1; }
        75%  { transform: translateY(.375em); opacity: 0; }
        100% { transform: translateY(0); opacity: 0; }
    }
    
    @media screen and (max-width: 768px) {
        height: .25em;
        width: .25em;
    }
`


export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 24px;
    padding-bottom: 100px;

    > h2 {
        color: white;
        font-size: 24px;
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
            margin: .5em 0 1em 0;
        }
    }
`

export const ProjectList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1300px;
    margin: 0 auto 4em auto;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`