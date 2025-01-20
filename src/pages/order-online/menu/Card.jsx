

// import React, { useEffect, useRef, useState } from "react";
// import { useDispatchCart, useCart } from "../../../store/ContextReducer";

// export default function Card(props) {
//   const dispatch = useDispatchCart();
//   const data = useCart();
//   const foodItem = props.foodItem;
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState("");
  
//   const handleAddToCart = async () => {
//     if (!localStorage.getItem("token")) {
//       alert("Please login to add items into cart");
//     } else {
//       let food = [];
//       for (const item of data) {
//         if (item.id === foodItem._id) {
//           food = item;
//           alert(`added item ${foodItem.itemname} to your cart`);
//           break;
//         }
//       }
      
//       if (food !== null) {
//         if (food.size === size) {
//           await dispatch({
//             type: "UPDATE",
//             id: foodItem._id,
//             price: finalPrice,
//             qty: qty
//           });
//           return;
//         } else if (food.size !== size) {
//           await dispatch({
//             type: "ADD",
//             id: foodItem._id,
//             name: foodItem.itemname,
//             price: finalPrice,
//             qty: qty,
//             size: size,
//             img: props.ImgSrc
//           });
//           alert(`added item ${foodItem.itemname} to your cart`);
//           return;
//         }
//         return;
//       }
      
//       await dispatch({
//         type: "ADD",
//         id: foodItem._id,
//         name: foodItem.itemname,
//         price: finalPrice,
//         qty: qty,
//         size: size
//       });
//     }
//   };

//   const handleIncrement = () => {
//     setQty(qty + 1);
//   };

//   const handleDecrement = () => {
//     if (qty > 1) {
//       setQty(qty - 1);
//     }
//   };

//   const finalPrice = qty * parseInt(foodItem.details[0].price || 0);
//   const quantity = foodItem.details[0].quantity;

//   return (
//     <div className="card mt-3">
//       <img
//         src={foodItem.imagepath}
//         className="card-img-top"
//         alt="..."
//         style={{ height: "150px", objectFit: "fill" }}
//       />
//       <div className="card-body">
//         <h5 className="card-title">{foodItem.itemname}</h5>
//         <p className="card-text" style={{ height: "100px", overflow: "auto" }}>
//           {foodItem.description}
//         </p>
//         <div className="container w-100">
//           <div className="d-flex align-items-center">
//             <button className="btn btn-secondary btn-sm" onClick={handleDecrement}>-</button>
//             <input type="text" className="form-control mx-2" value={qty} readOnly />
//             <button className="btn btn-secondary btn-sm" onClick={handleIncrement}>+</button>
//           </div>
//           <div>
//             Price: ₹{finalPrice} 
//             {/* Price: ₹{finalPrice} - Quantity: {quantity} - ID: {foodItem._id} */}
//           </div>
//         </div>
//         <hr />
//         <button className="btn btn-success" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }




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
    style={{ boxShadow: "2px 2px 2px 2px black", borderRadius: "18px", margin: '30px', width: '250px', backgroundColor: "rgba(189, 152, 109,0.3)", padding: "10px" }}
    >
      <img
        src={foodItem.imagepath}
        className="card-img-top"
        onClick={() => { nav(`/product/${foodItem._id}`) }}
        alt="..."
        style={{ height: "150px", objectFit: "fill" }}
      />
      <div className="card-body">
        <h5 className="card-title">{foodItem.itemname}</h5>
        <p className="card-text" style={{ height: "100px", overflow: "auto" }}>
          {foodItem.description}
        </p>
        {/* <div
  style={{ 
    cursor: 'pointer',
    color: 'blue',
    textDecoration: 'underline',
    transition: 'transform 0.2s, color 0.2s', // Add transition for smooth animation
    fontWeight: 'bold', // Increase font weight on hover
    transform: 'translateY(0)', // Initial transform
  }}
  onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.color = 'black'; }} // Add pop-up effect and change color on hover
  onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.color = 'gray'; }} // Reset on mouse leave
  onClick={() => { nav(`/product/${foodItem._id}`) }}
>
  More Details
</div> */}
        {/* <div
  style={{ cursor: 'pointer', color: 'gray', textDecoration: 'none', }}
  onClick={() => { nav(`/product/${foodItem._id}`) }}
>
  More Details
</div> */}
        {/* <button className="btn btn-secondary btn-sm" onClick={() => { nav(`/product/${foodItem._id}`) }}>More Details</button> */}
        <div className="container w-100">
          <div className="d-flex align-items-center">
            <button className="btn btn-secondary btn-sm" onClick={handleDecrement}>-</button>
            <input type="text" className="form-control mx-2" value={qty} readOnly />
            <button className="btn btn-secondary btn-sm" onClick={handleIncrement}>+</button>
          </div>
          <div>
            Price: ₹{finalPrice} 
            {/* Price: ₹{finalPrice} - Quantity: {quantity} - ID: {foodItem._id} */}
          </div>
        </div>
        <hr />
        <button className="btn btn-light" style={{ boxShadow: "2px 2px 2px 2px black" ,fontSize:'16px'}} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
