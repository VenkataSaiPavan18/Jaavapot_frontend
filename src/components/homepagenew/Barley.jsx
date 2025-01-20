import React,{useState,useEffect} from 'react';
import './Barley.css'; // Import your CSS file for styling
import bar from "../../assets/babyfood/bar.png";

const Barley = () => {
    const [text, setText] = useState('');

    useEffect(() => {
      const originalText =
        "Hydrating and Refreshing Beverage - Barley water serves as a wholesome alternative to sugary drinks, supporting overall well-being for individuals navigating the demands of a busy work life.";
  
      let index = 0;
      const intervalId = setInterval(() => {
        setText(originalText.substring(0, index));
        index++;
  
        if (index > originalText.length) {
          clearInterval(intervalId);
        }
      }, 50);
  
      return () => clearInterval(intervalId);
    }, []);
  
  return (
    <div className='mt-5'>
    <div className="container barley" >
     
      <div className="contentnew" style={{textAlign:"center"}}>
        <h1 > "Enjoy Weekend, Be Ready for Weekdays" </h1>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
        <span style={{fontSize:"14px",color:"#f05411",fontWeight:"bold"}}>100% Pure</span>
        <span  style={{fontSize:"14px",color:"#f05411",fontWeight:"bold"}}>No Sweeteners</span>
        <span  style={{fontSize:"14px",color:"#f05411",fontWeight:"bold"}}>No Additives</span>
        <span  style={{fontSize:"14px",color:"#f05411",fontWeight:"bold"}}>Gluten Free</span>
      </div>
       <p className='para mt-3'>{text}</p>
      </div>
      <img
        className="responsive-image1"
        src={bar}
        alt="Description of the image"
      />
    </div>
    </div>
  );
};

export default Barley;
