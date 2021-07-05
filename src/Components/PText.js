import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
max-width: 500px;
margin: 0 auto;
font-size: 1.8rem;
line-height:1.3rem;
font-family: 'Open Sans', sans-serif;
letter-spacing: 2px;
line-height: 1.5em;
`;

export default function PText ({ children }) {
    return (
        <PStyle>
            <p>{children}</p>
        </PStyle>
    )
}
