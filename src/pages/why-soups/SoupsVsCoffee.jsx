import React from 'react';
import './soupCoffee.css'; // Import your CSS file

function SoupsVsCoffee() {
  return (
    <div className='container' style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor:'rgba(189, 152, 109,0.5)',
      padding:'2rem',
      borderRadius:"20px",
      boxShadow:"0px 4px 6px 2px black",
      textAlign:"center",
      fontWeight:"bold"
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '10px',
        fontWeight: 'bold'
      }}>
        <p style={{ fontWeight: 'bolder' , color:"rgba(247, 91, 7)"}}>A CUP OF SOUP Vs A CUP OF COFFEE</p>
      </div>
      <div className='boxStyle' style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '10px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          backgroundColor: 'transparent'
        }}>
          <p style={{ fontWeight: 'bold', }}>Component</p>
          <p>Soups (per 100g)</p>
          <p>Coffee (per 100ml)</p>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          backgroundColor: 'transparent'
        }}>
          <p>Energy (kcal)</p>
          <p>~40-80 kcal</p>
          <p>~2 kcal</p>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          backgroundColor: 'transparent'
        }}>
          <p>Fats (g)</p>
          <p>~1-5 g</p>
          <p>~0.2 g</p>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          backgroundColor: 'transparent'
        }}>
          <p>Sugars (g)</p>
          <p>~1-5 g</p>
          <p>~0 g</p>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          backgroundColor: 'transparent'
        }}>
          <p>Saturates (g)</p>
          <p>~0.1-2 g</p>
          <p>~0.1 g</p>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          backgroundColor: 'transparent'
        }}>
          <p>Salt (g)</p>
          <p>~0.5-1.5 g</p>
          <p>~0.01-0.03 g</p>
        </div>
      </div>
    </div>
  )
}

export default SoupsVsCoffee;


// import React from 'react';
// import './soupCoffee.css'; // Import your CSS file

// function SoupsVsCoffee() {
//   return (
//     <div className='container'>
//       <div className='card'>
//         <h5 className='text-center card-title font-weight-bold p-3'>A CUP OF SOUP Vs A CUP OF COFFEE</h5>
//       </div>

//       <div className='card'>
//         <div className='card-body'>
//           <h6 className='font-weight-bold mb-3'>Nutritional Component</h6>
//           <p>Soups (per 100g)</p>
//           <p>Coffee (per 100ml)</p>
//         </div>
//       </div>

//       <div className='card'>
//         <div className='card-body'>
//           <p>Energy (kcal)</p>
//           <p>~40-80 kcal</p>
//           <p>~2 kcal</p>
//         </div>
//       </div>

//       <div className='card'>
//         <div className='card-body'>
//           <p>Fats (g)</p>
//           <p>~1-5 g</p>
//           <p>~0.2 g</p>
//         </div>
//       </div>

//       <div className='card'>
//         <div className='card-body'>
//           <p>Sugars (g)</p>
//           <p>~1-5 g</p>
//           <p>~0 g</p>
//         </div>
//       </div>

//       <div className='card'>
//         <div className='card-body'>
//           <p>Saturates (g)</p>
//           <p>~0.1-2 g</p>
//           <p>~0.1 g</p>
//         </div>
//       </div>

//       <div className='card'>
//         <div className='card-body'>
//           <p>Salt (g)</p>
//           <p>~0.5-1.5 g</p>
//           <p>~0.01-0.03 g</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SoupsVsCoffee;