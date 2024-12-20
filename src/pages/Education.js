import React from 'react'
import './Education.css'
import { Outlet, NavLink } from "react-router-dom"
import thdaomal from '../assets/thdaomal.png';
import ranalucky from '../assets/raha lucly.jpg'

export default function education() {
  return (
    
      
  <section class="education" id="education">

    <h1 class="heading"> My Education</h1>

    

    <div class="box-container">

      <div class="box">
        <div class="image">
          <img draggable="false" src={thdaomal} alt="Thadomal Shahani Engineering College,Mumbai" />
        </div>
        <div class="content">
          <h3>B.Tech</h3>
          <p>Thadomal Shahani Engineering College,Mumbai</p>
          <h4>2023-2027 </h4>
        </div>
      </div>

      <div class="box">
        <div class="image">
          <img draggable="false" src="" alt="LAXMINARAYAN INTERNATIONAL JR COLLEGE, KHAMGAON" />
        </div>
        <div class="content">
          <h3>High School</h3>
          <p>Laxminarayan International Jr College, Khamgaon</p>
          <h4>2021-2023 | Completed</h4>
        </div>
      </div>
      <div class="box">
        <div class="image">
          <img draggable="false" src={ranalucky} alt="Shri Indra Bahadur Singh National Inter College Bhadohi 221401 U.P." />
        </div>
        <div class="content">
          <h3>Intermediate</h3>
          <p>Rana Lucky Sananda Educational Shower.Khamgaon</p>
          <h4>2020-2021 | Completed</h4>
        </div>
      </div>

    </div>
  </section>
 
    
  )
}
