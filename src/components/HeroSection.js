import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import profile from '../images/profile.png';

function HeroSection() {
    return (
        <div className='hero-container'>
            <div className='img-wrapper'>
                <img id='profile' src={profile} />
            </div>
            <div id='text-wrapper' class='fillwidth'>

                <div className='text-container'>
                    <p>
                        <span class='script'>
                            Hi There!
                        </span>
                    </p>
                    <p id='body-text'>
                        I'm Stephen, a Michigan-based engineer, video editor, football analyst, and lover of college sports. I currently work at <a href="https://www.avatria.com/" target="blank">Avatria</a>
                        , helping companies expand their ecommerce capabilities. Take a look around to check out what I've been up to lately.
                    </p>
                </div>
                            
            </div>
        </div>
    )
}

export default HeroSection
