import React from 'react';
import PText from './PText';
import styled from 'styled-components';
import Joe5 from "../Assets/Images/Joe5.jpg";

const HeroStyles = styled.div`
.hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero_heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero_name {
      font-family: 'Orbitron', sans-serif;
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero_img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero_info {
    margin-top: 2rem;
  }

  

`;

export default function Hero() {
    return (
        <HeroStyles>
            <div className="hero">
            <div className="container">
                <div className="hero_heading">
                <h1 className="hero_name">
                    <span>My name is Elegy</span>
                </h1>
                </div>
                

                <div className="hero_img">
                    <img src={Joe5} alt="homepage_image"></img>
                </div>
                <div className="hero_info">
                    <PText>Brooklyn-based creative specializing in music production, freelance 3D work and programming</PText>

                </div>
            </div>
        </div>
        </HeroStyles>
        
    )
}
