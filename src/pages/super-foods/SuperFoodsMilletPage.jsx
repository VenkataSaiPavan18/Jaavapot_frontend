// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@mdi/font/css/materialdesignicons.min.css';

// import './super.css'

// function SuperFoodsMilletPage() {
//   const containerStyle = {
//     marginTop: '5rem',
//     marginBottom: '5rem',
//     backgroundColor:'#F8F8F8',
//         padding:'2rem',
//   };

//   const sectionStyle = {
//     marginBottom: '3rem',
//   };

//   const titleStyle = {
//     fontSize: '28px',
//     marginBottom: '1.5rem',
    
//   };

//   const callToActionStyle = {
//     backgroundColor: '#FF7953',
//     color: '#fff',
//     padding: '5px',
//     textAlign: 'center',
//   };

//   const superfoodStyle = {
//     fontSize: '24px',
//     marginBottom: '1rem',
//   };

//   const descriptionStyle = {
//     fontSize: '18px',
//     marginBottom: '1rem',
//   };
//   return (
//     <div className="container" style={containerStyle}>
//       {/* <SideBarContent/> */}
//     <div className="row">
//       <div className="col-md-12">
//         <h1 className="mb-4">Wholegrain Nourishment!</h1>
//         <p>An excellent day begins with a tummy full of nutrients and taste. The whole grain of Millet. Remarkably, how much sustainable nutrition and health benefits of wholesome breakfast options can be obtained from such a simple grain? With good reason, it has been referred to as a 'Super Food' throughout its long history. The slow release of energy makes them different from other foods and an excellent source of a balanced diet. The family-friendly meals are designed with natural ingredients and contain no gluten.</p>

//         <div style={sectionStyle}>
//           <button className="btn" style={callToActionStyle}>
//             <h2>Your Health Guide</h2>
           
//           </button>
//         </div>

//         <div style={sectionStyle}>
//           <h2 style={superfoodStyle}>A Superfood that’s Super-Tasty!</h2>
//           <p style={descriptionStyle}>A humbly grown grain that became super food and super delicious is sensational. Millets are cooked both in savory and sweet. Its versatile nature has got the attention of super moms and super chefs by creating and inventing new state-of-art recipes. A perfect treat for your Tongue, Eyes, and Nose!</p>
//         </div>

//         <div style={sectionStyle}>
//         <h2 style={superfoodStyle}>Tastes Delicious, Smells Good, and Looks Amazing!</h2>
//           {/* <p>Tastes Delicious, Smells Good, and Looks Amazing!</p> */}
//         </div>

//         <div style={sectionStyle} className='ml=5'>
//           <p>Stay in the loop!</p>
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// }

// export default SuperFoodsMilletPage

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowRight } from 'react-icons/bs'; // Import the Bootstrap icon you need

import './super.css';

function SuperFoodsMilletPage() {
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
    fontSize: '28px',
    marginBottom: '1.5rem',
  };

  const callToActionStyle = {
    backgroundColor: '#FF7953',
    color: '#fff',
    padding: '5px',
    textAlign: 'center',
  };

  const superfoodStyle = {
    fontSize: '24px',
    marginBottom: '1rem',
  };

  const descriptionStyle = {
    fontSize: '18px',
    marginBottom: '1rem',
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="row">
        <div className="col-md-12">
          <h1 className="mb-4">Wholegrain Nourishment!</h1>
          <p>An excellent day begins with a tummy full of nutrients and taste. The whole grain of Millet. Remarkably, how much sustainable nutrition and health benefits of wholesome breakfast options can be obtained from such a simple grain? With good reason, it has been referred to as a 'Super Food' throughout its long history. The slow release of energy makes them different from other foods and an excellent source of a balanced diet. The family-friendly meals are designed with natural ingredients and contain no gluten.</p>

          <div style={sectionStyle}>
            <button className="btn" style={{backgroundColor:"rgba(247, 91, 7)",color:"white"}}>
             Your Health Guide
              <BsArrowRight style={{ marginLeft: '5px' }} /> {/* Use the Bootstrap icon here */}
            </button>
          </div>

          <div style={sectionStyle}>
            <h2 style={superfoodStyle}>A Superfood that’s Super-Tasty!</h2>
            <p style={descriptionStyle}>A humbly grown grain that became super food and super delicious is sensational. Millets are cooked both in savory and sweet. Its versatile nature has got the attention of super moms and super chefs by creating and inventing new state-of-art recipes. A perfect treat for your Tongue, Eyes, and Nose!</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={{color:"rgba(247, 91, 7)",fontWeight:"bold"}}>Tastes Delicious, Smells Good, and Looks Amazing!</h2>
            <p>Stay in the loop!</p>
          </div>

         
           
         
        </div>
      </div>
    </div>
  );
}

export default SuperFoodsMilletPage;
