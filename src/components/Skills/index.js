import React from "react";
import './style.css'


const Skills = ()  => {
    return(
        <>
         <p id ="thechnical_skills">Thechnical skills</p>

        <section id="skills">
            <div className="my-skills">
                <span className="iconify" data-icon="logos:python" data-inline="false"></span>
                <p className="skill-name">Python</p>
            </div>
            <div className="my-skills">
                <span className="iconify" data-icon="logos:java" data-inline="false"></span>
                <p className="skill-name">Java</p>
            </div>
            <div className="my-skills">
                <span className="iconify" data-icon="vscode-icons:file-type-html" data-inline="false"></span>
                <p className="skill-name">HTML</p>
            </div>
            <div className="my-skills">
                <span className="iconify" data-icon="vscode-icons:file-type-css" data-inline="false"></span>
                <p className="skill-name">CSS</p>
            </div>
            <div className="my-skills">
                <span className="iconify" data-icon="logos:javascript" data-inline="false"></span>
                <p className="skill-name">JavaScript</p>
            </div>
            <div className="my-skills">
                <span className="iconify" data-icon="vscode-icons:file-type-jest-snapshot" data-inline="false"></span>
                <p className="skill-name">Jest</p>
            </div>  
            <div className="my-skills">
                <span className="iconify" data-icon="logos:postgresql" data-inline="false"></span>
                <p className="skill-name">Postgresql</p>
            </div>
            <div className="my-skills">
                <span className="iconify" data-icon="logos:mongodb"data-inline="false"></span>
                <p className="skill-name">MongoDB</p>
            </div>
            <div className="my-skills">
                <span className="iconify" data-icon="logos:docker-icon" data-inline="false"></span>
                <p className="skill-name">Docker</p>
            </div>
            <div className="my-skills">
                <span className="iconify" data-icon="logos:react" data-inline="false"></span>
                <p className="skill-name">React</p>
            </div>
        </section>
  
        </>
    );
}

export default Skills;