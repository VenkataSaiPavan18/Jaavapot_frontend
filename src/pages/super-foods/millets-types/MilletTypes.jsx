import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./MilletTypes.css"; // Create a CSS file for custom styles
import image1 from "../../../assets/img/milltes/kodo.jpeg";
import image2 from "../../../assets/img/milltes/foxTail.jpeg";
import image3 from "../../../assets/img/milltes/proso.jpeg";

const MilletTypes = () => {

  const containerStyle = {
    marginTop: '5rem',
    marginBottom: '5rem',
    backgroundColor:'rgba(189, 152, 109,0.5)',
    padding:'2rem',
    borderRadius:"20px",
    boxShadow:"2px 2px 2px 2px black",
   
  };

  return (
    <div>
      <div className="container mt-3 mb-3" style={containerStyle}>
        <h2 className="p-3 text-center m" style={{color:"rgba(247, 91, 7)",fontWeight:"bolder"}}>Meet the Millet Family</h2>

        {/* Finger Millet (Ragi) */}
        <div className="card mb-4" style={{backgroundColor:"transparent",border:"0px",color:"black"}}>
          <div className="card-body">
            <div className="row">
              {/* Left side content */}
              <div className="col-md-8">
                <h5  style={{color:"rgba(247, 91, 7)",fontWeight:"bolder"}} >Finger Millet (Ragi)</h5>
                <p className="card-text">
                  Also known as Ragi, the King of Millets, is a nutritious cereal that offers several health benefits. It is the most consumed millet across India. Ragi keeps your body cool even during scorching summer days, works as a natural weight loss agent, and prevents skin aging.
                </p>
                <h5 className="">Nutritive Stats for 100g of Finger Millet:</h5>
                <ul>
                  <li>Protein: 5-8%</li>
                  <li>Carbohydrates: 65-75%</li>
                  <li>Dietary Fiber: 15-20%</li>
                  <li>Minerals: 2.5-3.5%</li>
                  <li>Calcium: 344mg%</li>
                  <li>Potassium: 408mg%</li>
                  <li>Unsaturated Fats: 1.3%</li>
                </ul>
                <h5 >Benefits of Ragi:</h5>
                <ul>
                  <li>Source of Protein</li>
                  <li>Rich in Dietary Fiber</li>
                  <li>Naturally Gluten-Free</li>
                  <li>Source of Calcium for bone health</li>
                  <li>Rich in Iron to increase hemoglobin</li>
                </ul>
              </div>

              {/* Right side image */}
              <div className="col-md-4 text-center">
                <img src={image1} alt="Finger Millet" className="img-fluid"  style={{borderRadius:"20px"}}/>
              </div>
            </div>
          </div>
        </div>

        {/* Foxtail Millet */}
        <div className="card mb-4" style={{backgroundColor:"transparent",border:"0px",color:"black"}}>
          <div className="card-body">
            <div className="row">
              {/* Left side content */}
              <div className="col-md-8">
                <h5  style={{color:"rgba(247, 91, 7)",fontWeight:"bolder"}}>Foxtail Millet</h5>
                <p className="card-text">
                  There are over 200 species of millet, but foxtail millet is the second-most widely planted. There is a broad cultivation of this plant in India, Africa, and China. Navane, Kakum, Korralu, and Tenai are some names given to foxtail millet.
                </p>
                <h5 className="">Nutritive Stats for 100g of Foxtail Millet:</h5>
                <ul>
                  <li>Protein: 11.3g</li>
                  <li>Carbohydrates: 4.3g of fat, 60.2g of</li>
                  <li>Energy: 351Kcal</li>
                  <li>Minerals: 4g</li>
                  <li>Fiber: 6.7g</li>
                  <li>Iron: 2.8 mg</li>
                  <li>Niacin: 32 mg</li>
                  <li>Phosphorous: 290mg</li>
                  <li>Calcium: 31mg of</li>
                </ul>
              </div>

              {/* Right side image */}
              <div className="col-md-4 text-center">
                <img src={image2} alt="Foxtail Millet" className="img-fluid" style={{borderRadius:"20px"}} />
              </div>
            </div>
          </div>
        </div>

        {/* Proso Millet */}
        <div className="card mb-5" style={{backgroundColor:"transparent",border:"0px",color:"black"}}>
          <div className="card-body">
            <div className="row">
              {/* Left side content */}
              <div className="col-md-8">
                <h5  style={{color:"rgba(247, 91, 7)",fontWeight:"bolder"}}>Proso Millet</h5>
                <p className="card-text">
                  In terms of water requirements, proso millet is the simplest crop to cultivate. There is a substantial amount of carbohydrates and a significant amount of fat in this product. Additionally, this food contains phosphorus, manganese, iron, and potassium, as well as riboflavin, niacin, pyridoxine, and Vitamin E.
                </p>
                <h5>Nutritive Stats for 100g of Proso Millet:</h5>
                <ul>
                  <li>Protein: 12.5%</li>
                  <li>Dietary Fiber: 2.2g</li>
                  <li>Iron: 5.9 mg</li>
                  <li>Calcium: 0.01mg%</li>
                  <li>Niacin B3 Mg: 2.3mg</li>
                </ul>
              </div>

              {/* Right side image */}
              <div className="col-md-4 text-center">
                <img src={image3} alt="Proso Millet" className="img-fluid"  style={{borderRadius:"10px"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilletTypes;
