import React from 'react'
import arrows from "../../assets/arrow2.png";

const Arrow = () => {
  return (
    <div className='m-2 mt-5' style={{textAlign:"center"}}>
  
  <div className='container' style={{ borderRadius:"10px",paddingTop:"20px",textAlign:"center",backgroundColor:"rgba(189, 152, 109,0.5)",}}>
  <h3 style={{textAlign:"center",color:"#f0660a",fontWeight:"bolder"}}>The Impact of Shifting to Healthy Food Habits</h3>
<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<ul style={{textAlign:"left",marginRight:"30px"}}>
    <p style={{textDecoration:"underline",fontWeight:"bold",textAlign:"center"}}>Decreases</p>
    <li>Chronic Diseases</li>
  
    <li>Poor Mental Health</li>
    <li>Unhealthy Weight Gain</li>
</ul>
<img src={arrows} alt="hello" style={{backgroundColor:"rgba(255,94,13,0.7)",borderRadius:"20px",height:"120px",width:"130px"}}/>
<ul  style={{textAlign:"left",marginLeft:"30px"}}>
<p style={{textDecoration:"underline",fontWeight:"bold",textAlign:"center"}}>Increases</p>
    <li>Energy Levels</li>
    <li>Immune System Function</li>
    <li>Weight Management</li>
</ul>
</div>
   </div>
   </div>
  )
}

export default Arrow



