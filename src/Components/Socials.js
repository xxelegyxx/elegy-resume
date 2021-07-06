import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <a href="">
                <FaGithub/>
            </a>
            <a href="">
                <FaLinkedin/>
            </a>
            <a href="">
                <FaInstagram/>
            </a>
            <a href="">
                <FaYoutube/>
            </a>
        </SocialsStyle>
    )
}
