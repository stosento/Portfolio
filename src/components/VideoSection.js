import React from 'react';
import './VideoSection.css';
import mgofish from '../images/mgofish.png';
import maizenbrew from '../images/maizenbrew.png';

function VideoSection() {
    return (
        <div className='video-container'>
            <div className='company-container'>
                <div className='company'>
                    <a href='https://www.mgofish.com'>
                        <img src={mgofish} id='mgofish'/>
                    </a>
                    <h2>MGOFISH</h2>
                    <h3>2016 - 2020</h3>
                </div>
                <div className='company'>
                    <a href='https://www.maizenbrew.com'>
                        <img src={maizenbrew} id='maizenbrew'/>
                    </a>
                    <h2>MAIZE N BREW</h2>
                    <h3>2020 - PRESENT</h3>
                </div>
            </div>
            <div className='sample-container'>
                <div className='sample'>

                </div>
                <div className='sample'>
                    
                </div>
                <div className='sample'>
                    
                </div>
            </div>
            <div className='recent-continer'>

            </div>
        </div>
    )
}

export default VideoSection