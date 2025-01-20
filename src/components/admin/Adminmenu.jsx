import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./styles/adminlogin.css";
 
const Adminmenu = () => {
  const { adminEmail } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();
 
  useEffect(() => {
    const fetchProductsByAdmin = async () => {
      try {
        const response = await axios.get(`https://pagoanalytics.azurewebsites.net/jaavapotmenu/admin/products/${adminEmail}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
 
    fetchProductsByAdmin();
  }, [adminEmail]);
 
  const handleUpdate = async (productId) => {
    try {
      const productToUpdate = products.find((p) => p._id === productId);
 
      const updatedItemname = prompt('Enter updated item name:', productToUpdate?.itemname);
      const updatedCategory = prompt('Enter updated category:', productToUpdate?.category);
      const updatedDescription = prompt('Enter updated description:', productToUpdate?.description);
      const updatedPrice = prompt('Enter updated price:', productToUpdate?.details[0]?.price);
      const updatedQuantity = prompt('Enter updated quantity:', productToUpdate?.details[0]?.quantity);
     
      if (
        updatedItemname !== null ||
        updatedCategory !== null ||
        updatedDescription !== null ||
        updatedPrice !== null ||
        updatedQuantity !== null
       
      ) {
        const response = await axios.put(`https://pagoanalytics.azurewebsites.net/jaavapotmenu/api/products/${productId}`, {
          itemname: updatedItemname || productToUpdate.itemname,
          category: updatedCategory || productToUpdate.category,
          description: updatedDescription || productToUpdate.description,
          details: [
            {
              price: updatedPrice || productToUpdate.details[0]?.price,
              quantity: updatedQuantity || productToUpdate.details[0]?.quantity,
            },
            // Add more details as needed
          ],
          // Add other fields as needed
        });
 
        if (response.status === 200) {
          // Update the product in the local state
          setProducts((prevProducts) =>
            prevProducts.map((product) =>
              product._id === productId
                ? {
                    ...product,
                    itemname: updatedItemname || product.itemname,
                    category: updatedCategory || product.category,
                    description: updatedDescription || product.description,
                    details: [
                      {
                        price: updatedPrice || product.details[0]?.price,
                        quantity: updatedQuantity || product.details[0]?.quantity,
                      },
                      // Update more details as needed
                    ],
                    // Update other fields as needed
                  }
                : product
            )
          );
          alert('Product updated successfully');
        } else {
          console.error('Product update failed');
        }
      }
    } catch (error) {
      console.error('Error during product update:', error.message);
    }
  };
 
 
 
  const handleDeleteItem = async (productId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this item?');
 
    if (!shouldDelete) {
      return; // User canceled the deletion
    }
    try {
      const response = await axios.delete(`https://pagoanalytics.azurewebsites.net/jaavapotmenu/api/products/${productId}`);
 
      if (response.status === 200) {
        // Remove the deleted product from the local state
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
        alert('Product deleted successfully');
      } else {
        console.error('Product deletion failed');
      }
    } catch (error) {
      console.error('Error during product deletion:', error.message);
    }
  };
 
 
  return (
    <div className='admin-dashboard' style={{textAlign:"center"}}>
      <h1>Your Menu</h1>
     
      <button className='btn btn-secondary'  onClick={() => {nav(`/addmenu/${adminEmail}`)}} style={{marginLeft:"80%"}}>Add Item</button>
 
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h4>Below Menu Items Posted by {adminEmail}</h4>
          <button className='btn btn-secondary'> Total Items: {products.length}</button>
          <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:"center" }}>
            {products.map((product) => (
              <div  className='formbgnew' key={product._id} style={{style:"flex",flexWrap:"wrap",maxWidth:"300px"}}>
                <img src={product.imagepath} alt={product.itemname} style={{ width: '250px', height: '250px', objectFit: 'cover' }} />
                <h3>{product.itemname}</h3>
                <p> description: {product.description}</p>
                <p>Category: {product.category}</p>
                <p>Posted by: {product.postedby}</p>
                <ul>
                  {product.details.map((detail) => (
                    <li key={detail._id}>
                      Price: {detail.price}, Quantity: {detail.quantity}
                    </li>
                  ))}
                </ul>
                <button className='btn btn-secondary' onClick={() => handleUpdate(product._id)}>Edit Item</button>
                <br></br>
                <button  className='btn btn-secondary' onClick={() => handleDeleteItem(product._id)} style={{margin:"10px"}}> Delete Item</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
 
export default Adminmenu;