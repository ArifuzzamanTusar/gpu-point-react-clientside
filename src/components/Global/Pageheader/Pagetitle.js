import React from 'react';
import './Pagetitle.css';

const Pagetitle = (props) => {
    const {title,subtitle} = props;
    return (
        
        <div className="pagetitle">
             <div className="container page-title text-center">
                    <h2 className='title'>{title}</h2>
                    <p className='sub-title'>{subtitle}</p>
                </div>
        </div>

    );
};

export default Pagetitle