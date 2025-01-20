


import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import './homepage.css';
import FoodData from '../../contants/data.js'; // Import your food data
import { Link } from 'react-router-dom';
import mainimg from "../../assets/img/home/image12.png"
import Whatsnew from './Whatsnew.jsx';
import Carousel from '../../pages/home/Carousel.jsx';
import Fitness from '../../pages/home/Fitness.jsx';
import Newcarosel from './Newcarosel.jsx';
import Header from '../../pages/home/Header.jsx';
import About from './About.jsx';
import Blogs from './blogs.jsx';
import reviews from '../../contants/reviews.js';
import Arrow from './Arrow.jsx';
import BabyFood from './BabyFood.jsx';

import NutritionalBenefits from './Piediagram.jsx';
import Barley from './Barley.jsx';
import MagOrRag from './MagOrRag.jsx';
import Gallery from './Gallery.jsx';
import Myths from './Myths.jsx';



const Newhome = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
 

  const [points, setPoints] = useState([
    'Nutrient Rich, Mighty and Small',
    'Gluten-Free Goodness',
    'Stable Blood Sugar Symphony',
    'Heart Health Harmony',
  ]);
  const [currentPointIndex, setCurrentPointIndex] = useState(0);

  const [points2, setPoints2] = useState([
    "Rich in Antioxidants",
    "Supports Digestive Regularity",
    "Low Glycemic Index",
    "Weight Management"
  ]);
  const [currentPointIndex2, setCurrentPointIndex2] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPointIndex((prevIndex) => (prevIndex + 1) % points.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [points.length]);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPointIndex2((prevIndex) => (prevIndex + 1) % points2.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [points2.length]);



  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const videoUrl = 'https://www.youtube.com/embed/cb7tkjB8pT0';

  // Function to handle search input
  const handleSearch = (query) => {
    setSearchQuery(query);
  
    // Only show suggestions when there is a search query
    const suggestions =
      query !== ''
        ? FoodData.filter((food) => food.name.toLowerCase().includes(query.toLowerCase()))
        : [];
  
    setSearchSuggestions(suggestions);
  };



// ------------------------------rightside---------------

