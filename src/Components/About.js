import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import AboutImg from '../Assets/Images/AboutImg.jpg';

const AboutStyles = styled.div`

margin: 5rem;
display:flex;
flex-direction: row;
align-items: center;

.about_column {
    width: 50%;
    margin: 10px;
    padding:10px;
}
.about_img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin-top: 5vh;
    border: 2px solid var(--gray-1);
    border-radius: 10px;
    overflow: hidden;
}

.about_text {
    margin: 0 auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    
    
}

button {
    border: 2px solid white;
    border-color: #e7e7e7;
    border-radius: 10px;
    background-color: #262626;
    margin-top: 50px;
    padding: 8px;
    
}
button:hover {
    background: #363636;
} 
`;

export default function AboutSection() {
    return (
        <AboutStyles>
            <div className="about_column">
                <div className="about_img">
                        <img src={AboutImg} alt="about_image"></img>
                    </div>
            </div>
            <div className="about_column">
                <div className="about_text">
                        <PText>
                        I'm a songwriter, producer, 3D animator and programmer from New York. While I'm new to coding, I have aspirations of eventually programming games using the characters I design.
                        A natural creator, I've been loving my coding journey so far and being able to express myself in a new medium.
                        
                        </PText>
                        <button className="button" type="button">
                            <a href="https://docs.google.com/document/d/1mMNmSTVLSgk8Wfc1wzQZRWD7ULrIqqrNQimhiw5l6gU/edit?usp=sharing" target="_blank"><PText>Resume
                                </PText></a>
                            </button>
                </div>
            </div>
                
            
            
        </AboutStyles>
    )
}
