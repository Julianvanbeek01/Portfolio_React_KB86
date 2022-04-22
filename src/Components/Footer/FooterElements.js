import styled from 'styled-components';

/* Header Container */
export const Container = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 16px 150px;
    position: absolute;
    width: calc(100vw - 300px);
    z-index: 1;
    background-color: #222222;

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

export const Socials = styled.div`
`