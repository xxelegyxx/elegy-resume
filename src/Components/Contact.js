import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const ContactStyle = styled.div`

border: 2px solid white;
border-radius:10px;
margin: auto;
margin-top:50vh;
width: 33%  ;
height: auto;
padding 20px;
vertical-align:middle;
background-color: #262626;

.header {
    font-family: 'Open Sans', sans-serif;
    font-size: 9rem;
    color: var(--white);
    margin: 0 auto;
    padding: 10px;  
    font-size: 1.8rem;
    line-height:1.3rem;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 20px;
    line-height: 1.5em;
}

a:hover {
    box-shadow: 2px 2px 2px white;
}
`

export default function ContactComponent() {
    return (
        
        <ContactStyle>
            <div className="header">
                <h1>Contact</h1>
            </div>
            <div className="name-and-email">
            <PText>Joe Wood</PText>
                <a href="mailto:joewoodnyc@gmail.com">
                    <PText>joewoodnyc@gmail.com</PText>
                </a>
                <div className="phone">
                <PText>631-742-9859</PText>
                </div>
            </div>

            <div className="icons">

            </div>
            
        </ContactStyle>

    )
}
