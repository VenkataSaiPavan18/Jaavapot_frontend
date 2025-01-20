import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./styles/adminlogin.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function AdminLogin() {
const navigate=useNavigate();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
 
  const handleLogin = async (e) => {
    e.preventDefault();
 
    try {
      const response = await axios.post('https://pagoanalytics.azurewebsites.net/jaavapotadmin/admin/login', { email, password });
 
      // Assuming the server returns a success message
      if (response.data.message === 'Login successful.') {
        // Redirect to the dashboard or perform any other necessary actions
        console.log('Login successful');
        navigate(`/admindashboard/${email}`);
      }
    } catch (error) {
      setErrorMessage('Invalid email or password.');
      alert('Invalid email or password.')
    }
  };
 
  return (
    <div className='login-container'>
    <Form  onSubmit={handleLogin} className='formbgnew'>
    <h2 style={{textAlign:"center"}}>Admin Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email"   id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
       
         id="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         required
        placeholder="Password" />
      </Form.Group>
   
      <Button variant="primary" type="submit">
        Login
      </Button>
 
      <p style={{textAlign:"center",}}>Please  SignUp before Login  
      <Link to="/adminregistration"> Click Here</Link>
      </p>
 
    </Form>
   
    </div>
  );
}
 
export default AdminLogin;