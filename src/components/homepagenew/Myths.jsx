import React from 'react';
import cook from "../../assets/babyfood/cook.png";
import fib from "../../assets/babyfood/fib.png";
import stomach from "../../assets/babyfood/stomach.png";
import money from "../../assets/babyfood/money.png";

const Myths = () => {


  const divStyle = {
    backgroundColor: "rgba(245, 107, 15, 0.8)",
    borderRadius:"20px",
    cursor:"pointer",
    padding: "10px",
    margin: "10px",
    position: "relative", // Add position relative for proper positioning of the content
  };

  const pStyle = {
    fontSize: "12px",
    display: "none", // Initial state is hidden
    position: "absolute", // Position the content absolutely within the parent div
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(189, 152, 109,1)",
    padding: "10px",
    color:"white",
    margin: 0,
  };




  const divStyle2 = {
    backgroundColor: "rgba(189, 152, 109,0.3)",
    cursor:"pointer",
    borderRadius:"20px",
    padding: "10px",
    margin: "10px",
    position: "relative",
    letterSpacing:"0.5px", // Add position relative for proper positioning of the content
  };

  const pStyle2 = {
    fontSize: "12px",
    display: "none", // Initial state is hidden
    position: "absolute", // Position the content absolutely within the parent div
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(245, 107, 15, 0.8)",
    padding: "10px",
    color:"white",
    letterSpacing:"0.5px",
    margin: 0,
  };

  return (
    <div style={{padding:"10px",marginTop:"60px"}}>
    <div className='container' style={{backgroundColor:"rgba(189, 152, 109,0.5)",borderRadius:"20px",padding:"20px"}} >
         <div className='row' style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
         <div className='col-12 col-md-4' style={{padding:"20px",borderRadius:"20px"}}>

<h2 style={{fontWeight:"bold",textAlign:"center"}}>Myths About Millet You Should Not Believe </h2>
<p style={{textAlign:"center"}}>Millets are very healthy, but they have been beset with some myths and misconceptions that prevent more people from benefiting from their goodness.</p>
{/* <p>In this age of trends, millet is popping up on all sorts of blogs and lists, but it’s certainly not new when it comes to nutrition. One of the oldest edible grains known to man, millet has been around since prehistoric times and even found a  mention in ancient Yajurvedic texts.</p>
<p>Today we will look at the 4 most common myths and bust them.</p> */}

</div>

<div className='col-12 col-md-8' style={{display:"flex",justifyContent:"center"}}>
    <div className="col-6 col-md-5" style={{display:"flex",flexDirection:"column"}}>
    <div
      style={divStyle}
      onMouseEnter={() => document.getElementById('content').style.display = 'block'}
      onMouseLeave={() => document.getElementById('content').style.display = 'none'}
    >
      <img src={cook} alt="image" style={{ borderRadius: "100px", height: "150px", width: "150px" }} />
      <h6 style={{ fontWeight: "bold" }}>Myth: Cooking with millet is difficult.</h6>
      <p id="content" style={pStyle}>
        The right way to cook millets is simple. Make sure you wash millets thoroughly with water,
        and soak it for 5-12 hours or overnight. Different millets have different soaking times, a minimum of 5-6 hours is needed.
      </p>
    </div>
             <div 
             style={divStyle2}
             onMouseEnter={() => document.getElementById('content2').style.display = 'block'}
             onMouseLeave={() => document.getElementById('content2').style.display = 'none'}
             >
            <img src="https://cdn-icons-png.flaticon.com/512/146/146289.png" alt="image" style={{borderRadius:"100px",height:"150px",width:"150px",objectFit:""}}/>
          
            <h6 style={{fontWeight:"bold"}}>Myth: Millets are high in calories</h6>
            <p id="content2" style={pStyle2}> Millets are full of soluble fiber, which trap fat in your gut and can lower the cholesterol level in your blood. 
            The anti-cancer and anti-ageing benefits of antioxidants in millet far outweigh the very low risk of hypothyroidism.
            </p>
             </div>

    </div>

    <div className="col-6 col-md-5" style={{display:"flex",flexDirection:"column", marginTop:"100px"}}>
        <div 
        style={divStyle2}
        onMouseEnter={() => document.getElementById('content3').style.display = 'block'}
        onMouseLeave={() => document.getElementById('content3').style.display = 'none'}
       
        >
            <img src={stomach} alt="image" style={{borderRadius:"100px",height:"150px",width:"200px"}}/>
          
            <h6 style={{fontWeight:"bold"}}>Myth: They are hard to digest.</h6>
            <p id="content3" style={pStyle2}> Millets are rich in fiber and cooking it with the right food combination and cooking it properly is important. Your gut flora contributes to digesting millet when cooked the right way.</p>
             </div>

             <div    style={divStyle} onMouseEnter={() => document.getElementById('content1').style.display = 'block'}
      onMouseLeave={() => document.getElementById('content1').style.display = 'none'}>
            <img src={money} alt="image" style={{borderRadius:"100px",height:"150px",width:"150px",objectFit:""}}/>
          
            <h6 style={{fontWeight:"bold"}}>Myth:  Millets are expensive.</h6>
            <p  id="content1" style={pStyle}> Millets have been used for over 1000+ years and are popular with many people in India. One of the reasons for it being called a poor man’s food was its price point and easy accessibility. It is regional, local, and easily available at any grocery store. </p>
             </div>

    </div>
    
     </div>

</div>
    </div>
    </div>
  )
}

export default Myths