import { Email, LocationOn, Phone } from '@material-ui/icons';
import React from 'react';
import './footer.css'



const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__container">
                <div className="footer__container-info">
                    <div className="footer__container-location">
                        <LocationOn fontSize='large'/>
                        <p>Passages of Lorem Ipsum available</p>
                    </div>
                    <div className="footer__container-phone">
                        <Phone fontSize='large'/>
                        <p>Call : +012334567890</p>
                    </div>
                    <div className="footer__container-email">
                        <Email fontSize='large'/>
                        <p>demo@gmail.com</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;