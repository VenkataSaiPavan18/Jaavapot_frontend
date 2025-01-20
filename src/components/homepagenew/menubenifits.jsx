// Inside the Menubenefits component
import React from 'react';
import { useParams } from 'react-router-dom';
import FoodData from '../../contants/data';
import "./homepage.css";

const Menubenefits = () => {
  const { id } = useParams();

  // Find the selected food item based on the id
  const selectedFood = FoodData.find((food) => food.id === parseInt(id));

  return (
    <div>
     
      {selectedFood && (
        <div className=" menubeftbg" style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
         <img className="d-none d-md-block"src={selectedFood.image} style={{height:"300px",width:"300px"}}/> 
          <img  className="" src={selectedFood.details} alt={selectedFood.name} style={{height:"",width:"60%",borderRadius:"15px",}} />
          {/* Additional content based on the selected food */}
        </div>
      )}
    </div>
  );
};

export default Menubenefits;
