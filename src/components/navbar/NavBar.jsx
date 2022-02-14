import React from 'react';
import './navBar.css'
const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar__logo">
                <h1>IRENA</h1>
            </div>
            <ul className='navbar__links'>
                <li className=''><a href="#home">Home</a></li>
                <li className=''><a href="#about">About</a></li>
                <li className=''><a href="#whatWeDo">What we do</a></li>
                <li className=''><a href="#gallery">Gallery</a></li>
                <li className=''><a href="#contactUs">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;