const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentReview = reviews[currentIndex];
 
  return (
 <div >  
  <div className='newbkg container-fluid '>
      <div className='row'>
        {/* Left side */}
        <div className='col-12 col-md-6 mt-5 mb-5' style={{ paddingLeft: '20px' }}>
          <h1 style={{ letterSpacing: '0.5px' }}>
            Jaavapot: Tiny seeds, <span style={{ color: '#ff5e0d' }}>big health.</span> Elevate{' '}
            <span style={{ color: '#ff5e0d' }}>every meal</span> into a superfood sensation.
          </h1>
          <p style={{ letterSpacing: '1px', paddingTop: '5px' }}>
            In the symphony of superfoods, let millets play the lead role, harmonizing health and
            taste for a nutrient-packed life.
          </p>
          <div className='input-group mb-3'>
            <input
              type='text'
              className=''
              placeholder='Know about your favorite superfood'
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              style={{width:"60%",borderRadius:"10px",padding:"5px",boxShadow:"1px 1px 1px 1px #ff5e0d",border:"0px",backgroundColor:"transparent"}}
            />
            {/* <div className='input-group-append'>
              <button className='btn btn-outline-secondary' type='button' style={{marginLeft:"10px",fontSize:"12px",}}>
                Search
              </button>
            </div> */}
          </div>
          {/* Display search suggestions */}
          {searchQuery !== '' && (
          <ul className='list-group' style={{maxHeight:"5rem",overflow:"auto",width:"60%"}}>
            {searchSuggestions.map((food) => (
           <Link
           to={{
             pathname: `/menubenefits/${food.id}`,
           
           }}
           key={food.id}
         >
           <li className='list-group-item' style={{ width: '100%' }}>
             {food.name}
           </li>
         </Link>
            ))}
          </ul>
          )}


<div className='mt-3' style={{display:"flex"}}>
          <a href="/blogspage"> <button className='btn '  style={{backgroundColor:"#ff5e0d",fontWeight:"bold",color:"white",fontSize:"15px",margin:"10px"}}>
              Know More
            </button> </a> 
         {/* <a href="https://www.youtube.com/watch?v=cb7tkjB8pT0" target='_blank'>
           <div
              className='btn btn-watch-video'
              style={{ color: '#ff5e0d', border: '2px solid #ff5e0d', fontSize: '13px', margin: '10px', fontWeight: 'bold' }}
             
            >
              <span>Watch Video</span> 
            </div>
            </a>  */}
            <div
        className='btn btn-watch-video'
        style={{
          color: '#ff5e0d',
          border: '2px solid #ff5e0d',
          fontSize: '13px',
          margin: '10px',
          fontWeight: 'bold',
        }}
        onClick={openModal}
      >
        <span>Watch Video</span>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Watch Video Modal"
        style={{
          overlay: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          content: {
            marginTop: '100px', // Adjust the top margin as needed
          },
        }}
      >
       
        <div>
          <iframe
            title="YouTube Video"
            width="100%"
            height="400"
            src={videoUrl}
         
            allowFullScreen
          ></iframe>
           <button onClick={closeModal} style={{backgroundColor:"#f26a0f",fontSize:"14px",color:"white",padding:"px",borderRadius:"20PX"}}>Close </button>
        </div>
      </Modal>
          </div>

<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}}>
  <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px",}} >
          <div style={{marginTop:"4px",display:"flex",justifyContent:"",alignItems:"center"}}>
            <img src='https://clipart-library.com/images/6iy599oAT.png' alt="tick" style={{height:"25px",width:"25px"}}/>
      <p style={{color:"#ff5e0d",fontWeight:"bold"}}>{points[currentPointIndex]}</p>
     
     
    </div>
    <div style={{marginTop:"4px",marginLeft:"20px",display:"flex",justifyContent:"",alignItems:"center"}}>
            <img src='https://clipart-library.com/images/6iy599oAT.png' alt="tick" style={{height:"25px",width:"25px"}}/>
      <p style={{color:"#ff5e0d",fontWeight:"bold"}}>{points2[currentPointIndex]}</p>
     
     
    </div>
    </div>
    
      <div className='rightinsidebox1' style={{ borderRadius:"10px",padding:"10px",boxShadow:"2px 2px 2px 2px #fc9258",minHeight:"200px",maxHeight:"500px",backgroundColor: "rgba(240, 207, 185,0.2)", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",  }}>
      {/* <p style={{marginBottom:"0px",fontSize:"15px",fontWeight:"bolder",paddingTop:"5px"}}>what our customers are saying?</p> */}
{/* <img src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1701330030/reviews_p07aah.png" style={{height:"80px",width:"180px",margin:"0px"}}/> */}
       
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center",marginTop:"0px" }}>
          <img src="https://cdn-icons-png.flaticon.com/512/4891/4891830.png" alt="reviews" style={{ height: "50px", width: "50px" }} />
          <p style={{ paddingLeft:"5px",paddingRight:"5px" }}>{currentReview.review}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p>- {currentReview.author}</p>
          <img src={currentReview.img} alt="reviewimg" style={{ height: "55px", width: "55px", borderRadius: "70px", marginLeft: "10px" }} />
        </div>
      </div>
   
    </div>
{/* <div style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
    <p style={{fontSize:"12px"}}>Our services available @ </p>
    <img src="https://entrackr.com/storage/2023/01/Zomato-Swiggy.jpg" style={{marginLeft:"10PX",height:"50px ",width:"110px",transform:"scale(1.1)"}} />
    </div>  */}
    </div>

        {/* Right side */}
     
      <div className='col-12 col-md-6' >
        <img
        src={mainimg}
        alt='Slideshow'
        style={{width:"100%",height:"100%",objectFit:"contain",transform: `scale(0.9)`}}
        
      />
 

    </div>
         
  

        </div>
      
      </div>
      <Barley/>
      <About/>

    
      {/* <Blogs/> */}
      <MagOrRag/>
      {/* <BabyFood/> */}
      {/* <NutritionalBenefits/> */}
   
        <Whatsnew/>
    
        {/* <Gallery/> */}
        

             {/* <Arrow/>  */}
              <Myths/> 
        <Header/>
       
        </div>
    
  );
};

export default Newhome;
