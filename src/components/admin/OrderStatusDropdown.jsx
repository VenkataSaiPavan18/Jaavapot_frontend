import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const OrderStatusDropdown = ({ orderId, orderStatus }) => {
  const [selectedStatus, setSelectedStatus] = useState(orderStatus || ''); // Use the provided orderStatus as the initial value
  const orderStatusOptions = ['Pending','Order Not Accepted', 'Order Accepted', 'Under Preparation', 'Shipped', 'Delivered'];
 
  useEffect(() => {
    // Update the selected status when the orderStatus prop changes
    setSelectedStatus(orderStatus || '');
  }, [orderStatus]);
 
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedStatus(selectedValue);
    // You can add more logic here based on the selected status
    console.log(`Selected order status: ${selectedValue}`);
  };
 
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
 
  const handleConfirmButtonClick = async () => {
    // Make a PUT request to update the order status
    try {
      await axios.put(`https://pagoanalytics.azurewebsites.net/jaavapotorders/api/orders/${orderId}`, { status: selectedStatus });
      console.log('Order status updated successfully');
      alert(' Order status updated successfully');
      // You can add more logic here if needed
    } catch (error) {
      console.error('Error updating order status:', error);
      // Handle error, display a message to the user, etc.
    }
  };
 
  return (
    <div className="dropdown" style={{ padding: "5px", borderRadius: "10px", fontWeight: "bold" }}>
      <label htmlFor="orderStatus">Order Status:</label>
      <select
        id="orderStatus"
        value={selectedStatus}
        onChange={handleSelectChange}
        style={{ backgroundColor: getColorByIndex(orderStatusOptions.indexOf(selectedStatus)), border: "1px white solid", padding: "5px", borderRadius: "10px" }}
      >
        <option value="">Select Status</option>
        {orderStatusOptions.map((status, index) => (
          <option key={index} value={status} style={{ backgroundColor: getColorByIndex(index) }} >
            {status}
          </option>
        ))}
      </select>
      <button type="button" style={{ borderRadius: "20px", margin: "5px" }} onClick={handleConfirmButtonClick}>
        Confirm
      </button>
    </div>
  );
};
 
export default OrderStatusDropdown;