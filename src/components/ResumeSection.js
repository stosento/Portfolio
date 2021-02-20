import React from 'react';
import './ResumeSection.css';
import background from '../images/background.jpeg';

function ResumeSection() {
    return (
        <div className='resume-container'>
            <div id='header' className='content-section'>
                <div id='img-sidebar' className='section-header'>
                    <img src={background}/>
                </div>
            </div>
        </div>
    )
}

export default ResumeSection