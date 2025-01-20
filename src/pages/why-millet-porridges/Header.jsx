import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

function Header() {
    const containerStyle = {
        marginTop: '2rem',
        marginBottom: '5rem',
        backgroundColor:'rgba(189, 152, 109,0.5)',
        padding:'2rem',
        borderRadius:"20px",
        boxShadow:"2px 2px 2px 2px black",
        textAlign:"center"
      };
    
      const descriptionStyle = {
        fontSize: '18px',
        marginBottom: '2rem',
      };
  return (
    <div className="container" style={containerStyle}>
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4" style={{color:"rgba(247, 91, 7)",fontWeight:"bolder"}}>Why Our Millet-Porridges? </h2>
          <p style={descriptionStyle}>We Keep your gut healthy is easy with our Millet-Porridge, packed with diverse plant goodness. You'll love their happy taste buds and healthy gut because they are enriched with fibers to boost your mighty microbes.</p>
        </div>
        
      </div>
    </div>
  )
}

export default Header
