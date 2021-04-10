import React from 'react';
import './VideoSection.css';
import mgofish from '../images/mgofish.png';
import maizenbrew from '../images/maizenbrew.png';

function VideoSection() {
    return (
        <div className='video-container'>
            <div className='video-section' id='left'>
                <div className='video-embed'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/JFNCEKesuiI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='video-description' id='left-description'>
                    <h1 id='left-title'>HYPE</h1>
                    <p>I've been making hype videos since 2015, for football, hockey, and basketball. My hockey videos were specifically requested by the University, where my football video has been featured in their social channels, and basketball used part of my video for their own promotion material.</p>
                    <p>I pride myself on my pacing, storytelling, and music synchronization. My goal in videos of this nature is to capture the emotion of the moment and overall "feel" of the moment, and is some of my favorite videos to make.</p>
                </div>
            </div>
            <div className='video-section' id='right'>
                <div className='video-description' id='right-description'>
                    <h1 id='right-title'>GAME RECAPS</h1>
                    <p>Using my "Game Clipper" program, I was able to quickly put together game recap videos the same day as the game itself. Being able to export the highlights immediately after the game, I simply put together a quick outline, recorded my reaction over the highlights, and edit the video afterwards.</p>
                    <p>Relying on a bit of humor and improv helped me drastically decrease the amount of time to produce these kinds of videos.</p>
                </div>
                <div className='video-embed'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Olcgbf__j-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className='video-section' id='left'>
                <div className='video-embed'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/INhBVeBo4Ew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='video-description' id='left-description'>
                    <h1 id='left-title'>FILM ANALYSIS</h1>
                    <p>Since 2017, I found myself more drawn to the Xs and Os of sports. Why were certain plays failing? What made certain formations successful? So, I decided to make videos breaking down plays and providing my observations.</p>
                    <p>Using Adobe Premiere Pro, a dual-monitor set-up, and a nice illustration tool called EpicPen, I found a great set-up to record my analysis on the screen in a quick and easy fashion.</p>
                </div>
            </div>
            <div className='video-section' id='right'>
                <div className='video-description' id='right-description'>
                    <h1 id='right-title'>RECRUIT ANALYSIS</h1>
                    <p>Similar to my film analysis, I was also curious about what made a recruit successful from high school to college. What attributes of a quarterback can I see that will translate well to the next level?</p>
                    <p>I also found it hard to compile ALL the information out there on a given recruit. So I started a series of videos compiling footage, stats, and information, added some commentary and analysis and a series was born.</p>
                </div>
                <div className='video-embed'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/2mLKPbHsYSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
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
            <div className='story-container'>
                <h2>MY STORY</h2>
                <p>I've always been a fan of video editing, football, and music, separately. Naturally, intersection of those caught my interest, as well. After the 2011 Michigan football game against Notre Dame (my second as a freshman at UofM), I was inspired to make a video about it. The atmosphere, emotion, and disbelief of it all led me to my very first sports video. It’s not very good, admittedly. 10 minutes is way too long, and it drags on. But the end is solid, and I loved editing it.</p>
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