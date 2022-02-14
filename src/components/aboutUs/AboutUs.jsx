import React from 'react';
import './aboutUs.css'
import about from '../../assets/about.png'
import slin from '../../assets/slin2.png'

const AboutUs = () => {
    return (
        <div className='aboutUs'>
            <div className="aboutUs__wrapper">
                <div className="aboutUs__title">
                    <h1>About Me</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut tempora accusamus quam? Rerum provident recusandae architecto pariatur quo quis praesentium inventore perferendis, molestiae necessitatibus ad debitis a magnam amet impedit!</p>
                </div>
                <div className="aboutUs__img">
                    <img src={about} alt="aboutMe_img" />
                </div>
            </div>
            <div className="aboutUs__endRow">
                <img src={slin} alt="endRow" />
            </div>
        </div>
    );
};

export default AboutUs;