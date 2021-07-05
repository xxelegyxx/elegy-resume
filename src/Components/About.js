import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import AboutImg from '../Assets/Images/AboutImg.jpg'

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
    margin: 0 auto;
    border: 2px solid var(--gray-1);
    
}

.about_text {
    margin: 0 auto;
    
    
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
                        Elegy is a songwriter, producer, 3D animator and programmer from New York. While he's new to coding, he has aspirations of eventually programming games using the characters he designs.
                        A natural creator, he has been loving his coding journey so far and being able to express himself in a new medium.
                        
                        </PText>
                </div>
            </div>
                
            
            
        </AboutStyles>
    )
}
