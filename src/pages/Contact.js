import React from 'react';
import ContactComponent from '../Components/Contact.js';
import Socials from '../Components/Socials';
import HText from '../Components/HText.js';

export default function Contact() {
    return (
        <div>
            <HText>Contact</HText>
            <ContactComponent></ContactComponent>
            <Socials></Socials>
        </div>
    
    )
}
