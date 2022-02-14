import React from 'react';
import './subComponent.css'

const SubComponent = ({imgDesc, title, desc}) => {
    return (
        <div className='subComponent'>
            <div className="subComponent__img">
                <img src={imgDesc} alt="img" />
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
};

export default SubComponent;