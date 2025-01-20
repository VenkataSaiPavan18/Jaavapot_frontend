
import React, { useEffect, useState } from "react";
import Card from "./Card";

function OnlineOrderMenu() {
  const [foodCat, setFoodCat] = useState([
    {
      '_id':'01',
      'category':'Healthy Soups'
    },
    {
      '_id':'02',
      'category':'Healthy Porridges'
    },
    {
      '_id':'03',
      'category':'Immunity Boosters'
    },
    // {
    //   '_id':'04',
    //   'category':'Non Veg Soups'
    // }
  ]);
  const [foodItems, setFoodItems] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const[search,setSearch] = useState('')

  const loadData = async () => {
    let response = await fetch("https://pagoanalytics.azurewebsites.net/jaavapotmenu/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setFoodData(response);
    // console.log('foodData',foodData);

  // setFoodItems(response[0]);
    // setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <h2 style={{textAlign:"center",margin:"10px"}}> Look Into Our Healthy and Tasty Menu</h2>
       <div>
     
      
<div className=" d-flex justify-content-center m-3">  {/* justify-content-center, copy this <form> from navbar for search box */}
            <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Type your favorite Superfood.. " aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
            {/* <button className="btn text-white bg-success" type="submit">Search</button> */}
        </div>
      </div>
      <div className="container">
        {foodCat.length > 0 ? 
        // {foodData !== [] ? 
          foodCat.map((data) => {
            // console.log('data',data)
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.category}
                  {console.log('data',data._id)}
                </div>
                <hr/>
                {foodData !==[]
                ?
                foodData.filter((item)=>(item.category === data.category) && (item.itemname.toLowerCase().includes(search.toLowerCase())))
                .map(filterItems=>{
                  return(
                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                      <Card foodItem={filterItems}
                      options={filterItems.details[0]}
                      
                      ></Card>
                    </div>
                  )
                })
                
                :<div>There is no Such Data</div>}
              </div>
            )
          })
         : 
         <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>
  <span style={{ color: '#007bff' }}>Please wait</span> menu items are loading...<span style={{ color: '#007bff' }}>!!!</span>
</div>
        //  <div >Please wait menu items are loading.....!!!</div>
         }
      </div>
    </div>

  )
}

export default OnlineOrderMenu

