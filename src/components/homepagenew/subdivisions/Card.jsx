
import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "../../../store/ContextReducer";
import { Link, useNavigate } from 'react-router-dom';

export default function Card(props) {
  const nav = useNavigate();

  const dispatch = useDispatchCart();
  const data = useCart();
  const foodItem = props.foodItem;
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  
  const handleAddToCart = async () => {
    if (!localStorage.getItem("token")) {
      alert("Please login to add items into cart");
    } else {
      let food = [];
      for (const item of data) {
        if (item.id === foodItem._id) {
          food = item;
          alert(`added item ${foodItem.itemname} to your cart`);
          break;
        }
      }
      
      if (food !== null) {
        if (food.size === size) {
          await dispatch({
            type: "UPDATE",
            id: foodItem._id,
            price: finalPrice,
            qty: qty
          });
          return;
        } else if (food.size !== size) {
          await dispatch({
            type: "ADD",
            id: foodItem._id,
            name: foodItem.itemname,
            price: finalPrice,
            qty: qty,
            size: size,
            img: props.ImgSrc
          });
          alert(`added item ${foodItem.itemname} to your cart`);
          return;
        }
        return;
      }
      
      await dispatch({
        type: "ADD",
        id: foodItem._id,
        name: foodItem.itemname,
        price: finalPrice,
        qty: qty,
        size: size
      });
    }
  };

  const handleIncrement = () => {
    setQty(qty + 1);
  };

  const handleDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const finalPrice = qty * parseInt(foodItem.details[0].price || 0);
  const quantity = foodItem.details[0].quantity;

  return (
    <div className="card mt-3"
    style={{ boxShadow: "0px 2px 4px 2px #ba5013" , borderRadius: "18px", margin: '30px', width: '240px', backgroundColor: "rgba(189, 152, 109,0.5)", padding: "10px" }}
    >
      <img
        src={foodItem.imagepath}
        onClick={() => { nav(`/product/${foodItem._id}`);window.scrollTo(0, 0); }}
       
        className="card-img-top"
        alt="..."
        style={{ margin:"0px",padding:"0px",height: "140px",width:"100%",justifySelf:"center",alignSelf:"center",  objectFit: "fill" ,cursor:"pointer"}}
      />
      <div className="card-body">
        <h5 className="card-title" style={{  overflow: "hidden",fontSize:'14px',fontWeight:"bold",color:"black" }} >{foodItem.itemname}</h5>
        
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",}}>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>
            <button className="btn  btn-sm" onClick={handleDecrement} style={{backgroundColor:"rgba(189, 152, 109, 0.7)",height:"18px",fontSize:"17px",fontWeight:"bolder",display:"flex",justifyContent:"center",alignItems:"center"}}>-</button>
            <input type="text" className="form-control mx-2" style={{ fontSize: "12px",  textAlign: "center" ,fontWeight:"bold",width:"30%",padding:'2px'}}  value={qty} readOnly />
           <button className="btn  btn-sm" onClick={handleIncrement} style={{backgroundColor:"rgba(189, 152, 109, 0.7)",height:"18px",fontSize:"15px",fontWeight:"bolder",display:"flex",justifyContent:"center",alignItems:"center"}}>+</button>
           </div>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>
            <p style={{fontSize:"16px",fontWeight:"bolder",marginTop:"15px",color:" green"}}>   ₹{finalPrice} </p>
           </div>
          
          </div>
         
       <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0px",textAlign:"start"}}>
        <p style={{fontSize:"12px"}}>{foodItem.description.slice(0,30)}
        <span style={{color:"#f76a1e",cursor:"pointer"}}  onClick={() => { nav(`/product/${foodItem._id}`) }} > more..</span>
        </p>
        <button className="btn " style={{backgroundColor:"rgba(247, 91, 7)",color:"white", boxShadow: "2px 2px 2px 2px black" ,fontSize:'12px',fontWeight:"bold"}} onClick={handleAddToCart}>
          Add
        </button>
        </div>

       
      </div>
    </div>
  );
}
