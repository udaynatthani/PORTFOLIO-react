import React from 'react'
import { Outlet, NavLink } from "react-router-dom"

export default function Help() {
  return (
    <div className='help-Layout'>
      
      <marquee  direction="rigth" >WELCOME TO HELP CENTRE</marquee>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aspernatur?</p> */}
        <nav>
            {/* <NavLink to="faq">View the FAQ</NavLink> */}
            <br />
            <NavLink to="Contact">Conatct Us</NavLink>
        </nav>
      <Outlet/>

    </div>
  )
}
