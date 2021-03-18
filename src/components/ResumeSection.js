import React from 'react';
import './ResumeSection.css';
import background from '../images/test.jpg';

import sap from '../images/sap-commerce.png';
import spring from '../images/java-spring.png';
import python from '../images/python.png';
import react from '../images/react.png';
import jekyll from '../images/jekyll.png';
import solr from '../images/solr.png';

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
                    <p> I currently work at Avatria as an Application Architect, leading projects to help companies fully realize their eCommerce goals. When I'm not working, you can find me rock climbing, on a run with my dog, or creating videos, likely related to Michigan sports. </p>
                    <p> Take a look at my recent experience below, and don't hesitate to reach out! </p>
                </div>
            </div>
            <div className='content-section'>
                <div id='bg-blue' className='section-header'>
                    <h2>Experience</h2>
                </div>
                <div className='section-content'>
                    <div className='experience-section'>
                        <div className='experience-header'>
                            <h3>AVATRIA</h3>
                        </div>
                        <h4>APPLICATION ARCHITECT | JULY 2016 - PRESENT</h4>
                        <div className='experience-content'>
                            <div className='project'>
                                <div className='project-header'>
                                    <h4>B2B | WIRE & CABLE SUPPLIER</h4>
                                    <h5>SAP COMMERCE v1905</h5>
                                </div>
                                <div className='project-content'>
                                    <ul>
                                        <li>Facilitated upgrade from SAP Commerce v6.7 to v1905.</li>
                                        <li>Enabled multi-site and multi-brand functionality within the same SAP Commerce instance.</li>
                                        <li>Identified issues with UDP clustering and transitioned the configuration to TCP.</li>
                                        <li>Led development, effort estimation, and architectural design throughout multiple projects.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='project'>
                                <div className='project-header'>
                                    <h4>B2C | TIRE & WHEEL DISTRIBUTOR</h4>
                                    <h5>HYBRIS v6.7</h5>
                                </div>
                                <div className='project-content'>
                                    <ul>
                                        <li>Designed a custom RESTful appointment service to enable customers to schedule products installations on their vehicles.</li>
                                        <li>Led development efforts for Buy Online, Pickup in Store functionality, modifying existing checkout flow and Vantiv payment integration.</li>
                                        <li>Implemented hot folder integration & custom tax logic to support Canadian tax jurisdictions.</li>
                                        <li>Architected the introduction of a new product type & fitment logic of product set to their vehicle.</li>
                                        <li>Grew team from 2 resources to over 15 with multiple sprint teams.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='project'>
                                <div className='project-header'>
                                    <h4>INTERNAL INITIATIVES</h4>
                                </div>
                                <div className='project-content'>
                                    <ul>
                                        <li>Blog contributions on <a href='https://www.avatria.com/news-and-insights/considering-upgrading-to-sap-commerce-2011-read-this-first/' target='_blank'>SAP Commerce v2011</a>, <a href='hhttps://www.avatria.com/news-and-insights/effective-code-branching-strategies-for-software-teams/' target='_blank'>branching strategy</a>, <a href='https://www.avatria.com/news-and-insights/appointment-service-design-for-ecommerce-applications/' target='_blank'>appointment service design</a>, and <a href='https://www.avatria.com/news-and-insights/the-keys-to-healthy-dev-qa-relationship/' target='_blank'>dev/qa relationship</a>.</li>
                                        <li>Co-host of eCommerce podcast "<a href='https://www.avatria.com/podcast' target='_blank'>SKU-ed - Demystifying Digital Commerce</a>".</li>
                                        <li>Built the company virtual coding exercise for interview purposes within Eclipse Che.</li>
                                        <li>Continued site design & development of <a href='https://www.avatria.com' target='_blank'>Avatria.com</a></li>
                                        <li>Leading Lunch & Learn internal meetings for company knowledge sharing.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='experience-section'>
                        <div className='experience-header'>
                            <h3>RAZORFISH COMMERCE</h3>
                        </div>
                        <h4>SOFTWARE ENGINEER | JUNE 2015 - JUNE 2016</h4>
                        <div className='experience-content'>
                            <div className='project'>
                                <div className='project-header'>
                                    <h4>B2C | ENTERPRISE SOFTWARE RETAILER</h4>
                                    <h5>HYBRIS v5.7</h5>
                                </div>
                                <div className='project-content'>
                                    <ul>
                                        <li>Led development effort in creating subscription and trial cancellation functionality.</li>
                                        <li>Service & Facade-layer logic in determining free product availability.</li>
                                        <li>Generated implementation documentation and presented technical implementation to stakeholders</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='project'>
                                <div className='project-header'>
                                    <h4>B2C | ARTS & CRAFTS RETAILER</h4>
                                    <h5>HYBRIS v5.5</h5>
                                </div>
                                <div className='project-content'>
                                    <ul>
                                        <li>Applied improvements / fixes to the Cybersource and PayPal payment processing integrations.</li>
                                        <li>Debugged critical issues surrounding the gift card and tax implementation.</li>
                                        <li>Created custom international shipping customer service widget to enable shipping to 20+ additional countries.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content-section'>
                <div id='bg-red' className='section-header'>
                    <h2>Languages & Frameworks</h2>
                </div>
                <div className='section-content'>
                    <div className='skill-wrapper'>
                        <img className='skill-logo' src={sap}></img>
                        <img className='skill-logo' src={spring}></img>
                        <img className='skill-logo' src={solr}></img>
                    </div>
                    <div className='skill-wrapper'>
                        <img className='skill-logo' src={python}></img>
                        <img className='skill-logo' src={jekyll}></img>
                        <img className='skill-logo' src={react}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeSection