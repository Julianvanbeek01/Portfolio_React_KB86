import styled from 'styled-components';

export const Container = styled.div`
    margin: 1em 2em;

    @media screen and (max-width: 768px) {
        display: block;
        width: 92px;
        height: 92px;
    }

    > span {
        color: white;
        display: flex;
        flex-direction: column;
        font-weight: 300;
    }
`