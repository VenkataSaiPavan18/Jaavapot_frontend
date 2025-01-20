

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Whatsnew.css";
import Card from './subdivisions/Card';
// import Card from './Card'; // Assuming the Card component is defined in Card.js

const Whatsnew = () => {
  const [foodData, setFoodData] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pagoanalytics.azurewebsites.net/jaavapotmenu/api/products');
        const data = await response.json();
        setFoodData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>What's New?</h1>
      <div style={{ display: 'flex', width: "", flexWrap: 'wrap', justifyContent: 'center' }}>
        {foodData.slice(0, 8).map((item) => (
          <div key={item._id} >
          {/* <div key={item._id} onClick={() => { nav(`/product/${item._id}`) }} style={{ boxShadow: "2px 2px 2px 2px black", borderRadius: "18px", margin: '30px', width: '220px', backgroundColor: "rgba(189, 152, 109,0.3)", padding: "10px" }}> */}
            <Card foodItem={item} />
          </div>
        ))}
      </div>
      <Link to="/OrderOnline"  onClick={() => window.scrollTo(0, 0)}><button className='btn' style={{ boxShadow: "2px 2px 2px 2px black" }}>View all Items</button></Link>
    </div>
  );
};

export default Whatsnew;
