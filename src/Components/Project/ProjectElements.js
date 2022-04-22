import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* Header Container */
export const Container = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    box-sizing: border-box;
    max-width: 600px;
    margin: 24px;
    height: 350px;
    position: relative;
    width: 50%;
    border-radius: 4px;

    @media screen and (max-width: 768px) {
        height: 15em;
        max-width: inherit;
        margin: 0 0 24px 0;
        width: 100%;
    }
`

export const Details = styled.div`
    position: absolute;
    bottom: 1em;
    left: 1em;
`

export const Tags = styled.ul`
    color: white;
    display: flex;
    list-style-type: none;
`

export const Tag = styled.li`
    font-size: 10px;
    margin-right: .5em;
    padding: 1px 4px;
    border: 1px solid white;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: 500;
`

export const ProjectTitle = styled.h3`
    color: white;
    text-transform: capitalize;
    font-size: 22px;
    font-weight: 500;
    margin: 4px 0;

    @media screen and (max-width: 768px) {
        font-size: 18px;
        margin: 0;
    }
`

export const ProjectButton = styled(Link)`
    color: white;
    font-size: 12px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    padding: 8px 16px;
    right: 16px;
    position: relative;

    &:hover {
        text-decoration: underline;
    }

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`