// import React, { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'

// export default function Login() {
//   const [credentials, setCredentials] = useState({ email: "", password: "" })
//   let navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("https://pagoanalytics.azurewebsites.net/jaavapotuser/login", {
//       // const response = await fetch("http://localhost:5000/api/loginuser", {
//       // credentials: 'include',
//       // Origin:"http://localhost:3000/login",
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email: credentials.email, password: credentials.password })

//     });
//     const json = await response.json()
//  console.log('response',response.status);
//     if (response.status===200) {
//       //save the auth toke to local storage and redirect
//       localStorage.setItem('userEmail', credentials.email)
//       localStorage.setItem('token', json.token)
//       // console.log('response',response.oken);
//       // console.log('json.authToken',json.token);
//       navigate("/");
//       alert("Success, You have successfully logged in");
//     }
//     else {
//       alert("Enter Valid Credentials")
//     }
//   }

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value })
//   }

//   return (
//     <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
//       <div>
//         {/* <Navbar /> */}
//       </div>
//       <div className='container'>
//         <form className='w-50 m-auto  border bg-light border-success rounded' onSubmit={handleSubmit}>
//           <div className="m-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//             <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone.</div>
//           </div>
//           <div className="m-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//             <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
//           </div>
//           <button type="submit" className="m-3 btn btn-success">Submit</button>
//           <Link to="/signup" className="m-3 mx-1 btn btn-danger">New User</Link>
//         </form>

//       </div>
//     </div>
//   )
// }

import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../components/admin/styles/adminlogin.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
const navigate=useNavigate();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("https://pagoanalytics.azurewebsites.net/jaavapotuser/login", {
      // const response = await fetch("http://localhost:5000/api/loginuser", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })

    });
    const json = await response.json()
 console.log('response',response.status);
    if (response.status===200) {
      //save the auth toke to local storage and redirect
      localStorage.setItem('userEmail', email)
      localStorage.setItem('token', json.token)
      // console.log('response',response.oken);
      // console.log('json.authToken',json.token);
      navigate("/");
      alert("Success, You have successfully logged in");
    }
    else {
      alert("Enter Valid Credentials")
    }
  }
 
  // const handleLogin = async (e) => {
  //   e.preventDefault();
 
  //   try {
  //     const response = await axios.post('https://pagoanalytics.azurewebsites.net/jaavapotadmin/admin/login', { email, password });
 
  //     // Assuming the server returns a success message
  //     if (response.data.message === 'Login successful.') {
  //       // Redirect to the dashboard or perform any other necessary actions
  //       console.log('Login successful');
  //       navigate(`/admindashboard/${email}`);
  //     }
  //   } catch (error) {
  //     setErrorMessage('Invalid email or password.');
  //     alert('Invalid email or password.')
  //   }
  // };
 
  return (
    <div className='login-container'>
    <Form  onSubmit={handleLogin} className='formbgnew'>
    <h2 style={{textAlign:"center"}}>User Login</h2>
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
      <Link to="/signup"> Click Here</Link>
      </p>
 
    </Form>
   
    </div>
  );
}
 
export default Login;