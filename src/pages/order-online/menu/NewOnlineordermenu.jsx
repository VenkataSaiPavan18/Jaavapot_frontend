import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../../components/homepagenew/Whatsnew.css";
import Card from '../../../components/homepagenew/subdivisions/Card.jsx';
 
const NewOnlineordermenu = () => {
  const [foodData, setFoodData] = useState([]);
  const [filteredFoodData, setFilteredFoodData] = useState([]);
  const nav = useNavigate();
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pagoanalytics.azurewebsites.net/jaavapotmenu/api/products');
        const data = await response.json();
        setFoodData(data);
 
        // Extract unique categories from foodData
        const uniqueCategories = [...new Set(data.map(item => item.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 
    fetchData();
  }, []);
 
  // Set initial filtered data on component mount
  useEffect(() => {
    setFilteredFoodData(foodData);
  }, [foodData]);
 
  // Function to filter foodData based on category
  const filterByCategory = (category) => {
    if (category === "All") {
      setFilteredFoodData(foodData);
    } else {
      setFilteredFoodData(foodData.filter(item => item.category === category));
    }
  };
 
  // Filter foodData based on the search input
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilteredFoodData(foodData.filter((item) =>
      item.itemname.toLowerCase().includes(e.target.value.toLowerCase())
    ));
  };
 
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Look Into Our Healthy and Tasty Menu</h1>
 
      <div className="d-flex justify-content-center m-3">
        <input
          className="form-control me-2 w-75 bg-white text-dark"
          type="search"
          placeholder="Type your favorite Superfood.. "
          aria-label="Search"
          value={search}
          onChange={handleSearch}
        />
      </div>
 
      {/* Display categories below the search input */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', flexWrap: "wrap" }}>
        <p style={{ fontWeight: "bold", paddingTop: "10px" }}> Select Category: </p>
        {categories.map((category) => (
          <div key={category} style={{ margin: '0 10px 10px 10px', boxShadow: "2px 2px 2px 2px black", borderRadius: "20px", padding: "10px", backgroundColor: "rgba(247, 91, 7)", fontSize: "14px", color: "white", letterSpacing: "0.2px", width: "150px" ,cursor:"pointer"}} onClick={() => filterByCategory(category)}>
            {category}
          </div>
        ))}
        <div style={{ margin: '0 10px 10px 10px', boxShadow: "2px 2px 2px 2px black", borderRadius: "20px", padding: "10px", backgroundColor: "green", fontSize: "14px", color: "white", letterSpacing: "0.2px",cursor:"pointer" }} onClick={() => filterByCategory("All")}>All</div>
      </div>
 
      <div style={{ display: 'flex', width: "", flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredFoodData.map((item) => (
          <div key={item._id} >
            <Card foodItem={item} />
          </div>
        ))}
      </div>
      </div>
  );
};
 
export default NewOnlineordermenu;