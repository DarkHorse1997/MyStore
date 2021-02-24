import React from "react";
import {
  NavLink
} from "react-router-dom";

import styled from "styled-components";

const StyledLink = styled(NavLink)`
    display:grid;
    place-items: center;
    text-decoration: none;
    color: #ffffff;
    padding:5px;
    font-weight: 525;
    font-size: 1.1rem;
    flex: 1;
    
`

const StyledLogo = styled.div`
    display:grid;
    place-items: left;
    color: #fafafa;
    font-weight: 600;
    font-size: 2rem;
    flex: 15;


`
const StyledNavWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 50px;;
    padding:0 5vw;
    background-color: darkgreen;
`
export {
    StyledLink,
    StyledLogo,
    StyledNavWrapper
}

