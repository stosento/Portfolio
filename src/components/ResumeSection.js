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
                    <p> Hello There! I'm Stephen, an engineer / architect / consultant newly based in Troy, Michigan. I specialize in SAP Commerce, with experience in both the B2B & B2C space, working on a wide array of projects, from back-end systems to customer-experience focused projects.</p>
                    <p> I currently work at Avatria as an Application Architect, leading companies to fully realize their eCommerce goals. When I'm not working, you can find me rock climbing, on a run with my dog, or creating videos, likely related to Michigan sports. </p>
                    <p> Take a look at my recent experience below, and don't hesitate to reach out! </p>
                </div>
            </div>
            <div className='content-section'>
                <div id='bg-blue' className='section-header'>
                    <h2>Experience</h2>
                </div>
                <div className='section-content'>
                    <div className='experience-header'>
                    <h3>AVATRIA</h3>
                    <h4></h4>

                    </div>
                    <div className='experience-content'>
                        
                    </div>
                </div>
            </div>
            <div className='content-section'>
                <div id='bg-red' className='section-header'>
                    <h2>Languages & Frameworks</h2>
                </div>
                <div className='section-content'>
                    
                </div>
            </div>
        </div>
    )
}

export default ResumeSection