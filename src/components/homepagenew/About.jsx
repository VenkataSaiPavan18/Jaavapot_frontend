import React ,{useEffect, useState}from 'react'
import "./about.css";

const About = () => {

  const [backgroundColor, setBackgroundColor] = useState('rgba(189, 152, 109, 0.5)');
  const [backgroundColor2, setBackgroundColor2] = useState('rgba(255, 94, 13, 0.8)');  

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Toggle between the two colors
      setBackgroundColor(prevColor =>
        prevColor === 'rgba(189, 152, 109, 0.5)' ? 'rgba(255, 94, 13, 0.8)' : 'rgba(189, 152, 109, 0.5)'
      );

    
     
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);


  useEffect(() => {
    const intervalId = setInterval(() => {
      // Toggle between the two colors
     
      setBackgroundColor2(prevColor =>
        prevColor === 'rgba(255, 94, 13, 0.8)' ? 'rgba(189, 152, 109, 0.5)' : 'rgba(255, 94, 13, 0.8)'
      );

     
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className='mt-5' style={{textAlign:"center"}}>
    <h1>About Us</h1>
   
    <div className='container' style={{ borderRadius:"10px",paddingTop:"20px",textAlign:"center",}}>

<div style={{margin:"0",padding:"15px",width:"100%",fontWeight:"bold",}}>
<p >
          I am Jaava Pot - I am here to nourish your breakfast & snacks with
          porridges and soups made of Millet.
        </p>
            <p>How do you know?</p>
            <p>
              Exactly like you thought, with our favorite grandma's grains and
              recipes.
            </p>
            <p>
              My philosophy about food is super simple - and it has two facets!
              Plants are the focus and everything should be consumed in
              moderation.
            </p>
            <p>
              It is possible to incorporate all foods into your diet if you
              approach food in a peaceful and non-judgmental manner. I promise
              there's a place for your candy bars and chips!
            </p>
           
            </div>
<div className='row' >
    <div className='col-12 col-md-6' style={{ padding:"30px",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center"}}>
     <h3> How Millets can help?</h3>
<div  className="howtop" style={{display:"flex",justifyContent:"flex-end",alignItems:"end"}}>
<div style={{width:"150px",height:"150px",backgroundColor,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    <img src="https://icons.veryicon.com/png/o/food--drinks/crops-1/crop-millet-1.png" style={{height:"50px",width:"50px",marginBottom:"0"}}/>
     <p style={{fontSize:"13px",fontWeight:"bold"}}>Millets - powerhouse of vitamins and minerals</p>
     </div>
<div style={{width:"150px",height:"150px",backgroundColor: backgroundColor2,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    <img src="https://cdn-icons-png.flaticon.com/512/3736/3736143.png" style={{objectFit:"cover",height:"50px",width:"50px",marginBottom:"0"}}/>
     <p style={{fontSize:"13px",fontWeight:"bold"}}>Low glycemic - excellent for diabetics</p>
     </div>
</div>

<div className="howbtm" style={{display:"flex",justifyContent:"flex-start",alignItems:"start"}}>
<div style={{width:"150px",height:"150px",backgroundColor,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    <img src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1701161490/fiber_kc3kw1.png" style={{objectFit:"cover",height:"50px",width:"50px",marginBottom:"0"}}/>
     <p style={{fontSize:"13px",fontWeight:"bold"}}>High fibers- aids in weight management.</p>
     </div>
<div style={{width:"150px",height:"150px",backgroundColor: backgroundColor2,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    <img src="https://cdn3.iconfinder.com/data/icons/psychology-and-mental-health-5/64/Psychology_icon_set_line_-_EXPAND-_64_px_Give_love_give_help-512.png" style={{height:"50px",width:"50px",marginBottom:"0",objectFit:"cover"}}/>
     <p style={{fontSize:"13px",fontWeight:"bold"}}>Healthy heart- lowers cholesterol levels </p>
     </div>
</div>
    </div>
    <div className='col-12 col-md-6' style={{padding:"30px",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center"}}>
     <h3>Our Vision</h3>
     <div  className="visintop" style={{display:"flex",justifyContent:"flex-start",alignItems:"start"}}>
<div style={{width:"150px",height:"150px",backgroundColor,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 
<img src="https://cdn.icon-icons.com/icons2/3033/PNG/512/food_sustainability_organic_vegetarian_hehy_icon_189077.png" style={{height:"50px",width:"50px",marginBottom:"0",objectFit:"cover"}}/>
     <p style={{fontSize:"13px",fontWeight:"bold"}}>Sustainable Nutrition for All </p>
     
</div>
<div style={{width:"150px",height:"150px",backgroundColor: backgroundColor2,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 
<img src="https://cdn-icons-png.flaticon.com/512/91/91353.png" style={{height:"50px",width:"50px",marginBottom:"0",objectFit:"cover"}}/>
     <p style={{fontSize:"13px",fontWeight:"bold"}}>Outreach Eco-Friendly Emporium </p>
     </div>
</div>
<div  className="visinbtm" style={{display:"flex",justifyContent:"flex-end",alignItems:"end"}}>
<div style={{width:"150px",height:"150px",backgroundColor,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 
<img src="https://static.thenounproject.com/png/3306314-200.png" style={{height:"50px",width:"50px",marginBottom:"0",objectFit:"cover"}}/>
     <p style={{fontSize:"13px",fontWeight:"bold"}}> Embed Nutritional Properties in Food</p>
     </div>
<div style={{width:"150px",height:"150px",backgroundColor: backgroundColor2,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 
<img src="https://cdn-icons-png.flaticon.com/512/3023/3023682.png" style={{height:"50px",width:"50px",marginBottom:"0",objectFit:"cover"}}/>
     <p style={{fontSize:"13px",fontWeight:"bold"}}>Renovate Diets with Nutrient-Rich Foods </p>
     </div>
</div>


    </div>
</div>

    </div>
    </div>
  )
}

export default About