import React, { useState, useEffect } from 'react';
import './Newcarosel.css'; // Import your CSS file for styling

const Newcarosel = () => {
  const images = [
    'https://www.healthifyme.com/blog/wp-content/uploads/2019/10/Millets-feature.jpg',
    'https://im.idiva.com/content/2023/Jul/1---2023-07-31T150644696_64c780d7e455c.png',
    'https://hips.hearstapps.com/hmg-prod/images/oatmeal-recipes-1672950628.jpg',
    'https://nikkivegan.com/wp-content/uploads/2021/03/DSC07164.jpg',
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    // Clear the interval when the component is unmounted or if you want to stop it for some reason
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div className="newcarosel-container" style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"",padding:"15px"}}>
      <img src={images[currentIndex]} alt={`image ${currentIndex + 1}`} style={{height:"350px",width:"350px"}} />
    </div>
  );
};

export default Newcarosel;
