// import instaIcon from '../assets/insta-icon.png'
// import facebookicon from '../assets/facebookicon.avif'
import uday from '..//assets/Profile.jpg'

import { Outlet, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter,
    faGithub,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export default function Home() {
    return (
        <div className="container">
            <div className="animated-rectangle"></div>
            <div className="text">
                <div className="centered-title">
                    <div className="content">
                        <h1> Hi There,<br />
                            <span> I'm  Uday Natthani</span></h1>
                        {/* <br />
                        <br />
                        <br />
                        <br /> */}
                        <p>
                            <NavLink to="about" className="btn"><span>About Me</span></NavLink>
                        </p>
                        {/* <p>
                            <NavLink to="Education" className="btn"><span>Education</span></NavLink>
                        </p> */}
                        <div className="socials">
                            <ul className="social-icons">
                                <li><a className="facebook" aria-label="Facebook" href="https://www.facebook.com/uday.natthani/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                <li><a className="instagram" aria-label="Instagram" href="https://www.instagram.com/udaynatthani/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a className="github" aria-label="GitHub" href="https://github.com/udaynatthani" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                                <li><a className="github" aria-label="LinkedIn" href="https://github.com/udaynatthani" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* <div className="image">
                <img draggable="false" className="tilt" src={uday} alt="dgvv" />
            </div> */}
        </div>
    )
}