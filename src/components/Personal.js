import React from 'react';
import '../App.css';
import './Personal.css'

function Personal(){
    return (
        <div className='personal-container'>
            <video src="/images/video-1.mp4" autoPlay loop muted/>
            <img src="/images/KevinMa.jpg" id="Kevin" alt=''/>
            <h1>Hello, I'm Kevin Ma</h1>
            <h2>Ryerson University</h2>
            <h3>Fourth Year Computer Science Co-op Student</h3>
            <h2 class='subtitle'>About Me!</h2> 
            <p>My name is Kevin Ma, a fourth year student completing a Bachelor of Science (Computer Science) 
            degree at Ryerson University. I developed this website using HTML5, CSS3, and JavaScript by using the React.js framework.
            I can use Express.js and MongoDB for backend applications as well!
            I am also familiar with building applications using Python, Java, and C#. </p>
        </div> 
    )
}

export default Personal;