import React, {useState} from "react";
import { Link } from "react-router-dom";
import {useLocation} from "react-router-dom";
import './css/header_nav.css'

function Header () {
    const location = useLocation();
    const [check, setCheck] = useState(false)
    return(
        <header className="header">
            <div className="container header_container">
                <div className="burger">
                        <input type="checkbox" checked={check} onChange={() => setCheck(!check)} className="burger__check" id="burger-check" />
                        <label htmlFor="burger-check">
                            <span></span>
                        </label>
                        <nav className="burger-nav">
                            <ul>
                                <li><Link to='/' className={location.pathname === '/' ? "active" : "link_menu"} checked={check} onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>Home</Link></li>
                                <li><Link to='/about' className={location.pathname === '/about' ? "active" : "link_menu"} checked={check} onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>About</Link></li>
                                <li><Link to='/skills' className={location.pathname === '/skills' ? "active" : "link_menu"} checked={check} onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>Skills</Link></li>
                                <li><Link to='/projects' className={location.pathname === '/projects' ? "active" : "link_menu"} checked={check} onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>Projects</Link></li>
                                <li><Link to='/contacts' className={location.pathname === '/contacts' ? "active" : "link_menu"} checked={check} onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>Contacts</Link></li>
                            </ul>
                        </nav>
                                    
                </div> 
                <nav className="nav">
                    <ul>
                        <li><Link to='/' className={location.pathname === '/' ? "active" : "link_menu"}>Home</Link></li>
                        <li><Link to='/about' className={location.pathname === '/about' ? "active" : "link_menu"}>About</Link></li>
                        <li><Link to='/skills' className={location.pathname === '/skills' ? "active" : "link_menu"}>Skills</Link></li>
                        <li><Link to='/projects' className={location.pathname === '/projects' ? "active" : "link_menu"}>Projects</Link></li>
                        <li><Link to='/contacts' className={location.pathname === '/contacts' ? "active" : "link_menu"}>Contacts</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;