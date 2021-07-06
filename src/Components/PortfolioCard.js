import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import LyricbooImg from '../Assets/Images/lyricboo.png';
import budgetImg from '../Assets/Images/budget.png';
import weatherImg from '../Assets/Images/weather.png';
import pwgenImg from '../Assets/Images/pwgen.png';
import planeticImg from '../Assets/Images/Planetic.png'

const PortfolioStyles = styled.div`
margin-top: 25vh;
padding: 50px;

.portfolio_card {
    width: 50vw;
    border: 2px solid white;
    border-radius: 10px;
    display:flex;
    margin: 20px auto;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.portfolio-left {
    width: 33%;
}
.links {
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 10px;
    margin-bottom: auto;
}

.project_text {
    display:flex;
    flex-direction: column;
    align-items: left;
}
.portfolio_right {
    width: 66%;
    display:flex;
    flex-direction: column;
}

h1 {
max-width: 500px;
margin: 0 auto;
margin-top: 10px;
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
    margin: 10px;
    padding: 5px;
    
}
button:hover {
    background: #363636;
} 

.portfolio_img {
    max-width: 200px;
    width: 200px;
    height: 100px;
    margin: 10px 0px 10px 10px;
    border: 2px solid var(--gray-1);
    border-radius: 10px;
    overflow: hidden;
}
`;

export default function PortfolioCard({children}) {
    return (
        <PortfolioStyles>
            <div className="portfolio_card">
                <div className="portfolio-left">
                    <div className="portfolio_img">
                        <img src={LyricbooImg} alt="lyricboo_image"></img>
                    </div>
                </div>
                <div className="portfolio-center">
                    <div className="project_text">
                        <div className="project_title">
                            <h1>Lyricboo</h1>
                        </div>
                        <div className="project_desc">
                            <PText>Lyric search site using Musixmatch and YouTube APIs</PText>
                        </div>
                    </div>
                </div>
                 
                <div className="portfolio-right">
                    <div className="links">
                            <div className="github">
                                <button href="GITHUBLINK">
                                    <PText>
                                        Github
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
               
            </div>

            <div className="portfolio_card">
                <div className="portfolio-left">
                    <div className="portfolio_img">
                        <img src={budgetImg} alt="budget_image"></img>
                    </div>
                </div>
                <div className="portfolio-center">
                    <div className="project_text">
                        <div className="project_title">
                            <h1>Budget Tracker</h1>
                        </div>
                        <div className="project_desc">
                            <PText>Easy-to-use budget tracker application using mongo and node</PText>
                        </div>
                    </div>
                </div>
                 
                <div className="portfolio-right">
                    <div className="links">
                            <div className="github">
                                <button href="GITHUBLINK">
                                    <PText>
                                        Github
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
               
            </div>

            <div className="portfolio_card">
                <div className="portfolio-left">
                    <div className="portfolio_img">
                        <img src={pwgenImg} alt="pwgen_image"></img>
                    </div>
                </div>
                <div className="portfolio-center">
                    <div className="project_text">
                        <div className="project_title">
                            <h1>Password Generator</h1>
                        </div>
                        <div className="project_desc">
                            <PText>PW Password generator using simple JS using chosen parameters</PText>
                        </div>
                    </div>
                </div>
                 
                <div className="portfolio-right">
                    <div className="links">
                            <div className="github">
                                <button href="GITHUBLINK">
                                    <PText>
                                        Github
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
               
            </div>

            <div className="portfolio_card">
                <div className="portfolio-left">
                    <div className="portfolio_img">
                        <img src={weatherImg} alt="weather_image"></img>
                    </div>
                </div>
                <div className="portfolio-center">
                    <div className="project_text">
                        <div className="project_title">
                            <h1>Weather App</h1>
                        </div>
                        <div className="project_desc">
                            <PText>Weather application that gives a 5-day forecast of chosen list of cities</PText>
                        </div>
                    </div>
                </div>
                 
                <div className="portfolio-right">
                    <div className="links">
                            <div className="github">
                                <button href="GITHUBLINK">
                                    <PText>
                                        Github
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
               
            </div>

            <div className="portfolio_card">
                <div className="portfolio-left">
                    <div className="portfolio_img">
                        <img src={planeticImg} alt="planetic_image"></img>
                    </div>
                </div>
                <div className="portfolio-center">
                    <div className="project_text">
                        <div className="project_title">
                            <h1>Planetic</h1>
                        </div>
                        <div className="project_desc">
                            <PText>Full-stack social media application based on travel and connecting with others globally (wip)</PText>
                        </div>
                    </div>
                </div>
                 
                <div className="portfolio-right">
                    <div className="links">
                            <div className="github">
                                <button href="GITHUBLINK">
                                    <PText>
                                        Github
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
               
            </div>
           
            
        </PortfolioStyles>
    )
}
