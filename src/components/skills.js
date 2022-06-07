import React from "react";
import responsive from "../img/responsive.png"
import "./css/skills.css"
function Skills() {
    return(
        <section className="skills">
            <div className="container skills_container">
                <h2>Skills</h2>
                <div className="skills_ico">
                    <i className="ico ico_css"><p>CSS</p></i>
                    <i className="ico ico_html"><p>HTML</p></i>
                    <i className="ico ico_js"><p>JavaScript</p></i>
                    <i className="ico ico_bootstrap"><p>Bootstrap</p></i>
                    <i className="ico ico_react"><p>React</p></i>
                    <i className="ico ico_git"><p>Git</p></i>
                    <i className="ico ico_git_hub"><p>GitHub</p></i>
                    <i className="ico ico_npm"><p>NPM</p></i>
                    <i className="ico ico_sass"><p>SASS</p></i>
                    <i className="ico ico_firebase"><p>Firebase</p></i>
                </div>
                <div className="responsive">
                    <h2>Design Responsive</h2>
                    <div className="resp_img">
                        <img src={responsive} alt='responsive'></img>
                    </div>
                    <div className="resp_info">
                        <p>Responsive web design is about creating web pages that look good on all devices!</p>
                        <p>A responsive web design will automatically adjust for different screen sizes and viewports.</p>
                        <h3>What is Responsive Web Design?</h3>
                        <p>Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge,
                             a website, to make it look good on all devices (desktops, tablets, and phones)
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Skills;