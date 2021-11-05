import React from "react";
import './style.css';

const Projects = () => {
    return(
        <>
        <p id ="projects">Projects</p>

        <article>
            <section className="sec">
                <h2>PONG</h2>
                <div className="project">
                    <br></br>
                    <p>A project is an individual or collaborative enterprise that is carefully planned and researched about by students. At schools, educational institutes and universities, a project is a research assignment - given to a student - which generally requires a larger amount of effort and more independent work than that involved in a normal essay assignment. It requires students to undertake their own fact-finding and analysis, either from library/internet research or from gathering data empirically. The written report that comes from the project is usually in the form of a dissertation, which will contain sections on the project's inception, analysis, findings and conclusions.</p>
                </div>
            </section>
            <section className="sec">
                <h2>Kroy</h2>
                <div className="project">
                    <br></br>
                    <p>Developed a game for a software engineering group project module in the 2nd year by Java where the user has to destroy aliens spread throughout York at various landmarks, using fire engines.</p>
                    <br></br>
                    <ul>
                        <li>Users have 6 fire engine a the begining</li>
                        <li>Users are able to drive a fire engine around using the arrow keys</li>
                        <li>Users can fire water when they get close to enemy fortresses(Fire truck water amount will decrease)</li>
                        <li>Fire truck can refill their water by going to the fire station</li>
                        <li>Enemy fortresses will be destroyed once you have shot enough water at them</li>
                        <li>Users should avoid projectiles shot by the fortresses</li>
                        <li>Every 30 seconds enemy petrols will be spawned from alive fortresses</li>
                        <li>If your fire truck get destroyed another fire truck will be chosed for you automatically</li>
                        {/* <!-- <li>The faster user finish the game, the higher score they get</li> --> */}
                    </ul>
                </div>
        </section>
            <section className="sec">
                <h2>TravelShare</h2>
                <div className="project">
                    <br></br>
                    <p>TravelShare is an anonymous blogging website that allows users to make posts about their travel experiences.</p>
                    <br></br>
                    <ul>
                        <li>Users can choose 3 different category for their post(Sightseeing, food and drink, entertainment)</li>
                        <li>Users can add a gif to their post</li>
                        <li>Users are able comment and react to posts</li>
                    </ul>
                    <br></br>
                    <form action="https://bagels-journal-project.netlify.app/client/html/mainpage">
                        <button className = "button" id="button1" type="submit">
                            Visit website
                        </button>
                    </form>
                </div>   
            </section>        
            <section className="sec">
                <h2>Solving MAPF Problem with SAT solver</h2>
                <div className="project">
                    <br></br>
                    <p>As my final year project I wrote a program for multiple robots to visit some predefined patients in a one-floor hospital in the minimum possible time without exceeding thier energy.</p>
                    <p>This project required:</p>
                    <br></br>
                    <ul>
                        <li>Getting familiar with constraint programming languages</li>
                        <li>To modelled in Essence Prime language</li>
                        <li>Use the SAT solver implemented in Savile Row(which is a modelling assessment tool) to solve the problem</li>
                        <li>Each path can have different time</li>
                        <li>Robots energy would decrease by moving to a different location</li>
                        <li>No two robots can collide in their path</li>
                    </ul>
                </div>
            </section>
            <section className="sec">
                <h2>Trabbit</h2>
                <div className="project">
                    <br></br>
                    <p>Designed a habit tracker web app with the following functionalities:</p>
                    <br></br>
                    <ul>
                        <li>Users are able to sign up or login to the website</li>
                        <li>Users are able to choose a habit they want to track and choose how many days a week they wish to complete the habit</li>
                        <li>Users are able to choose a habit they want to track (e.g water, exercise, 8 hours of sleep) and choose how many days a week they wish to complete the habit.</li>
                        <li>Users are able to see if they have completed a habit for the day and see their most recent completion streak</li>
                    </ul>
                    <br></br>
                    <form action="https://trabbit.netlify.app">
                        <button className = "button" id="button2" type="submit">
                            Visit website
                        </button>
                    </form>
                </div>
            </section>
            <section className="sec">
                <h2>project6</h2>
                <div className="project">
                    <br></br>
                    <p>A project is an individual or collaborative enterprise that is carefully planned and researched about by students. At schools, educational institutes and universities, a project is a research assignment - given to a student - which generally requires a larger amount of effort and more independent work than that involved in a normal essay assignment. It requires students to undertake their own fact-finding and analysis, either from library/internet research or from gathering data empirically. The written report that comes from the project is usually in the form of a dissertation, which will contain sections on the project's inception, analysis, findings and conclusions.</p>
                </div>
            </section>
        </article>
        </>
    );
}

export default Projects;