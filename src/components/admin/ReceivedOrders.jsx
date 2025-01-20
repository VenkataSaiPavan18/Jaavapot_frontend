import React, { useState, useEffect } from 'react';
import OrderStatusDropdown from './OrderStatusDropdown';
import UneditableOrderStatus from './UneditableOrderStatus';
 
const ReceivedOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [receivedTodayOrders, setReceivedTodayOrders] = useState([]);
  const [displayOption, setDisplayOption] = useState('all');
  useEffect(() => {
    // Make API call to fetch all orders
    fetch('https://pagoanalytics.azurewebsites.net/jaavapotorders/api/orders')
      .then(response => response.json())
      .then(data => {
        // Sort all orders by timestamp in descending order (latest first)
        const sortedAllOrders = data.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        setAllOrders(sortedAllOrders);
 
        // Filter orders received today and sort by timestamp in descending order (latest first)
        const today = new Date().setHours(0, 0, 0, 0); // Set time to midnight
        const receivedToday = sortedAllOrders.filter(order => new Date(order.timestamp).getTime() >= today);
        setReceivedTodayOrders(receivedToday);
      })
      .catch(error => console.error('Error fetching orders:', error));
  }, []);
 
 
  const handleDisplayOptionChange = option => {
    setDisplayOption(option);
  };
 
  const formatTimestamp = timestamp => {
    return new Date(timestamp).toLocaleString('en-IN');
  };
 
  return (
    <div style={{ backgroundColor: "rgba(189, 152, 109,0.5)", display: "flex", justifyContent: "start", alignItems: "center", margin: "20px", padding: "20px", borderRadius: "20px", boxShadow: "2px 2px 2px 2px black" }}>
      <div>
        <div style={{ display: "flex",flexWrap:"wrap", justifyContent: "space-evenly", alignItems: "center", }}>
 
          <button className="btn btn-secondary" onClick={() => handleDisplayOptionChange('all')}>All Orders</button>
          <button className="btn btn-secondary" onClick={() => handleDisplayOptionChange('today')}>Today's Orders</button>
         
        </div>
 
        <h2>{displayOption === 'all' ? 'All Orders' : "Today's Orders"}</h2>
        <ul>
          {displayOption === 'all'
            ? allOrders.map(order => (
              <li   key={order._id} style={{backgroundColor: "rgba(189, 152, 109,0.5)",borderRadius:"20px",marginTop:"10px",padding:"10px",boxShadow:"2px 2px 2px 2px black"}}>
               <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}}>
             <div>  <p > <span style={{fontWeight:"bold"}}>Order Received from: </span> {order.email}</p>
                <p> <span  style={{fontWeight:"bold"}}>Received at:</span>  {formatTimestamp(order.timestamp)}</p>
                <p  style={{fontWeight:"bold"}}>Order  Details</p>
                </div>
                <UneditableOrderStatus orderId={order._id} orderStatus={order.status}/>
                </div>
                <ul>
               
                  {order.order_data.map((item, index) => (
                    <li key={index}>
                     
                      {Array.isArray(item) ? (
                        <ul>
                              <h6 style={{fontWeight:"bold"}}>Ordered Items</h6>
                          {item.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              {subItem.name} - Qty: {subItem.qty}  - Price: {subItem.price}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <>
                         <div >
                            <h6 style={{fontWeight:"bold",display:"inline"}}>Delivery Address: </h6>
                            <span><span style={{fontWeight:"bold"}}>Name: </span> {item.name}, </span>
                            <span> <span style={{fontWeight:"bold"}}>Email: </span>{item.email}, </span>
                            <span><span style={{fontWeight:"bold"}}>Phone No: </span> {item.phoneNo}, </span>
                            <span> <span style={{fontWeight:"bold"}}>Location: </span> {item.location}, </span>
                            <span> <span style={{fontWeight:"bold"}}>City: </span> {item.city}, </span>
                            <span> <span style={{fontWeight:"bold"}}>Pincode: </span> {item.pincode}, </span>
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))
            :
            receivedTodayOrders.map(order => (
                <li key={order._id} style={{backgroundColor: "rgba(189, 152, 109,0.5)",borderRadius:"20px",margin:"10px",padding:"10px",boxShadow:"2px 2px 2px 2px black"}}>
             <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}}>
              <div>  {/* Display order information with Indian timestamp format */}
                <p > <span style={{fontWeight:"bold"}}>Order Received from: </span> {order.email}</p>
                <p> <span  style={{fontWeight:"bold"}}>Received at:</span>  {formatTimestamp(order.timestamp)}</p>
                <p  style={{fontWeight:"bold"}}>Order  Details</p>
                </div>
                  <OrderStatusDropdown orderId={order._id} orderStatus={order.status}/>
                  </div>
                <ul>
               
                  {order.order_data.map((item, index) => (
                    <li key={index}>
                     
                      {Array.isArray(item) ? (
                        <ul>
                              <h6 style={{fontWeight:"bold"}}>Ordered Items</h6>
                          {item.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              {subItem.name} - Qty: {subItem.qty}  - Price: {subItem.price}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <>
                         <div style={{ display: 'inline' }}>
                            <h6 style={{fontWeight:"bold"}}>Delivery Address: </h6>
                            <span><span style={{fontWeight:"bold"}}>Name: </span> {item.name}, </span>
                            <span> <span style={{fontWeight:"bold"}}>Email: </span>{item.email}, </span>
                            <span><span style={{fontWeight:"bold"}}>Phone No: </span> {item.phoneNo}, </span>
                            <span> <span style={{fontWeight:"bold"}}>Location: </span> {item.location}, </span>
                            <span> <span style={{fontWeight:"bold"}}>City: </span> {item.city}, </span>
                            <span> <span style={{fontWeight:"bold"}}>Pincode: </span> {item.pincode}, </span>
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
 
export default ReceivedOrders;