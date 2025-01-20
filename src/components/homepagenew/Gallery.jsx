import React from 'react';
import rm from "../../assets/babyfood/h.png";
import "./Gallery.css";

const Gallery = () => {
  // Array of image data (URL, size, style)
  const images = [
    { url: 'https://res.cloudinary.com/dyylqn8vb/image/upload/v1703573553/Success_in_business_usually_comes_to_those_who_dare_to_act_hy2s5i.png', style: { border: '1px solid red', height:'95vh' ,width:'350px'} },
   
    { url: "https://res.cloudinary.com/dyylqn8vb/image/upload/v1703565234/h_ww32kl.png", style: { border: '1px solid red',width:"500px" } },
    { url: 'https://res.cloudinary.com/dyylqn8vb/image/upload/v1703570666/km_zmaomn.png', size: '350px', style: { border: '2px solid blue' } },
    { url: 'https://res.cloudinary.com/dyylqn8vb/image/upload/v1703573553/Success_in_business_usually_comes_to_those_who_dare_to_act_hy2s5i.png', size: '200px', style: { border: '1px solid red' } },
    { url: 'https://res.cloudinary.com/dyylqn8vb/image/upload/v1703578209/tera_hirfjt.png', size: '50px', style: { border: '2px solid blue' } },
    { url: 'https://res.cloudinary.com/dyylqn8vb/image/upload/v1703578208/mil_geadkk.png', size: '100px', style: { border: '1px solid red' } },
   
  ];

  return (
    <div className='container mt-5  d-none d-md-block' >
     <div className='row' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div  className='col-4 d-none d-md-block gal11' style={{margin:'0px',padding:"0"}}>
        <img src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1703573553/Success_in_business_usually_comes_to_those_who_dare_to_act_hy2s5i.png" alt="poster" style={{height:"640px",boxShadow:"2px 2px 2px 2px black",marginTop:"5px",marginBottom:"5px",transform:'scale(0.9)'}}/>
        </div>
      <div className='col-12 col-md-8' style={{display:"flex",flexDirection:"column",margin:"0px",padding:"0"}}>
        <div>
       <img className='col-12 col-md-7 gal31' src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1703565234/h_ww32kl.png" alt="poster" style={{height:"300px",boxShadow:"2px 2px 2px 2px black",margin:"5px"}}/>
      <img src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1703578208/mil_geadkk.png" className='gal21 col-4 d-none d-md-inline' style={{height:"300px",boxShadow:"2px 2px 2px 2px black",margin:"5px"}}/>
       </div>

       <div>
       <img className='col-4 d-none d-md-inline gal41' src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1703578209/tera_hirfjt.png" alt="poster" style={{height:"300px",boxShadow:"2px 2px 2px 2px black",margin:"5px"}}/>
      <img src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1703570666/km_zmaomn.png" className='gal51 col-12 col-md-7' style={{height:"300px",boxShadow:"2px 2px 2px 2px black",margin:"5px"}}/>
       </div>
       </div>
        </div> 
     
    </div>
  );
};

export default Gallery;
