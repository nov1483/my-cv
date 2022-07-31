import React from "react";
import {FaReact} from "react-icons/fa";
import {FaCss3Alt} from "react-icons/fa";
import {FaHtml5} from "react-icons/fa";
import {SiFirebase} from "react-icons/si";
import {BsFillBootstrapFill} from "react-icons/bs";
import {SiJavascript} from "react-icons/si";

import gameStore from "../img/gamestore.png"
import foto from "../img/foto.png"
import "./css/projects.css"

function Projects() {
    return(
        <section className="projects">
            <div className="container projects_container">
                <h2>Let's See the Projects</h2>
            
                <div className="show_projects">
                    <div className="project_game">
                        <div className="project_game_info">
                            <div className="project_game_img">
                            <a href="https://game-store-1483.web.app/" target="_blank" rel="noreferrer"><img src={gameStore} alt="game-store"></img></a>
                            </div>
                            <div className="project_game_text">
                                <h3><a href="https://game-store-1483.web.app/" target="_blank" rel="noreferrer">Game Branch Store</a></h3>
                                <p>This is a game shop, made with:</p>
                                <div className="made_ico">
                                    
                                    <i className="ico_react"><FaReact/>
                                        <p>React</p>
                                    </i>
                                    <i className="ico_css"><FaCss3Alt/>
                                        <p>CSS</p>
                                    </i>
                                    <i className="ico_html"><FaHtml5/>
                                        <p>HTML</p>
                                    </i>
                                    <i className="ico_firebase"><SiFirebase/>
                                        <p>Firebase</p>
                                    </i>
                                    <i className="ico_bootstrap"><BsFillBootstrapFill/>
                                        <p>Bootstrap</p>
                                    </i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="project_game_button">
                            <a href="https://game-store-1483.web.app/" target="_blank" rel="noreferrer">Go to Site</a>
                            <a href="https://github.com/nov1483/game-store-react-firebase" target="_blank" rel="noreferrer">GitHub Code</a>
                        </div>
                    </div>

                    <div className="project_game">
                        <div className="project_game_info">
                            <div className="project_game_img foto">
                            <a href="https://chelm-fotograf.web.app/" target="_blank" rel="noreferrer"><img src={foto} alt="Photografy"></img></a>
                            </div>
                            <div className="project_game_text">
                                <h3><a href="https://chelm-fotograf.web.app/" target="_blank" rel="noreferrer">Arkadiusz Smolira Fotografia</a></h3>
                                <p>My first commercial project<br/>made for a Polish photographer.<br/> In this work, I used:</p>
                                <div className="made_ico">
                                    
                                    <i className="ico_react"><FaReact/>
                                        <p>React</p>
                                    </i>
                                    <i className="ico_css"><FaCss3Alt/>
                                        <p>CSS</p>
                                    </i>
                                    <i className="ico_html"><FaHtml5/>
                                        <p>HTML</p>
                                    </i>
                                    <i className="ico_firebase"><SiFirebase/>
                                        <p>Firebase</p>
                                    </i>
                                    <i className="ico_js"><SiJavascript/>
                                        <p>JavaScript</p>
                                    </i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="project_game_button">
                            <a href="https://chelm-fotograf.web.app/" target="_blank" rel="noreferrer">Go to Site</a>
                            <a href="https://github.com/nov1483/photography" target="_blank" rel="noreferrer">GitHub Code</a>
                        </div>
                    </div>
                </div>
                <h3>More projects coming soon...🙂</h3>
            </div>
        </section>
    )
}

export default Projects;