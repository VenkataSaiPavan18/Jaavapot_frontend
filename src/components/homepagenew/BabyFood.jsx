import React from 'react'
import foxtail from "../../assets/babyfood/foxtail.png";
import ragi from "../../assets/babyfood/ragi.png";
import bajra from "../../assets/babyfood/bajra.png";
import kodo from "../../assets/babyfood/kodo.png";
import proso from "../../assets/babyfood/proso.png";
import barnyard from "../../assets/babyfood/barnyard.png";
import sama from "../../assets/babyfood/saama.png";
import jowar from "../../assets/babyfood/jowar.png";
import "./babyfood.css";

const BabyFood = () => {
  return (
    <div className='m-2 mt-5' style={{textAlign:"center"}}>
  <h1>Why Millets are Super Baby Foods?</h1>
  <div className='container containernew' style={{ display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"10px",paddingTop:"20px",textAlign:"center",backgroundColor:"rgba(189, 152, 109,0.5)",}}>
<div style={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",margin:"10px"}}>
    <img src={foxtail} alt="babyfood" style={{height:"150px",width:"140px"}}/>
    <p style={{width:"200px"}}><span style={{color:"#e34709",fontWeight:"bold"}}>Foxtail millet</span> contains a high amount of lecithin and is excellent for strengthening the nervous system.</p>
</div>

<div style={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",margin:"10px"}}>
    <img src={ragi} alt="babyfood" style={{height:"150px",width:"140px"}}/>
    <p style={{width:"200px"}}> Calcium present in <span style={{color:"#e34709",fontWeight:"bold"}}> Ragi or Naachni</span> is 10 times higher than wheat or rice, making it the perfect food for  babies.</p>
</div>

<div style={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",margin:"10px"}}>
    <img src={bajra} alt="babyfood" style={{height:"150px",width:"140px"}}/>
    <p style={{width:"200px"}}>  <span style={{color:"#e34709",fontWeight:"bold"}}>Bajra </span>is 19 times richer in iron and fat , While phosphorous and calcium are about 2.5-3 times higher than rice. </p>
</div>
<div style={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",margin:"10px"}}>
    <img src={proso} alt="babyfood" style={{height:"150px",width:"140px"}}/>
    <p style={{width:"200px"}}>  <span style={{color:"#e34709",fontWeight:"bold"}}> Proso millet </span> is known to strengthen nervous system of growing babies due to the rich presence of Vit B6 in it. </p>
</div>
<div style={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",margin:"10px"}}>
    <img src={barnyard} alt="babyfood" style={{height:"150px",width:"140px"}}/>
    <p style={{width:"200px"}}>  <span style={{color:"#e34709",fontWeight:"bold"}}> Barnyard millets </span>  are seen to have over 18mg of iron/100g, treats all anemia issues in pregnant women and growing babies.</p>
</div>

<div style={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",margin:"10px"}}>
    <img src={kodo} alt="babyfood" style={{height:"150px",width:"140px"}}/>
    <p style={{width:"200px"}}>  <span style={{color:"#e34709",fontWeight:"bold"}}>Kodo millet  </span>is rich in protein, fiber and minerals and vitamins. The fiber content of the whole grain is very high. </p>
</div>
<div style={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",margin:"10px"}}>
    <img src={sama} alt="babyfood" style={{height:"150px",width:"140px"}}/>
    <p style={{width:"200px"}}>  <span style={{color:"#e34709",fontWeight:"bold"}}>Little millet   </span>is rich in cholesterol, when consumed increases good cholesterol, suitable for weight gain in kids.  </p>
</div>

<div style={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",margin:"10px"}}>
    <img src={jowar} alt="babyfood" style={{height:"150px",width:"140px"}}/>
    <p style={{width:"200px"}}>  <span style={{color:"#e34709",fontWeight:"bold"}}> Jowar  </span>contains 8.45 milligrams of iron in every cup, Riboflavin and Niacin are almost 20-99 times higher in it than in rice</p>
</div>



<div style={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",margin:"10px"}}>
    <img src={foxtail} alt="babyfood" style={{height:"150px",width:"140px"}}/>
    <p style={{width:"200px"}}><span style={{color:"#e34709",fontWeight:"bold"}}>Foxtail millet</span> contains a high amount of lecithin and is excellent for strengthening the nervous system.</p>
</div>

<div style={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",margin:"10px"}}>
    <img src={ragi} alt="babyfood" style={{height:"150px",width:"140px"}}/>
    <p style={{width:"200px"}}> Calcium present in <span style={{color:"#e34709",fontWeight:"bold"}}> Ragi or Naachni</span> is 10 times higher than wheat or rice, making it the perfect food for  babies.</p>
</div>

<div style={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",margin:"10px"}}>
    <img src={bajra} alt="babyfood" style={{height:"150px",width:"140px"}}/>
    <p style={{width:"200px"}}>  <span style={{color:"#e34709",fontWeight:"bold"}}>Bajra </span>is 19 times richer in iron and fat , While phosphorous and calcium are about 2.5-3 times higher than rice. </p>
</div>

<div style={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",margin:"10px"}}>
    <img src={proso} alt="babyfood" style={{height:"150px",width:"140px"}}/>
    <p style={{width:"200px"}}>  <span style={{color:"#e34709",fontWeight:"bold"}}> Proso millet </span> is known to strengthen nervous system of growing babies due to the rich presence of Vit B6 in it. </p>
</div>

<div style={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",margin:"10px"}}>
    <img src={barnyard} alt="babyfood" style={{height:"150px",width:"140px"}}/>
    <p style={{width:"200px"}}>  <span style={{color:"#e34709",fontWeight:"bold"}}> Barnyard millets </span>  are seen to have over 18mg of iron/100g, treats all anemia issues in pregnant women and growing babies.</p>
</div>

   </div>
   </div>
  )
}

export default BabyFood