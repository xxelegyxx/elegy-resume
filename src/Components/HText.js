import React from 'react';
import styled from 'styled-components';

const HStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 9rem;
    color: var(--white);
    margin-top: 5vh;
    margin-left: 10vh;
    padding: 10px;  
    font-size: 1.8rem;
    line-height:1.3rem;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 20px;
    line-height: 1.5em;
`;

export default function HText ({ children }) {
    return (
        <HStyle>
            <h1>{children}</h1>
        </HStyle>
    )
}
