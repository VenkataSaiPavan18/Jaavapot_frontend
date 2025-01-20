import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCheck } from 'react-icons/bs'; // Import the Bootstrap icon you need
import img from '../../assets/img/about/cups.png';

function FoodForEveryone() {
  const containerStyle = {
    marginTop: '5rem',
    marginBottom: '5rem',
    backgroundColor:'rgba(189, 152, 109,0.5)',
    padding:'2rem',
    borderRadius:"20px",
    boxShadow:"2px 2px 2px 2px black",
    textAlign:"center"
  };

  const sectionStyle = {
    marginBottom: '3rem',
  };

  const titleStyle = {
    fontSize: '24px',
    marginBottom: '1rem',
  };

  const listItemStyle = {
    fontSize: '18px',
    marginBottom: '0.5rem',
    paddingLeft: '1rem',
    position: 'relative',
  };

  const bulletIconStyle = {
    fontSize: '24px', // Increase the icon size
    position: 'absolute',
    left: '-1.5rem',
    top: '0.2rem',
    color: '#3498db',
  };

  const imageStyle = {
    objectFit:"contain",
    height: '800px',
    width: '100%',
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="row">
        <div className="col-md-6">
          <h1 className="mb-4" style={{color:"rgba(247, 91, 7)",fontWeight:"bolder"}}>Food For Everyone</h1>
          <p>We are passionate about creating delicious gluten-free and celiac-friendly breakfast and snack foods. We have crafted and created innovative recipes that fit everyone's needs. We realize that people around the country crave nutritious, versatile, easy-to-eat, and digestible foods.</p>

          <div style={sectionStyle}>
            <h2 style={titleStyle}>Nutrient-Rich</h2>
            <p style={listItemStyle}>
              <BsCheck style={bulletIconStyle} /> Millet is rich in essential nutrients like magnesium, phosphorus, and B vitamins. These nutrients are important for bone health, energy production, and overall well-being.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={titleStyle}>Variety</h2>
            <p style={listItemStyle}>
              <BsCheck style={bulletIconStyle} /> We offer different toppings and flavorings to cater to various preferences, such as fresh veggies, nuts, sprouts, and seeds.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={titleStyle}>Texture</h2>
            <p style={listItemStyle}>
              <BsCheck style={bulletIconStyle} /> We customize the desired texture, like thicker and thinner options.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={titleStyle}>Dietary Restrictions</h2>
            <p style={listItemStyle}>
              <BsCheck style={bulletIconStyle} /> Our Millet Porridges are suitable for various dietary needs, including gluten-free, vegetarian, and vegan diets.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={titleStyle}>Infants</h2>
            <p style={listItemStyle}>
              <BsCheck style={bulletIconStyle} /> Porridges play a vital role in the daily nourishment of infants.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={titleStyle}>Elderly</h2>
            <p style={listItemStyle}>
              <BsCheck style={bulletIconStyle} /> Choosing whole-grain options by adding nuts and sprouts can be comforting for the elderly.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={titleStyle}>Adaptability</h2>
            <p style={listItemStyle}>
              <BsCheck style={bulletIconStyle} /> Our Porridges can be served hot and cold, and they are available in both savory and sweet flavors. They can adapt to different tastes.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <img src={img} alt="Cups" style={imageStyle} />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <h2 className="mb-4" style={{color:"rgba(247, 91, 7)",fontWeight:"bolder"}}>Eating the right food helps us heal and makes us better!</h2>
        </div>
      </div>
    </div>
  );
}

export default FoodForEveryone;