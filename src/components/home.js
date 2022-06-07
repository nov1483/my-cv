import React from "react";
import { Link } from "react-router-dom";
import "./css/home.css"

function Home() {
    return(
        <section className="home">
            <div className="container home_container">
               
                <div className="home_info"> 
               
                    <h1>Hello there👋 
                        <div className="human_img">
                            {/* <img src={HumanImg} alt="home_img"></img> */}
                        </div>
                    </h1>
                    <h2>I am Anton</h2>
                    <p>I am a young aspiring front-end developer.<br/>
                        My motivation is to be a trained specialist in the field of React, Redux, but not limited to those.<br/> 
                        JavaScript, TypeScript, Hooks, SASS and other libraries and frameworks that are used in front end <br/>
                        development don't scare me.
                    </p>
                    <p>I am looking for a company where I can work in a team and learn to be an even better specialist!</p>
                    <div className="container_home_button">
                        <Link to="/about">About Me</Link>
                        <Link to="/projects">😮 Let’s see projects</Link>
                    </div>
                </div>
            </div> 
               
        </section>
    )
}

export default Home;