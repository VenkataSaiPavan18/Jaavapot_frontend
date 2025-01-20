import React from 'react';
import "./steps.css";
import { useParams } from 'react-router-dom';
import FoodData from '../../../contants/data';
import nutri from "../../../assets/babyfood/nutri1.png";
const Steps = () => {
    const { id } = useParams();

  // Find the selected food item based on the id
  const selectedFood = FoodData.find((food) => food.id === parseInt(id));

  return (
    <div className='stepbg m-0'>
         {selectedFood && (
            <> <h3 style={{textAlign:"center",fontWeight:"bold",padding:"10px"}}>{selectedFood.name}</h3>
    <div className="card-group">
       
    <div className="card m-1 mt-5" style={{backgroundColor:"transparent",border:"0px"}}>
      <img className="card-img-top" style={{height:"150px",width:"60%",marginLeft:"auto",marginRight:"auto",borderRadius:"350px",}} src={selectedFood.image} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title" style={{fontWeight:"bold"}}>Description</h5>
        <p className="card-text">{selectedFood.des}</p>
             </div>
    </div>
    
    <div className="card m-1 mt-5" style={{backgroundColor:"transparent",border:"0px"}}>
      <img className="card-img-top" style={{height:"150px",width:"60%",marginLeft:"auto",marginRight:"auto"}} src="https://www.ameresco.com/wp-content/uploads/2022/05/Health-Coverage-1.png" alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title" style={{fontWeight:"bold"}}>Potential Health Benefits</h5>
        <p className="card-text">{selectedFood.phb}</p>
       
      </div>
    </div>
    <div className="card m-1 mt-5" style={{backgroundColor:"transparent",border:"0px"}}>
      <img className="card-img-top" style={{height:"150px",width:"60%",marginLeft:"auto",marginRight:"auto"}} src={nutri} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title" style={{fontWeight:"bold"}}>Nutritional Components</h5>
        <p className="card-text">{selectedFood.nutri}</p>
      
      </div>
    </div>
  </div>
  </>
   )}
  </div>
  )
}

export default Steps