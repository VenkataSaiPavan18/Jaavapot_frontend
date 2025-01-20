import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./styles/adminlogin.css";
import { useNavigate } from 'react-router-dom';
 
function AdminRegistration() {
    const navigate=useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [branchName, setBranchName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
 
  const handleRegistration = async (e) => {
    e.preventDefault();
 
    try {
      const response = await axios.post('https://pagoanalytics.azurewebsites.net/jaavapotadmin/admin/register', {
        fullName,
        email,
        phone,
        branchName,
        address,
        pincode,
        city,
        state,
        password,
      });
 
      // Assuming the server returns a success message
      if (response.status === 201) {
       
        alert('Registered successfully!');
        navigate('/adminlogin'); // Navigate to the login route
      }
    } catch (error) {
      setErrorMessage('Registration failed. Please check your information and try again.');
      console.error(error);
    }
  };
 
  return (
    <div className='admin-container '>

     
    <Form onSubmit={handleRegistration} className='  formbgnew'>
        <h2 style={{textAlign:"center"}}>Admin SignUp</h2>
      <Form.Group className="mb-3" controlId="fullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your full name"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="branchName">
        <Form.Label>Branch Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your branch name"
          value={branchName}
          required
          onChange={(e) => setBranchName(e.target.value)}
        />
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your address"
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="pincode">
        <Form.Label>Pincode</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your pincode"
          value={pincode}
          required
          onChange={(e) => setPincode(e.target.value)}
        />
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your city"
          value={city}
          required
          onChange={(e) => setCity(e.target.value)}
        />
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="state">
        <Form.Label>State</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your state"
          value={state}
          required
          onChange={(e) => setState(e.target.value)}
        />
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
 
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    </div>
  );
}
 
export default AdminRegistration;