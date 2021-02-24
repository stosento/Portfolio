import React from 'react';
import './ResumeSection.css';
import background from '../images/test.jpg';

function ResumeSection() {
    return (
        <div className='resume-container'>
            <div id='header' className='content-section'>
                <div id='img-sidebar' className='section-header'>
                    <img src={background}/>
                </div>
                <div id='header-content-wrapper' class='section-content'>
                    <h1 id='page-title'>Stephen Osentoski</h1>
                    <h3 id='page-subtitle'>Engineer in Ecommerce. Believer in robust documentation, challenging projects, and clean integrations</h3>
                </div>
            </div>
            <div className='content-section'>
                <div id='bg-orange' className='section-header'>
                    <h2>About Me</h2>
                </div>
                <div className='section-content'>
                    <p> Hello There! I'm Stephen, an application architect newly based in Troy, Michigan. I specialize in SAP Commerce, leading multiple projects in the B2B & B2C space, working with both back-end systems and customer-experience focused projects.</p>
                    <p> I'm a person</p>
                </div>
            </div>
            <div className='content-section'>
                <div id='bg-blue' className='section-header'>
                    <h2>Experience</h2>
                </div>
            </div>
            <div className='content-section'>
                <div id='bg-red' className='section-header'>
                    <h2>Languages & Frameworks</h2>
                </div>
            </div>
        </div>
    )
}

export default ResumeSection