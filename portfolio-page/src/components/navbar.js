import React from "react";
//React Imports from font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <p className="navbar-brand" href="#">Jamie's Portfolio</p>
            <button className="navbar-toggler" onclick="movebutton()" data-toggle="collapse" data-target="#navbarMenu">
                <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarMenu">
              <ul className="navbar-nav">
                    <li className="nav-item active">
                    <a className="nav-link" href="#HOME">HOME</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#ABOUT">ABOUT</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#WORK">WORK</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#CONTACT">CONTACT</a>
                    </li>
              </ul>
            </div>
        </nav>
    )
}

export default Navbar