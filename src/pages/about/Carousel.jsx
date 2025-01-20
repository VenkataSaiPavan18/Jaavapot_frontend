import React from 'react'
import img1 from '../../assets/img/home/carousel/raagi-porridge-01.jpg'
import img2 from '../../assets/img/home/carousel/Porridge-02.jpg'
import img3 from '../../assets/img/home/carousel/Paanakam-03.jpg'

function Carousel() {
    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
        height:'30rem',
        opacity:0.6,
      };
    
  return (

<div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel" style={{objectFit:"contain !importent"}}>

<div className="carousel-inner " id='carousel'>
    
    <div className="carousel-item active" >
        <img src={img1} className="d-block w-100  " style={imageStyle} alt="..." />
    </div>
    <div className="carousel-item">
        <img src={img2} className="d-block w-100 " style={imageStyle} alt="..." />
    </div>
    <div className="carousel-item">
        <img src={img3} className="d-block w-100 " style={imageStyle} alt="..." />
    </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
</button>
</div>

  )
}

export default Carousel
