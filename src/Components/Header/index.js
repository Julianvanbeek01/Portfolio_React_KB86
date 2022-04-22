import React, { useState, useEffect } from 'react'
import { Container, Logo, Nav, Link, Name, Function, Hamburger, Line } from './HeaderElements';

const Header = () => {
    const active = (navData) => navData.isActive ? "active" : "";

    const [activeMenu, setActiveMenu] = useState(false);

    const handleMenuClick = () => {
        setActiveMenu(activeMenu ? false : true);
    }

    const handleLinkClick = () => {
        setActiveMenu(false);
    }

    return (
        <Container>
            <Logo>
                <Name>Julian van Beek</Name>
                <Function>Web Designer</Function>
            </Logo>
            <Hamburger className={activeMenu ? "active" : ""} onClick={handleMenuClick}>
                <Line />
                <Line />
                <Line />
            </Hamburger>
            <Nav className={activeMenu ? "active" : ""}>
                <Link to='/' className={active} onClick={handleLinkClick}>
                    Home
                </Link>
                <Link to='/portfolio' className={active} onClick={handleLinkClick}>
                    Portfolio
                </Link>
                <Link to='/about' className={active} onClick={handleLinkClick}>
                    About
                </Link>
                <Link to='/contact' className={active} onClick={handleLinkClick}>
                    Contact
                </Link>
            </Nav>
        </Container>
    );
}

export default Header;