import React from 'react';
import styled from 'styled-components';
import PText from './PText';
// import AboutImg from '../Assets/Images/AboutImg.jpg';


const PortfolioStyles = styled.div`
margin-top: 25vh;
padding: 50px;

.links {
    display:flex;
    flex-direction: row;
    
    float: right;
    margin: 10px;
    
}

h1 {
max-width: 500px;
margin: 0 auto;
font-size: 1.8rem;
line-height:1.3rem;
font-family: 'Open Sans', sans-serif;
letter-spacing: 4px;
line-height: 1.5em;
}

button {
    border: 2px solid white;
    border-color: #e7e7e7;
    border-radius: 10px;
    background-color: #262626;
    margin: 2px auto;
    padding: 5px;
    
}
button:hover {
    background: #363636;
} 

.portfolio_img {
    max-width: 100px;
    width: 100%;
    height: 60px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
}
`;

export default function PortfolioCard({children}) {
    return (
        <PortfolioStyles>
            <div className="portfolio_card">
                 {/* <div className="portfolio_img">
                <img src={PlaneticImg} alt="planetic_image"></img>
                </div> */}
                <div className="project_text">
                    <div className="project_title">
                        <h1>PROJECT TITLE</h1>
                    </div>
                    <div className="project_desc">
                        <PText>Project Desc</PText>
                    </div>
                </div>
                    <div className="links">
                        <div className="github">
                            <button href="GITHUBLINK">
                                <PText>
                                    GITHUB
                                </PText></button>
                        </div>
                        
                        <div className="deployed">
                        <button href="DEPLOYED">
                                <PText>
                                    Deployed Site
                                </PText>
                        </button>
                        </div>
                    </div>
            </div>
           
            
        </PortfolioStyles>
    )
}
