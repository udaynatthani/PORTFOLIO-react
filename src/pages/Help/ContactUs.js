import './contactUs.css'; // Check this path

import { Outlet, NavLink } from "react-router-dom"
export default function Contact() {
  return (
    <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">

            <input type="hidden" name="access_key" value="541ebeb4-1b99-4ec7-8539-45c99d6dcc53" />
            <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
            <input type="hidden" name="from_name" value="My Website" />


            <div className="form-group-container">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input id="name" name="name" className="form-input" placeholder="Your name" type="text" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" name="email" className="form-input" placeholder="Your email" type="email" required />
                </div>
               <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input id="phone" name="phone" className="form-input" placeholder="+910000000000" type="tel" required />
                    </div> 
                <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-textarea" id="message" name="message" placeholder="Your message" required></textarea>
                </div>
            </div>
            <button className="form-submit" type="submit">Contact Us</button>
          
        </form>
  )
}