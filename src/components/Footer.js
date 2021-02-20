import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <a href='mailto: stephen.osentoski@gmail.com'>
                <i className='footer-icon fas fa-envelope-square'/>
            </a>
            <a href='https://www.twitter.com/stephentoski'>
                <i className='footer-icon fab fa-twitter-square'/>
            </a>
            <a href='https://www.linkedin.com/in/stephenosentoski/'>
                <i className='footer-icon fab fa-linkedin'/>
            </a>
            <a href='https://www.github.com/stosento'>
                <i className='footer-icon fab fa-github-square'/>
            </a>
        </div>
    )
}

export default Footer