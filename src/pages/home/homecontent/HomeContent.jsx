import React, { useState, useEffect } from 'react';
import FoodData from '../../../contants/data';
import { Link } from 'react-router-dom';
import './homeContent.css'
import img1 from '../../../assets/img/home/image1.png';

const HomeContent = () => {
  const [currentIndex, setCurrentIndex] = useState(FoodData.length - 1); // Start with the last image
  const [rotationStopped, setRotationStopped] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [zoomedIndex, setZoomedIndex] = useState(null);
    // Use a variable to store the description of the first item
    const firstItemDescription = FoodData[0].description;

   
  


    useEffect(() => {
      const interval = setInterval(() => {
        if (!rotationStopped) {
          setCurrentIndex((prevIndex) => (prevIndex - 1) % FoodData.length);
        }
      }, 3000); // Change image every 3 seconds
  
      return () => {
        clearInterval(interval);
      };
    }, [rotationStopped]);
  
    const angleIncrement = 45; // Adjust angle increment based on the number of images
  
    const handleImageClick = (index) => {
      // Stop rotation and display the selected item's description
      setRotationStopped(true);
      setSelectedItem(FoodData[index]);
      setSelectedImageIndex(index);
      setZoomedIndex(index);
  
      console.log(index)
  
      // After 15 seconds, start rotation again
      setTimeout(() => {
        setRotationStopped(false);
        setSelectedImageIndex(null);
        setZoomedIndex(null);
  
      }, 15000);
    };
  return (
    <div
    className="appbg bg2"
    style={{
      position: 'relative',
      height: '110vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >

<div className="zoom-animation d-block d-sm-none" style={{position:"absolute",left:70,top:40,}}>
      <h3 style={{textAlign:"center",color:"red"}}>It's Time to Relish the 
        <br></br>Superfoods</h3>
    </div>
     <div 
     className='circleposition'
      style={{position:"absolute",
      index:-1,
      // border:"10px #f79b79 solid",
      // border:"10px #fadbcf solid",
     
      }}>

     </div>
    {FoodData.map((item, index) => {
      // Calculate the rotation angle for each image based on the currentIndex
      const rotation = (angleIncrement * (index - currentIndex + FoodData.length)) % 360;

      // Calculate the position on the semicircle using trigonometry
      const x = Math.cos((rotation - 90) * (Math.PI / 180)) * 230;
      const y = Math.sin((rotation - 90) * (Math.PI / 180)) * 230;

       // Determine if the image should be zoomed
       const isZoomed = zoomedIndex === index;

      return (
        <div key={index}>
  
          <img
            src={item.image}
            alt={`Image ${index + 1}`}
            className='foodimg'
            style={{
              position: 'absolute',
              left: `calc(5% + ${x}px)`,
              top: `calc(45% + ${y}px)`,
              // transform: `rotate(${rotation}deg)`,
              // width: '125px',
              // height: '125px',
              borderRadius: '150px',
              cursor: 'pointer',

              // Apply scale and border styles to the clicked image
              transform: selectedImageIndex === index ? 'scale(1.2)' : 'scale(1)',
              border: selectedImageIndex === index ? '6px solid #f56936' : 'none',
              transition: 'transform 0.3s, border 0.3s', // Add transition for smooth animation
              boxShadow: selectedImageIndex === index ? '2px 2px 4px 2px rgba(0, 0, 0, 0.8)':'2px 2px 4px 2px rgba(0, 0, 0, 0.8)'
            
            }}
            onMouseEnter={() => handleImageClick(index)}
            onClick={() => handleImageClick(index)}
          />
        </div>
      );
    })}



    <div
      className="content"
      style={{
        position: 'absolute',
       
      }}
    >
      {/* Conditional rendering to show the first item's description initially */}
      {selectedItem === null ? (
        <>
        <div style={{margin:'20px'}}>
          <span style={{ marginBottom: '5px', backgroundColor: '#e6cfc1', color: '#ed694c', fontWeight: 'bold',fontSize:'12px' }}>
            NUTRITIONAL FACTS
          </span>
          <br />
          <p style={{ marginBottom: '10px', fontWeight: '600',fontSize:'12px' }}>COUNTRY : THIS PLATE HAS</p>
          <div style={{padding:"10px"}}>
            <button className="btn1">
              FAT <br></br>
              <span className="span1">{FoodData[0].fat}G</span>
            </button>
            <button className="btn1">
              SODIUM <br></br>
              <span className="span1">{FoodData[0].sodium}G</span>
            </button>
            <button className="btn1">
              PROTEIN <br></br>
              <span className="span1">{FoodData[0].proteins}G</span>
            </button>
            <button className="btn1">
              CARBS <br></br>
              <span className="span1">{FoodData[0].carbs}G</span>
            </button>
          </div>
          <p style={{ marginBottom: '5px', fontWeight: '600',fontSize:'12px' }}>DAILY NUTRIENTS</p>
          <br />
          <Link to={`/details/1`}>
        <button className="btn btn2" style={{padding:"3px",fontSize:"12px",cursor:"pointer"}}>MORE</button>
      </Link>
          {/* <p>{firstItemDescription}</p> */}
          </div>
        </>
      ) : (
        /* Display the selected item's description when an image is clicked */
        <>
        <div style={{margin:'20px'}}>
          <span style={{ marginBottom: '5px', backgroundColor: '#e6cfc1', color: '#ed694c', fontWeight: 'bold',fontSize:'12px' }}>
            NUTRITIONAL FACTS
          </span>
          <br />
          <p style={{ marginBottom: '10px', fontWeight: '600',fontSize:'13px' ,color:""}}>{selectedItem.name}</p>
          <p style={{ marginBottom: '10px', fontWeight: '600',fontSize:'12px' }}>COUNTRY : THIS PLATE HAS</p>
          <div>
            <button className="btn1">
              FAT <br></br>
              <span className="span1">{selectedItem.fat}G</span>
            </button>
            <button className="btn1">
              SODIUM <br></br>
              <span className="span1">{selectedItem.sodium}G</span>
            </button>
            <button className="btn1">
              PROTEIN <br></br>
              <span className="span1">{selectedItem.proteins}G</span>
            </button>
            <button className="btn1">
              CARBS <br></br>
              <span className="span1">{selectedItem.carbs}G</span>
            </button>
          </div>
          <p style={{ marginBottom: '5px', fontWeight: '600',fontSize:'12px' }}>DAILY NUTRIENTS</p>
          <br />
          <Link to={`/details/${selectedItem.id}`}>
        {/* <button className="btn btn2">MORE</button> */}
        <button className="btn btn2" style={{padding:"4px",fontSize:"15px",cursor:"pointer"}}>MORE</button>
     
      </Link>
      </div>
          {/* <p>{selectedItem.description}</p> */}
        </>
      )}
    </div>
    <div className='imageMillet'>
    <img src={img1} width='600' height='600' className='home-image'/>
    </div>
  </div>
  )
}

export default HomeContent
