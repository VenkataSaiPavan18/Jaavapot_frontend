import React, { useState, useEffect } from 'react';
import { Link, useParams ,useNavigate} from 'react-router-dom';
import axios from 'axios';
 
const AdminDashboard = () => {
  const { email } = useParams();
  const [adminData, setAdminData] = useState({});
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();
 
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get(`https://pagoanalytics.azurewebsites.net/jaavapotadmin/admin/${email}`);
        setAdminData(response.data);
      } catch (error) {
        console.error('Error fetching admin data:', error);
      } finally {
        setLoading(false);
      }
    };
 
    fetchAdminData();
  }, [email]);
 
 const adminEmail=adminData.email
 
  return (
    <div className='admin-dashboard '>
      <h1 style={{textAlign:"center",color:"#ff5e0d",fontWeight:"bold"}}>Welcome to the Admin Dashboard, <span style={{color:"black"}}> {adminData.fullName}</span> </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center"}} >
            <div className='formbgnew'>
          <h3 style={{textAlign:"center",color:"#ff5e0d",fontWeight:"bold"}}>Admin Information</h3>
         
          <p>
            <strong>Email:</strong> {adminData.email}
          </p>
          <p>
            <strong>Phone:</strong> {adminData.phone}
          </p>
          <p>
            <strong>Branch Name:</strong> {adminData.branchName}
          </p>
          <p>
            <strong>Address:</strong> {adminData.address}
          </p>
          <p>
            <strong>Pincode:</strong> {adminData.pincode}
          </p>
          <p>
            <strong>City:</strong> {adminData.city}
          </p>
          <p>
            <strong>State:</strong> {adminData.state}
          </p>
          </div>
          <div style={{display:"flex",flexDirection:"column"}}>
         <div className='formbgnew'  onClick={() => {nav(`/adminmenu/${adminEmail}`)}} style={{cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <img src="https://surveyappanswers.blob.core.windows.net/jaavapot/menu.png" alt='menu' style={{height:"100px",width:"100px"}}/>
           <h4 style={{textAlign:"center",color:"#ff5e0d",fontWeight:"bold"}}> See Your Menu</h4>
            </div>
           
           
            <div className='formbgnew'  onClick={() => {nav(`/addmenu/${adminEmail}`)}}  style={{cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            {/* <img src="https://surveyappanswers.blob.core.windows.net/jaavapot/add3.png" alt='menu' style={{height:"100px",width:"100px"}}/> */}
           <h4 style={{textAlign:"center",color:"#ff5e0d",fontWeight:"bold"}}>Add Menu Items
           <span style={{color:"black",fontWeight:"bolder"}}> + </span>
           </h4>
            </div>
            </div>
           
            <div className='formbgnew'  onClick={() => {nav(`/receivedorders`)}}  style={{cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-list-3260655-2729202.png?f=webp" alt='menu' style={{height:"100px",width:"100px"}}/>
           <h4 style={{textAlign:"center",color:"#ff5e0d",fontWeight:"bold"}}>Received Orders</h4>
            </div>
           
        </div>
      )}
     
    </div>
  );
};
 
export default AdminDashboard;