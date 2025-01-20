// import React from 'react';
// import './footer.css';

// const Ticker = () => {

//   return (
//     <div className="ticker-container">
//         <div className='ticker'>
//         <span className="custom-mdi mdi mdi-check"></span><a href="#">Dairy Free</a>
//     <span className="custom-mdi mdi mdi-check"></span><a href="#">Gluten Free</a>
//     <span className="custom-mdi mdi mdi-check"></span><a href="#">Halal</a>
//     <span className="custom-mdi mdi mdi-check"></span><a href="#">Lactose Free</a>
//     <span className="custom-mdi mdi mdi-check"></span><a href="#">MSG Free</a>
//     <span className="custom-mdi mdi mdi-check"></span><a href="#">No Artificial Colours</a>
//     <span className="custom-mdi mdi mdi-check"></span><a href="#">No Artificial Flavours</a>
//     <span className="custom-mdi mdi mdi-check"></span><a href="#">No Artificial Preservatives</a>
//     <span className="custom-mdi mdi mdi-check"></span><a href="#">No Cholesterol</a>
//     <span className="custom-mdi mdi mdi-check"></span><a href="#">No Preservatives</a>
//     <span className="custom-mdi mdi mdi-check"></span><a href="#">No Trans Fat</a>
//     <span className="custom-mdi mdi mdi-check"></span><a href="#">Non GMO</a>
//     <span className="custom-mdi mdi mdi-check"></span><a href="#">Organic</a>
//     <span className="custom-mdi mdi mdi-check"></span><a href="#">Vegan</a>
//     <span className="custom-mdi mdi mdi-check"></span><a href="#">Vegetarian</a>
//     </div>
//   </div>
//   );
// };

// export default Ticker;


import React from 'react';
import './footer.css';
import { BsCheck } from 'react-icons/bs'; // Import the Bootstrap icon you need

const Ticker = () => {
  const iconSize = 50; // Adjust the icon size as needed

  return (
    <div className="ticker-container">
      <div className='ticker'>
        {/* <span className="custom-mdi mdi mdi-check"><BsCheck size={iconSize} /></span><a href="#">Dairy Free</a> */}
        <span className="custom-mdi mdi mdi-check"><BsCheck size={iconSize} /></span><a href="#">Gluten Free</a>
        <span className="custom-mdi mdi mdi-check"><BsCheck size={iconSize} /></span><a href="#">Halal</a>
        <span className="custom-mdi mdi mdi-check"><BsCheck size={iconSize} /></span><a href="#">Lactose Free</a>
        <span className="custom-mdi mdi mdi-check"><BsCheck size={iconSize} /></span><a href="#">MSG Free</a>
        <span className="custom-mdi mdi mdi-check"><BsCheck size={iconSize} /></span><a href="#">No Artificial Colours</a>
        <span className="custom-mdi mdi mdi-check"><BsCheck size={iconSize} /></span><a href="#">No Artificial Flavours</a>
        <span className="custom-mdi mdi mdi-check"><BsCheck size={iconSize} /></span><a href="#">No Artificial Preservatives</a>
        <span className="custom-mdi mdi mdi-check"><BsCheck size={iconSize} /></span><a href="#">No Cholesterol</a>
        <span className="custom-mdi mdi mdi-check"><BsCheck size={iconSize} /></span><a href="#">No Preservatives</a>
        <span className="custom-mdi mdi mdi-check"><BsCheck size={iconSize} /></span><a href="#">No Trans Fat</a>
        <span className="custom-mdi mdi mdi-check"><BsCheck size={iconSize} /></span><a href="#">Non GMO</a>
        <span className="custom-mdi mdi mdi-check"><BsCheck size={iconSize} /></span><a href="#">Organic</a>
        <span className="custom-mdi mdi mdi-check"><BsCheck size={iconSize} /></span><a href="#">Vegan</a>
        <span className="custom-mdi mdi mdi-check"><BsCheck size={iconSize} /></span><a href="#">Vegetarian</a>
      </div>
    </div>
  );
};

export default Ticker;
