import profileImage from '../assets/Profile.jpg';
import '../pages/about.css';

import { Outlet, NavLink } from "react-router-dom"
export default function About() {
    return (
        <section className='about' id="about">
            <h2 className="heading"><i className="fas fa-user-alt"></i> About <span>Me</span></h2>
            <div className="row">
                <div className="image">
                    <img draggable="false" className="tilt" src={profileImage} alt="Profile pic"/>
                </div>
                <div className="content">
                    <h3>I'm Uday Natthani</h3>
                    <span className="tag">Software Developer</span>
                    
                    <p> A passionate Frontend Developer with a keen eye for crafting visually appealing and user-friendly web experiences. Currently pursuing my Bachelor of Engineering (BE) degree at Thadomal Shahani Engineering College, I am dedicated to combining creativity and technical skills to bring ideas to life on the web.. </p>
                    
                    <div className="box-container">
                        <div className="box">
                          <p><span> age: </span> 19</p>
                          <p><span> phone : </span> +91 9175729290</p>
                        </div>
                        <div className="box">
                          <p><span> email : </span> Udaynatthani421@gmail.com</p>
                          <p><span> place : </span> Mumbai</p>
                         
                          
                        </div>
                        <p><NavLink to="/skills"><a  class="btn"><span>Skills</span></a></NavLink></p>
                        <p><NavLink to="/education" className="btn"><span>Education</span></NavLink></p>
                    </div>
                   
                    {/* <p><NavLink to="/">Back To Home</NavLink></p> */}
                    
                </div>
                
            </div>
            {/* <p><NavLink to="/"><a  class="btn"><span>Back To Home</span></a></NavLink></p> */}
        </section>
    )
}