import React from 'react';
import './CodeSection.css';

function CodeSection() {
    return (
        <div className='code-container'>
            <div className='project-section'>
                <div className='project-title'>
                    <h3>GameClipper</h3>
                    <h4>A python script to edit highlights for me.</h4>
                    <h5>Tools / Languages</h5>
                    <ul>
                        <li>MoviePy</li>
                        <li>PyTesseract</li>
                        <li>OpenCv</li>
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
                    <a href="www.github.com">See more on Github</a>
                </div>
            </div>
            <div className='project-section'>
                <div className='project-title'>
                    <h3>GameClipper</h3>
                    <h4>A python script to edit highlights for me.</h4>
                    <h5>Tools / Languages</h5>
                    <ul>
                        <li>MoviePy</li>
                        <li>PyTesseract</li>
                        <li>OpenCv</li>
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
                    <a href="www.github.com">See more on Github</a>
                </div>
            </div>
            <div className='project-section'>
            
            </div>
        </div>
    )
}

export default CodeSection