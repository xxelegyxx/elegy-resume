import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import LyricbooImg from '../Assets/Images/lyricboo.png';


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
                            <PText>Project Desc</PText>
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
                        <img src={LyricbooImg} alt="lyricboo_image"></img>
                    </div>
                </div>
                <div className="portfolio-center">
                    <div className="project_text">
                        <div className="project_title">
                            <h1>Lyricboo</h1>
                        </div>
                        <div className="project_desc">
                            <PText>Project Desc</PText>
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
                        <img src={LyricbooImg} alt="lyricboo_image"></img>
                    </div>
                </div>
                <div className="portfolio-center">
                    <div className="project_text">
                        <div className="project_title">
                            <h1>Lyricboo</h1>
                        </div>
                        <div className="project_desc">
                            <PText>Project Desc</PText>
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
                        <img src={LyricbooImg} alt="lyricboo_image"></img>
                    </div>
                </div>
                <div className="portfolio-center">
                    <div className="project_text">
                        <div className="project_title">
                            <h1>Lyricboo</h1>
                        </div>
                        <div className="project_desc">
                            <PText>Project Desc</PText>
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
                        <img src={LyricbooImg} alt="lyricboo_image"></img>
                    </div>
                </div>
                <div className="portfolio-center">
                    <div className="project_text">
                        <div className="project_title">
                            <h1>Lyricboo</h1>
                        </div>
                        <div className="project_desc">
                            <PText>Project Desc</PText>
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
