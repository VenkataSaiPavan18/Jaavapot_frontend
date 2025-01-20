import React from 'react';
import './piediagram.css'; // Import your CSS file for styling

const NutritionalBenefits = () => {
  return (
    <div className="nutritional-benefits-container  mt-4">
      <h2 style={{textAlign:"center",color:"#ed7411",fontWeight:"bolder"}}>Nutritional Benefits</h2>
      <p>Each 100 gram (g) of cooked millet contains the following:</p>
      <div className="nutrient">
        <h3>Protein (g)</h3>
        <p  style={{color:"#ed7411",fontWeight:"bolder"}}>3.51 g</p>
      </div>
      <div className="nutrient">
        <h3>Carbohydrate (g)</h3>
        <p style={{color:"#ed7411",fontWeight:"bolder"}}>23.7 g</p>
      </div>
      <div className="nutrient">
        <h3>Dietary Fiber (g)</h3>
        <p style={{color:"#ed7411",fontWeight:"bolder"}}>1.3 g</p>
      </div>
      <div className="nutrient">
        <h3>Magnesium (mg)</h3>
        <p style={{color:"#ed7411",fontWeight:"bolder"}}>44 mg</p>
      </div>
      <div className="nutrient">
        <h3>Copper (mg)</h3>
        <p style={{color:"#ed7411",fontWeight:"bolder"}}>0.161 mg</p>
      </div>
      <div className="nutrient">
        <h3>Phosphorus (mg)</h3>
        <p style={{color:"#ed7411",fontWeight:"bolder"}}>100 mg</p>
      </div>
      <div className="nutrient">
        <h3>Manganese (mg)</h3>
        <p style={{color:"#ed7411",fontWeight:"bolder"}}>0.272 mg</p>
      </div>
    </div>
  );
};

export default NutritionalBenefits;
