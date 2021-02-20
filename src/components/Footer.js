import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <a href='mailto: stephen.osentoski@gmail.com' target='_blank'>
                <i className='footer-icon fas fa-envelope-square'/>
            </a>
            <a href='https://www.linkedin.com/in/stephenosentoski/' target='_blank'>
                <i className='footer-icon fab fa-linkedin'/>
            </a>
            <a href='https://www.github.com/stosento' target='_blank'>
                <i className='footer-icon fab fa-github-square'/>
            </a>
            <a href='https://www.twitter.com/stephentoski' target='_blank'>
                <i className='footer-icon fab fa-twitter-square'/>
            </a>
        </div>
    )
}

export default Footer