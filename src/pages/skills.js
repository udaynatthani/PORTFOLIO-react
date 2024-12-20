import React from 'react'
import './skills.css';

export default function Skills() {
    return (
        <section className="skills" id="skills">
            <h2 className="heading"><i className="fas fa-laptop-code"></i> Skills </h2>
            <div className="container">
                <div className="row" id="skillsContainer">
                    <div className="bar">
                        <div className="info">
                            <img src="./assets/images/skills/TailwindCSS.png" alt="SQL" />
                            <span>SQL</span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <img src="./assets/images/skills/icons8-react-100.png" alt="ReactJS" height="50" width="50" />
                            <span>ReactJS</span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <img src="./assets/images/skills/figma.png" alt="CSS" height="50" width="50" />
                            <span>CSS</span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">

                            <span>HTML5</span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <img src="./assets/images/skills/javascript.png" alt="JavaScript" height="50" width="50" />
                            <span>JavaScript</span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <img src="./assets/images/skills/java.png" alt="Java" height="50" width="50" />
                            <span>Java</span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <img src="./assets/images/skills/java.png" alt="C" height="50" width="50" />
                            <span>C</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
