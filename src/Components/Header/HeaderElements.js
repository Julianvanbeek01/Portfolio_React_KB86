import styled from 'styled-components';
import { NavLink } from "react-router-dom";


/* Header Container */
export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px 150px;
    position: absolute;
    width: calc(100vw - 300px);
    z-index: 3;

    @media screen and (max-width: 768px) {
        padding: 12px 24px;
        width: calc(100vw - 48px);
        justify-content: center;
        align-items: center;
    }
`
/* End Header Container */


/* Logo */
export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    transform: translateY(2px);
    z-index: 2;
`

export const Name = styled.span`
    font-size: 24px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`

export const Function = styled.span`
    font-size: 14px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, .7);
    letter-spacing: 2px;
    transform: translateY(-4px);

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`
/* End Logo */

/* Navigation Menu Container */
export const Nav = styled.nav`

    @media screen and (max-width: 768px) {
        transition: all .25s ease-in-out;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        transform: translateY(-100vh);
        padding-top: 10vh;

        &.active {
            transform: translateY(0);
            transition: all .25s ease-in-out;
            z-index: 3;
            position: fixed;
            background-color: #111;
        }
    }
`
/* Navigation Menu Container End */

/* Navigation Menu Link */
export const Link = styled(NavLink)`
    text-decoration: none;
    color: white;
    font-size: 18px;
    margin: 0 20px;
    color: rgba(255, 255, 255, .7);

    &.active {
        color: white;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            display: block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: white;
            left: 50%;
            transform: translateX(-50%);
            margin-top: 4px;
        }
    }

    @media screen and (max-width: 768px) {
        font-size: 24px;
        margin: 10px 0;

        &.active {
            &:after {
                transform: translateX(-16px) translateY(-50%);
                left: initial;
                top: 50%;
                margin-top: 0;
                width: 8px;
                height: 8px;
            }
        }
    }
`
/* Navigation Menu Link End */

/* Hamburger */
export const Hamburger = styled.div`
    transition: all .25s ease-in-out;
    position: absolute;
    right: 24px;
    display: none;
    z-index: 5;

    &.active {
        transform: rotate(45deg);
        position: fixed;
    }

    &.active > span:nth-child(2) {
        width: 0;
    }

    &.active > span:nth-child(1) {
        transform: translateY(9px);
    }

    &.active > span:nth-child(3) {
        transform: translateY(-9px) rotate(90deg);
    }

    @media screen and (max-width: 768px) {
        display: block;
    }
`

export const Line = styled.span`
    display: block;
    width: 28px;
    height: 2px;
    border-radius: 9999px;
    background-color: white;
    transition: all .25s ease-in-out;
    
    :not(:last-child) {
        margin-bottom: 7px;
    }
`
/* Hamburger */