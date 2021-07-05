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
  
  .hero_social,
  .hero_scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero_social {
    left: 50px;
  }
  .hero_scrollDown {
    right: 50px;
  }
  .hero_social_indicator,
  .hero_scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero_scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero_social_text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
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
