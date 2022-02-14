import React from 'react';
import './header.css'
import bannerImg from '../../assets/banner_ing.jpg'
// import headerNails from '../../assets/nails1.jpg'
const Header = () => {
    return (
        <div className='header'>
            <div className="header__bg"></div>
            <div className="header__wrapper">
                <div className="header__img">
                    <img src={bannerImg} alt="banner-img" />
                </div>
                <div className="header__intro">
                    <h1>IRENA Manicurist</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores id magnam</p>
                </div>
            </div>
        </div>
    );
};

export default Header;