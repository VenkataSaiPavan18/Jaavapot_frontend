import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@mdi/font/css/materialdesignicons.min.css';
import Carousel from './Carousel';
import AboutHeader from './AboutHeader';
import './about.css';
import { Link } from 'react-router-dom';
import img from '../../assets/img/about/spoons.png'

function AboutPage() {
  const containerStyle = {
   
    marginTop: '2rem',
    marginBottom: '5rem',
    backgroundColor:'rgba(189, 152, 109,0.5)',
    // backgroundColor:'#F8F8F8',
    padding:'2rem',
    borderRadius:"20px",
    boxShadow:"2px 2px 2px 2px black"
  };

  const buttonStyle = {
    backgroundColor: '#3498db',
    border: 'none',
    color: '#fff',
    backgroundColor:'#FF7953',
  };
  const imageStyle={
    // opacity:'0.8'
  }
  return (
    <div className='about' >
      {/* <AboutHeader/> */}
 <div className="container " style={containerStyle}>
        <div className="row rest-about">
        {/* <div className="col-md-12 rest-about"> */}
        <div className="col-md-6 rest-about">
          <h2 className="mb-4">Who We Are?</h2>
          <p>We Craft Millet Porridge and Nourished Soups for all the savvy eaters.</p>

          <h2 className="mt-5">Our Story</h2>
          <p>As children, we were raised by Grand Parents who surrounded us with healthy breath, healthy food, and healthy thoughts, but we suddenly knew these good things had crumbled. Once they had crumbled, they became history and never seems a reality again.</p>
          <p>Our undivided attention toward millet and millet-based foods has been on the rise with the blend of psychology and nutrition together. The urge of catering healthy food made us craft the JaavaPot to your table. Hence, we understood the steady need for ancient foods and were inspired by global cuisines like Asian congee, Mexican champurrado, and Indian Khichdi.</p>

          <h2 className="mt-5">Our Mission</h2>
          <p>Our Mission is to cater super food to all the communities and consumers and helps them in filling the Health Gaps, Time Gap, and Satiating food Gaps.</p>

          <h2 className="mt-5">Our Vision</h2>
          <p>Our Vision is to revolutionize people towards better health and seamlessly integrate it into everyday eating and create a healthy lifestyle.</p>
        </div>
        <div className="col-md-6 text-center">
         <img src={img} style={imageStyle} height='400px'width='400px' />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12 t rest-about">
          <h2>Our Promise</h2>
          <p>As part of your breakfast journey, the JaavaPot promises to keep your diet 100 percent nourished and tastier, so that we become a small part of achieving your health goals.</p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12  rest-about">
          <h2>Meet our Founders</h2>
          <p>Here is the story of Mr. & Mrs. Ramesh, who were dealing with their elderly ill parents who have digestive issues that come through side effects associated with the long-term medication that they were taking. In their search for a solution, they discovered ancient grains and foods as food that worked so magically on them leading to positive results within no time.</p>
          <p>With, a wealth of experience and a positive thought process they decided to cater the solution to the world and started the JaavaPot as a Cloud Kitchen model. Which went viral and became a very successful business within a span of 3 months.</p>
          {/* <Link to="/offerings-main" style={buttonStyle} className="btn btn-primary mt-4">Offerings</Link> */}
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <h2 className="mb-4">“Welcome to the world of Porridges and soups.”</h2>
          <Link to="/OrderOnline" style={buttonStyle} className="btn"  onClick={() => window.scrollTo(0, 0)}>Offerings</Link>

        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutPage
