import React from 'react';
import myResume from '../../assets/cory-neel.pdf'
function Resume () {
    return(
        <section>
            <h4>Over the past 6 months I have learned an amazing amount on both the front and back end, and my proficiency is growing daily.</h4>
            
            <h3>Resume</h3>
            <span><a href={myResume} download>Download My Resume</a></span>
            <div>
                <strong>My Skills</strong> 
                <ul className='unstyled'>
                    <li>HTMl/CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>ExpressJS</li>
                    <li>NodeJS</li>
                    <li>MySQL</li>
                    <li>NongoDB and Mongoose</li>
                </ul>
            </div>     
        </section>
    )
};

export default Resume;