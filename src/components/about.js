import React from "react";
import aboutImg from "../img/Saly-10.png";
import cvPl from "./cv_pl.pdf";
import cvEng from "./cv_eng.pdf";
import "./css/about.css"

function About() {
    return(
        <section className="about">
            <div className="container about_container">
                <div className="about_title">
                    <img src={aboutImg} alt='aboutImg'></img>
                    <h1>I’m Antoni Nowicki A <br/> <span className="front">Frontend</span> developer</h1>
                </div>
                <div className="about_info">
                    <p>I started getting interested in computers in 2010 when I was 14 years old.
                        In those same years, I assembled my first computer from spare parts. 
                    </p>
                    <p>In my spare time, I do self-education.
                        I also like sports, like playing basketball. But usually I write code all day long.🙂
                    </p>
                    <p><span className="front">Frontend</span> began to interest me a long time ago, but only recently I got to its deep study. 
                        And recently I completed an 8-month training course at <a href="https://myitschool.by/" target="_blank" rel="noreferrer">My IT School</a>.
                        At the moment I am looking for a job with good, smart and experienced people to learn from them myself and gain experience.
                    </p>
                    <p>My desire to start working on a real project and become part of the IT world!</p>
                </div>
            </div>
            <div className="download_cv">
                <h2>You can also download my CV to get to know me better.</h2>
                <a href={cvPl} download=''>Download CV in Polish</a>
                <a href={cvEng} download=''>Download CV in English</a>
            </div>
        </section>
    )
}

export default About;