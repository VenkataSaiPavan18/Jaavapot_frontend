

import React from "react";
import { useParams } from "react-router-dom";
import FoodData from "../../contants/data";

import { useNavigate } from "react-router-dom";
import "./offerings.css";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import OfferingsPage from "./OfferingsPage";

// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // const selectedItem = FoodData.find((item) => item.id === parseInt(id));

  // if (!selectedItem) {
  //   return <div>Item not found</div>;
  // }

  // const itemsToShow = [
  //   selectedItem,
  //   ...FoodData.filter((item) => item.id !== selectedItem.id),
  // ];

  const selectedId = id || '1';

 

  // Find the selected item based on the selectedId

  const selectedItem = FoodData.find((item) => item.id === parseInt(selectedId));

 

  // if (!selectedItem) {
  //   return <div>Item not found</div>;
  // }
  // Filter the items to show

  const itemsToShow = [selectedItem, ...FoodData.filter((item) => item.id !== selectedItem.id)];

  return (
    <div>
      <div className="container menu-bg mt-3 mb-3">
        {itemsToShow && itemsToShow.length > 0 && (
          <Swiper
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
              // You can access swiper instance here if needed
            }}
          >
            {itemsToShow.map((foodItem) => (
              <SwiperSlide key={foodItem.id}>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "auto",
                    width: "80vw",
                    position:"relative"
                  }}
                >
                  <div className="col-1 "></div>
                  <div className="col-12 col-lg-3 alignmentitem" style={{justifyContent:"",alignItems:"",display:"flex",flexDirection:"column"}}>
                    <div className="painted-heading-new"><h2 style={{position:"relative",color:"#FF7953",top:0}}>MILLET</h2></div>
                 
                    <h4>{foodItem.name}</h4>
                    <p>
                      Description of your dish goes here,
                      <br /> Some special ingredients
                    </p>
                    <ul>
                      <li>EXTRA SALMON</li>
                      <li>EXTRA RICE</li>
                      <li>SODA</li>
                    </ul>
                    <button style={{width:"45%"}}>Order Now</button>
                  </div>
                  <div className="col-12 col-lg-4 alignmentitem">
                    <img
                      src={foodItem.image}
                      alt={`Image ${foodItem.id}`}
                      style={{
                        height: "250px",
                        width: "250px",
                        borderRadius: "150px",
                        paddingLeft: "5%",
                        paddingRight: "5%",
                      }}
                    />
                  </div>
                  <div className="col-12 col-lg-3 alignmentitem" >
                    <>
                      <span
                        style={{
                          marginBottom: "5px",
                          // backgroundColor: "#e6cfc1",
                          color: "#FF7953",
                          fontWeight: "bold",
                        }}
                      >
                        NUTRITIONAL FACTS
                      </span>
                      <br />
                      <p style={{ marginBottom: "10px", fontWeight: "600" }}>
                        COUNTRY : THIS PLATE HAS
                      </p>
                      <div>
                        <button className="btn4">
                          FAT <br></br>
                          <span className="span1">{foodItem.fat}G</span>
                        </button>
                        <button className="btn4">
                          SODIUM <br></br>
                          <span className="span1">{foodItem.sodium}G</span>
                        </button>
                        <button className="btn4">
                          PROTEIN <br></br>
                          <span className="span1">{foodItem.proteins}G</span>
                        </button>
                        <button className="btn4">
                          CARBS <br></br>
                          <span className="span1">{foodItem.carbs}G</span>
                        </button>
                      </div>
                      <p style={{ marginBottom: "5px", marginTop: "10px",fontWeight: "600" }}>
                        DAILY NUTRIENTS
                      </p>
                      {/* <br /> */}

                      {/* <button
                        className="btn btn2"
                        style={{padding:"4px",fontSize:"12px",width:"30%"}}
                      >
                        MORE
                      </button> */}

                      <p className="destyle" style={{minHeight:"3rem",maxHeight:"5rem",padding:"3px",overflowY:"auto",}}>{foodItem.description}</p>
                    </>
                  </div>
                  <div className="col-1"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* <div>
        <OfferingsPage />
      </div> */}
    </div>
  );
};

export default Details;

