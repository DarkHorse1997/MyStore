import { StyledLink, StyledLogo, StyledNavWrapper } from './NavbarStyles';
import React from 'react';

const Logo = (props) => {
    return (
        <StyledLogo >
            {props.children}
        </StyledLogo>
    )
}

const PageLink = (props) => {
    <StyledLink >
        {props.text}
    </StyledLink>
}

const Navbar = () => {
    return (
        <StyledNavWrapper>
            <Logo>
               Super Store 
            </Logo>
            <StyledLink exact to="/">Home</StyledLink>
            <StyledLink to="/Deals">Deals</StyledLink>
            <StyledLink to="/Cart">Cart</StyledLink>
        </StyledNavWrapper>
    )

}

export default Navbar;