import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";


const SocialsStyle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 0 auto;
padding: 10px;  
height: 100px;
width: 50vw;
font-size: 25px;

a {
    color: white;
}

a:hover {
    box-shadow: 0 0 30px #ffffff;
}
`


export default function Socials() {
    return (
        <SocialsStyle>
            <a href="https://github.com/xxelegyxx" target="_blank">
                <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/joe-wood-9327421bb" target="_blank">
                <FaLinkedin/>
            </a>
            <a href="https://www.instagram.com/xx_elegy_xx/" target="_blank">
                <FaInstagram/>
            </a>
            <a href="https://www.youtube.com/channel/UCBwLYZOcerl5zkrS-1upWKA" target="_blank">
                <FaYoutube/>
            </a>
        </SocialsStyle>
    )
}
