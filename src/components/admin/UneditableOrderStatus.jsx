import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const UneditableOrderStatus = ({ orderId, orderStatus }) => {
  const [selectedStatus, setSelectedStatus] = useState(orderStatus || ''); // Use the provided orderStatus as the initial value
  const orderStatusOptions = ['Pending', 'Order Not Accepted', 'Order Accepted', 'Under Preparation', 'Shipped', 'Delivered'];
 
  useEffect(() => {
    // Update the selected status when the orderStatus prop changes
    setSelectedStatus(orderStatus || '');
  }, [orderStatus]);
 
  const getColorByIndex = (index) => {
    switch (index % 6) {
      case 0:
        return 'lightgrey';
      case 1:
        return 'Red';
     
      case 2:
        return '#80e0dd';
       
      case 3:
        return '#f5bc71';
       
      case 4:
        return '#6588db';
      case 5:
        return '#32a31c';
      default:
        return 'white';
    }
  };
 
  return (
    <div className="dropdown" style={{ padding: "5px", borderRadius: "10px", fontWeight: "bold",display:"flex",flexWrap:"wrap" }}>
      <label htmlFor="orderStatus">Order Status:</label>
      <select
        id="orderStatus"
        value={selectedStatus}
        disabled  // Set the 'disabled' attribute to make the dropdown uneditable
        style={{ backgroundColor: getColorByIndex(orderStatusOptions.findIndex(option => option.toLowerCase() === selectedStatus.toLowerCase())), border: "1px white solid", padding: "5px", borderRadius: "10px" }}
      >
 
        {orderStatusOptions.map((status, index) => (
          <option key={index} value={status} style={{ backgroundColor: getColorByIndex(index), fontWeight: "bolder" }} >
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};
 
export default UneditableOrderStatus;