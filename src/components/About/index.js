import React from "react";
import './style.css';

const About = () => {
    return(
    <>
        <div className="type">
        <p id="welcome">Welcome to my portfolio</p>
        </div>
        
        <p id ="about">About me</p>
        <div id="firstInfo">
            <p id="firstInfoparaph">I recently achieved a First Class Honours degree at Computer Science at the University of York and I am currently being trained to be a full-stack web development at Futureproof.</p>
            <br></br>
            <p>I am a curious and logical thinker who enjoys problem solving and learning new skills. Also, I am passionate about coding and thechnology.</p>
            <br></br>
            <p>Generally, I am a social and energetic person, and I enjoys playing sports, travelling and spending time with my friends. I also enjoy watching movies, listening to music and cooking in my free time.</p>
            <br></br>
            <p id="lastInfoparaph">I am looking forward to start my career in technology, to apply and practice my knowledge in the real world, learn new skills and enhance my knowledge of cutting-edge technology.</p>
        </div>
    </>
    )
}
    

export default About;