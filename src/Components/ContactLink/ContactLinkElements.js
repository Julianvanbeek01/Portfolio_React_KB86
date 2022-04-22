import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* Header Container */
export const Container = styled.div`
    text-align: center;
    margin-top: 16px;

    > h3 {
        color: rgba(255, 255, 255, .7);
        font-size: 18px;
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
            margin: .5em 0 1em 0;
        }

        @media screen and (max-width: 768px) {
            font-size: 14px;
        }
    }

    @media screen and (max-width: 768px) {
    }
`

export const PageLink = styled(Link)`
    font-size: 72px;
    color: white;
    font-weight: 500;
    text-decoration: none;

    &:after {
        content: '';
        background-color: white;
        display: block;
        height: 4px;
        width: 0;
        position: relative;
        margin-top: 8px;
        transition: .4s all ease-in-out;
    }

    &:hover:after {
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }
`