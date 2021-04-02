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
            {/* <div className='video-container'>
                
            </div> */}
            <div className='story-container'>
                <h2>MY STORY</h2>
                <p>Growing up, I was always a fan of video editing, football, and music. After the 2011 Michigan football game against Notre Dame (my second as a freshman at UofM), I was inspired to make a video about it. The atmosphere, emotion, and disbelief of it all led me to my very first sports video. It’s not very good, admittedly. 10 minutes is way too long, and it drags on. But the end is solid, and I loved editing it.</p>
                <p>Fast forward a few years, and I put together a few videos for the 2015 football season, my video for the Michigan vs. Ohio State game getting over 150,000 views. A few organizations reached out about me potentially joining their team, and I agreed with an opportunity to make videos with the MGoFish brand, a site focused on Michigan recruiting.</p>
                <p>My first video as a part of MGoFish was a spinoff of the Suicide Squad trailer, for the Michgian football recruiting class of 2016, bringing over 60,000 views.</p>
                <p>From there, I expanded my videos to recruit commitment videos, recruit analysis, game analysis, and live streams, first with MGoFish, then with the SBNation affiliated website Maize N Brew starting in 2020, where I contribute to this day. I’ve helped grow a small community, bringing up the subscriber count on the YouTube by about 3,500 over the course of 9 months.</p>
            </div>
            <div className='recent-continer'>

            </div>
        </div>
    )
}

export default VideoSection