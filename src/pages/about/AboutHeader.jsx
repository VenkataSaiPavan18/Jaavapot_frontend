// import React from 'react'
// import './about.css'
// import image1 from "../../assets/img/home/cup-porridge-with-oatmeal-cookies-top-view.jpg"

// const AboutHeader = () => {
//   return (
//     <div className='about-container'>
//       <div className='img-container d-flex'>
//       <div className='about-card card p-4 pt-5' style={{width:'30rem', height:'30rem'}}>
//         <div  style={{borderBottom:' 3px solid black'}}>

//             <h3>About Us</h3>
//         </div>
//             <div style={{borderBottom:' 3px solid black',paddingTop:"10px"}}>

//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
//             </div>
//         </div>
//         <div>

//         <img src={image1} height='800' width='800'/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AboutHeader

import React from 'react';
import './about.css';
import image1 from '../../assets/img/home/cup-porridge-with-oatmeal-cookies-top-view.jpg';

const AboutHeader = () => {
  return (
    <div className='about-container'>
      <div className='img-container'>
        {/* <div className='about-card card p-4 pt-5'>
        <div style={{ borderBottom: '3px solid rgba(255, 99, 71, 0.5)', borderRadius: '50%' }}>
            <h3 className='about-heading'>ABOUT US</h3>
          </div>

          <div style={{ borderBottom: '3px solid black', paddingTop: '10px' }}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>  <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>  <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>  <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>  <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>  <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>  <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>  <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          
          </div>
        </div> */}
        <img src={image1} alt='About' height='800' width='800' className='image' />
      </div>
    </div>
  );
};

export default AboutHeader;

