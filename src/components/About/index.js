import React from 'react';
import profilePic from '../../assets/images/profilepicture.jpg'

function About () {
    return (
        <section className='my-5'>
            <h1 id='about'>Alittle About Me</h1>
            <div className="my-2">
                <img
                    src={profilePic}
                    alt="Cory Neel"
                    key="profilePic"
                />
                <p>
                Hi there! My name is Cory, I am a native Texan, and have lived in the beautiful city of Austin since 2002. I moved here for college and fell in love with the culture and the people of Austin. I have worked as a General Manager for a local farm to table restaurant called "Odd Duck" for the past seven years. During this time, I have grown into a patient and observative group leader, a multi-tasker, and honed my hospitality skills. I feel like I have learned so much from my tenure in the hospitality industry. Like many humans out there, quarantine gave me some time to think. During this period of inner focus, I decided it was time to take on a new adventure. So here I am! I am a student in the University of Texas Coding Bootcamp, and I am excited for what the future has in store for me.                </p>
            </div>
        </section>
    )
}

export default About;