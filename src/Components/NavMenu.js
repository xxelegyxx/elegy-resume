import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavMenuStyles = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: qrem 0;
    background-color: #262626;

    ul {
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
        text-align:center;
    }

    li {
        display: inline-block;
        border-radius: 8px;
        transition: .3s ease background-color;
        &:hover {
            background:color: #262626;
        }
    }
    a {
            font-family: 'Open Sans', sans-serif;
            padding: 1rem 1rem;
            font-size: 2rem;
            color: #BCB4B4;
            outline: none;
    }
    .active {
        color: #FFFFFF;
    }
            
    

`;

export default function NavMenu() {
    return(
        // <h1>Nav Menu</h1>
        <NavMenuStyles>
            <ul>
                <li>
                    <NavLink to="/" exact> Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </NavMenuStyles>
    )
}