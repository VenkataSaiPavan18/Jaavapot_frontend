import React, { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./styles/adminlogin.css";
 
const AddMenu = () => {
  const { adminEmail } = useParams();
  const nav = useNavigate();
 
  const [itemname, setItemname] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [fatContent, setFatContent] = useState('');
  const [sodiumContent, setSodiumContent] = useState('');
  const [carbsContent, setCarbsContent] = useState('');
  const [proteinContent, setProteinContent] = useState('');
  const [dailyNutrients, setDailyNutrients] = useState('');
  const [menuImage, setMenuImage] = useState(null);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const formData = new FormData();
      formData.append('itemname', itemname);
      formData.append('category', category);
      formData.append('description', description);
      formData.append('details[0][price]', price);
      formData.append('details[0][quantity]', quantity);
      formData.append('fatContent', fatContent);
      formData.append('sodiumContent', sodiumContent);
      formData.append('carbsContent', carbsContent);
      formData.append('proteinContent', proteinContent);
      formData.append('dailyNutrients', dailyNutrients);
      formData.append('postedby', adminEmail);
      formData.append('menuImage', menuImage);
 
      const response = await axios.post(`https://pagoanalytics.azurewebsites.net/jaavapotmenu/api/products`, formData);
 
      if (response.status === 201) {
        // Handle successful product post, e.g., redirect or display a success message
        alert('Product posted successfully');
        setItemname('');
        setCategory('');
       setDescription('');
       setPrice('');
       setQuantity('');
        setMenuImage(null);
 
      }
    } catch (error) {
      console.error('Error posting product:', error);
      alert('Unable to Post Your Product')
    }
  };
 
  return (
    <div className='admin-dashboard' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <h2 style={{textDecoration:"underline"}}>Add A New Item To Your Menu</h2>
      <button className='btn btn-secondary' onClick={() => {nav(`/adminmenu/${adminEmail}`)}} style={{marginLeft:"80%"}}>View Menu</button>
      <form onSubmit={handleSubmit}>
        {/* Input fields for product details */}
        <label>Item Name:</label>
        <input className="menuitemstyle" type="text" value={itemname} onChange={(e) => setItemname(e.target.value)} />
 
       <br></br>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="menuitemstyle">
        <option value="">select category</option>
          <option value="Healthy Soups">Healthy Soups</option>
          <option value="Healthy Porridges"> Healthy Porridges</option>
          <option value="Immunity Boosters"> Immunity Boosters</option>
          <option value="Non Veg Soups"> Non Veg Soups</option>
         
        </select>
        <br></br>
 
        <label>Description</label>
        <input className="menuitemstyle" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <br></br>
        <label>Price</label>
        <input className="menuitemstyle" type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        <br></br>
        <label>Quantity</label>
        <input className="menuitemstyle" type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
 
        <br></br>
   
        <label>Menu Image:</label>
        <input className="menuitemstyle" type="file" accept="image/*" onChange={(e) => setMenuImage(e.target.files[0])} />
        <br></br>
        <button type="submit" className='btn btn-secondary'>Submit</button>
      </form>
    </div>
  );
};
 
export default AddMenu;