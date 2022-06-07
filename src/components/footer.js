import React from "react";
import {BsGithub} from "react-icons/bs"
import {IoLogoLinkedin} from "react-icons/io"
import "./css/footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_links">
                <i className="ico ico_git">
                    <a href="https://github.com/nov1483" target="_blank" rel="noreferrer"><BsGithub/></a>
                </i>
                <i className="ico ico_linkin">
                    <a href="https://www.linkedin.com/in/anton-nowicki/" target="_blank" rel="noreferrer"><IoLogoLinkedin/></a>
                </i>
            </div>
        </footer>
    )
}

export default Footer;