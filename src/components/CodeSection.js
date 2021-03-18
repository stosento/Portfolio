import React from 'react';
import './CodeSection.css';

function CodeSection() {
    return (
        <div className='code-container'>
            <div className='header-section'>
                <h2>
                    Check out some of my more recent projects I've been working on. To get even more details on even more projects, check out my GitHub.
                </h2>
            </div>
            <div className='project-section'>
                <div className='project-title'>
                    <h3>GameClipper</h3>
                    <h4>A python script to edit highlights for me.</h4>
                    <h5>Tools / Languages</h5>
                    <ul>
                        <li>Python</li>
                        <li>MoviePy</li>
                        <li>PyTesseract</li>
                        <li>OpenCV</li>
                    </ul>
                </div>
                <div className='vertical-line' id='blue-line'/>
                <div className='project-description'>
                    <p>
                        I have been video editing game footage for literal years, and have grown tired of editing game film over and over again. So, I wrote GameClipper to ease the load on myself. There are two modes of the script. Both modes hinge on the presence of a txt file that holds relevant timestamps for extracting highlights. 
                    </p>
                    <p>
                        OCR mode is meant to read the in-game clock and search for each time specified in the txt file, extracting the highlight once found. This mode leverages PyTesseract and OpenCV to properly extract the time from the frame in the video file.
                    </p>
                    <p>
                        Default mode is a bit more simplistic. It reads in the timestamps as literal video timestamps within the video file. Thus, there's no "search" needed, as we can just skip to each position in the video file and extract using MoviePy.
                    </p>
                    <p>
                        Overall, this script has cut down about 50% of my editing time, saving me considerable time in producing the content for my videos.
                    </p>
                    <a id='blue-link' href="https://github.com/stosento/GameClipper">See more on Github</a>
                </div>
            </div>
            <div className='project-section'>
                <div className='project-title'>
                    <h3>Ranking vs Drafted</h3>
                    <h4>A visualization of high school football recruit ranking against their NFL draft selection, year over year</h4>
                    <h5>Tools / Languages</h5>
                    <ul>
                        <li>Python</li>
                        <li>Matplotlib</li>
                        <li>Selenium</li>
                        <li>BeautifulSoup</li>
                    </ul>
                </div>
                <div className='vertical-line' id='red-line'/>
                <div className='project-description'>
                    <p>
                        I took a few Coursera courses to learn a bit more about using python in data science & data plotting / charting. This project was a part of the final assignment to create something unique.
                    </p>
                    <p>
                        Given I'm a big college football guy, I wanted to know a couple things, namely:
                    </p>
                    <ul>
                        <li>What are the rankings of athletes from a given state, year over year?</li>
                        <li>Is there a correlation of higher ranking out of high school to being selected in the NFL Draft?</li>
                        <li>Are there trends of the number of ranked recruits in a state through the years?</li>
                    </ul>
                    <p>
                        There wasn't an easy source of recruiting ranking data available, so I used BeautifulSoup and Selenium to scrape data from 247Sports. This site has historical recruit data that's filterable by state and year. Perfect for my needs.
                    </p>
                    <p>
                        Reading that data into appropriate data elements, I was able to easily put it into Matplotlib to create this visual.
                    </p>
                    <a id='red-link' href="https://github.com/stosento/RecruitData">See more on Github</a>
                </div>
            </div>
            <div className='project-section'>
                <div className='project-title'>
                    <h3>Halo Timer</h3>
                    <h4>Android Application to provide weapon & power-up timer information to the player</h4>
                    <h5>Tools / Languages</h5>
                    <ul>
                        <li>Java</li>
                        <li>Android</li>
                    </ul>
                </div>
                <div className='vertical-line' id='green-line'/>
                <div className='project-description'>
                    <p>
                        I grew up absolutely loving the Halo video game series. Very quickly, I was drawn to the competitive play. Though I wasn't as skilled as those tip top players, my strategy & communication were what I prided myself in.
                    </p>
                    <p>
                        Throughout the past few years, I hadn't found the time to play as much, but when Red Bull announced a <a id='green-link' href="https://smash.gg/tournament/red-bull-rise-till-dawn-featuring-halo-3/details">Halo 3 tournament</a> in the building just a few floors above my work office, I had to compete!
                    </p>
                    <p>
                        In competitive settings, it's key to time the power weapon & power-up spawn times throughout the game. While reviewing the rules for the event, I had noticed the start time of each game was different compared to the usual ruleset. 
                    </p>
                    <p>
                        As a result, I created an extremely simple Android application to display timers for each of the different map / gametypes, as each have different settings. My teammate and I placed 9th of 62 teams, which I attribute quite a bit to this application. While other teams were struggling with the timing, the application helped give us an edge over other teams who had to do the time calculations manually.
                    </p>
                    <a id='green-link' href="https://github.com/stosento/H3MLGTimer">See more on Github</a>
                </div>
            </div>
            <div className='project-section'>
                <div className='project-title'>
                    <h3>RunMyBeat</h3>
                    <h4>Web Application to find new music and curate my spotify playlists according to my running pace.</h4>
                    <h5>Tools / Languages</h5>
                    <ul>
                        <li>React</li>
                        <li>Spotify API</li>
                        <li>Strava API</li>
                    </ul>
                </div>
                <div className='vertical-line' id='purple-line'/>
                <div className='project-description'>
                    <p>
                        Coming soon
                    </p>
                    <a id='purple-link' href="https://github.com/stosento/RunMyBeat">See more on Github</a>
                </div>
            </div>
        </div>
    )
}

export default CodeSection