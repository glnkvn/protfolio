import React from 'react';
import './style.css';
import myPhoto from '../images/Golnar.png';

const Header = () => {
    return(
        <>
        <header>
            <img id="myPhoto" src={ myPhoto } alt="Golnar photo" ></img>
            <h1>Golnar Kaviani</h1>
            <section className="topnav">
                <a href="#welcome" className = "links">About me</a>
                <a href="#thechnical_skills" className="links">Skills</a>
                <a href="#projects" className="links">Projects</a>
                <a href="./contact.html" className="links">contact me</a>
            </section>
        </header>
        </>
    )
}

export default Header;
