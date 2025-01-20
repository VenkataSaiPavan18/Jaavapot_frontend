import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Whatsnew from './Whatsnew';
import RemainingProducts from './RemainingProducts';
import { useDispatchCart, useCart } from "../../store/ContextReducer";

const EachProduct = () => {
  // Access the route parameters using useParams
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const dispatch = useDispatchCart();
  const data = useCart();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pagoanalytics.azurewebsites.net/jaavapotmenu/api/products/${productId}`);
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [productId]);

  if (!productData) {
    return <div>Loading...</div>; // Add loading state or component
  }

  const handleAddToCart = async () => {
    if (!localStorage.getItem("token")) {
      alert("Please login to add items into cart");
    } else {
      let food = [];
      for (const item of data) {
        if (item.id === productData._id) {
          food = item;
          alert(`added item ${productData.itemname} to your cart`);
          break;
        }
      }
      
      if (food !== null) {
        if (food.size === size) {
          await dispatch({
            type: "UPDATE",
            id: productData._id,
            price: finalprice,
            qty: qty
          });
          return;
        } else if (food.size !== size) {
          await dispatch({
            type: "ADD",
            id: productData._id,
            name: productData.itemname,
            price: finalprice,
            qty: qty,
            size: size,
            img: productData.imagepath
          });
          alert(`added item ${productData.itemname} to your cart`);
          return;
        }
        return;
      }
      
      await dispatch({
        type: "ADD",
        id: productData._id,
        name: productData.itemname,
        price: finalprice,
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
  const finalprice = qty * parseInt(productData.details[0].price || 0);
  const actualprice=qty*productData.details[0].price*120/100;
  return (
    <div style={{margin:"20px",backgroundColor:"rgba(189, 152, 109,0.5)",padding:"20px",borderRadius:"20px",boxShadow:"2px 2px 2px 2px black"}}>
     
      <h4 style={{fontWeight:"bold"}}>Category:<span style={{color:"rgba(247, 91, 7)",fontWeight:"bold"}}> {productData.category}</span> </h4>
     <div className='row ' >
       
      
        <div className='col-12 col-md-6' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src={productData.imagepath} style={{height:"",width:"50%"}} />
        </div>
        <div className='col-12 col-md-6' >
            <h2>{productData.itemname}</h2>
            <h5 style={{color:"green",fontWeight:"bolder"}}>  ₹{finalprice} <span style={{textDecoration:"line-through", fontSize:"15px",marginLeft:"20px",color:"black",fontWeight:"400"}}> ₹{actualprice}  </span>  <span style={{fontSize:"14px",marginLeft:"10px",fontWeight:"bold",color:"brown"}}>20% Off</span> </h5> 
            <p>{productData.description}</p>
            <div className="d-flex align-items-center">
            <button className="btn  btn-sm" onClick={handleDecrement} style={{backgroundColor:"rgba(189, 152, 109, 0.7)",height:"20px",fontSize:"19px",fontWeight:"bolder",display:"flex",justifyContent:"center",alignItems:"center"}}>-</button>
            <input type="text"  style={{ width: "50px" ,fontSize:"13px",padding:"1px",fontWeight:"bold"}} className="form-control mx-2 text-center" value={qty} readOnly />
            <button className="btn  btn-sm" onClick={handleIncrement} style={{backgroundColor:"rgba(189, 152, 109, 0.7)",height:"20px",fontSize:"17px",fontWeight:"bolder",display:"flex",justifyContent:"center",alignItems:"center"}}>+</button>
          </div>
            <button className='btn mt-3'  onClick={handleAddToCart}  style={{backgroundColor: "rgba(247, 91, 7)",color:"white", boxShadow: "2px 2px 2px 2px black" ,fontSize:"14px",fontWeight:"bold"}}> Add </button>

            <div style={{display:"flex",flexWrap:"wrap",marginTop:"20px"}}>
               <div style={{display:"flex",justifyContent:"start",alignItems:"start",marginRight:"3%"}}> 
                <img src="https://parspng.com/wp-content/uploads/2022/01/pngdiamond.parspng.com-7.png" alt="icon" style={{height:"20px",width:"22px",padding:"2px"}}/>
                <p style={{fontSize:"14px",fontWeight:"bold"}}>Primiun Quality</p>
                
                </div>
                <div style={{display:"flex",justifyContent:"start",alignItems:"start",marginRight:"3%"}}> 
                <img src="https://icon-library.com/images/risk-icon-png/risk-icon-png-2.jpg" alt="icon"  style={{height:"20px",width:"22px",padding:"2px"}}/>
                <p style={{fontSize:"14px",fontWeight:"bold"}}>Secure Checkout</p>
                </div>
                <div style={{display:"flex",justifyContent:"start",alignItems:"start",marginRight:"3%"}}> 
                <img src="https://icons.veryicon.com/png/o/miscellaneous/other/lock-167.png" alt="icon"  style={{height:"20px",width:"22px",padding:"2px"}}/>
                <p style={{fontSize:"14px",fontWeight:"bold"}}>Privacy Protected</p>
                </div>
        </div>
     </div>

    
    </div>
<RemainingProducts/>
    {/* <Whatsnew/> */}
    </div>
  );
};

export default EachProduct;
