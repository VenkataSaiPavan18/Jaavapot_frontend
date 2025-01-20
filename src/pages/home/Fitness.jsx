import React from 'react'
import "./home.css";
import rcimg from "../../assets/img/home/rotate-circle.png";

const Fitness = () => {
  return (
    <div className='rotationbg'>
     <img src={rcimg}  style={{height:"35rem",width:"35rem",animation: 'rotate 10s linear infinite'}}/>
    </div>
  )
}

export default Fitness