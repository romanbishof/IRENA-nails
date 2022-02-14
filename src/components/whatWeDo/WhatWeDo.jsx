import React from 'react';
import './whatWeDo.css'
import nailArt from '../../assets/weicon1.png'
import manicure from '../../assets/weicon2.png'
import pedicure from '../../assets/weicon3.png'
import SubComponent from '../../container/subComponent/SubComponent';
import slin from '../../assets/slin.png'

const WhatWeDo = () => {
    return (
        <div className='whatWeDo'>
            <div className="whatWeDo__title">
                <h1>What I Do</h1>
            </div>
            <div className="whatWeDo__work">
                <SubComponent imgDesc={nailArt} title={"Nail Art"} desc={"Lorem ipsum dolor sit amet, consectetur"}/>
                <SubComponent imgDesc={manicure} title={"Manicure"} desc={"Lorem ipsum dolor sit amet, consectetur"}/>
                <SubComponent imgDesc={pedicure} title={"Pedicure"} desc={"Lorem ipsum dolor sit amet, consectetur"}/>
            </div>
            <div className="whatWeDo__endRow">
                <img src={slin} alt="endRow" />
            </div>
        </div>
    );
};

export default WhatWeDo;