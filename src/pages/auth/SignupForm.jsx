import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../../components/admin/styles/adminlogin.css"
import { useNavigate } from 'react-router-dom';
 
function Signup() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [branchName, setBranchName] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOTP] = useState('');
    const [isEmailVerified, setIsEmailVerified] = useState(false); // New state to track email verification
    const [generatedOTP, setGeneratedOTP] = useState("");
    const [sendOTPTimer, setSendOTPTimer] = useState(null);
    const [isSendOTPDisabled, setIsSendOTPDisabled] = useState(false);

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setIsEmailVerified(false); // Set isEmailVerified to false when email changes
    };

    const handleRegistration = async (e) => {
        e.preventDefault();
        if (!isEmailVerified) {
            alert('Please verify your email before registering.');
            return;
        }
        try {
            const response = await fetch("https://pagoanalytics.azurewebsites.net/jaavapotuser/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName: fullName,
                    email: email,
                    phone: phone,
                    password: password,
                    location: address,
                }),
            });
            if (response.status === 201) {
                alert("Success, You have successfully registered please login");
                navigate("/login");
            } else if (response.status === 400) {
                alert("Email or phone number already exists. Please provide a different email and phone number.");
            } else {
                alert("Enter valid credentials.");
            }
        } catch (error) {
            console.error("Error:", error.message || "Server error");
        }
    };

    const generateRandomNumber = () => {
      let result = "";
      for (let i = 0; i < 5; i++) {
        const digit = Math.floor(Math.random() * 10);
        result += digit;
      }
      return result;
    };
  
    const validateEmail = (email) => {
      // Simple email validation using a regular expression
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSendOTP = async () => {
      if (!validateEmail(email)) {
        alert(
   
          "Invalid email format. Please enter a valid email address."
        );
        return;
      }

      const newOTP = generateRandomNumber(); // Generate a new OTP
      console.log(newOTP);
      setIsSendOTPDisabled(true);
      setGeneratedOTP(newOTP); 

          // Set a timer to enable the "Send OTP" button after one minute
    const timer = setTimeout(() => {
      setIsSendOTPDisabled(false);
    }, 30000); // 60,000 milliseconds = 1 minute
    setSendOTPTimer(timer);

        try {
            const response = await fetch("https://pagoanalytics.azurewebsites.net/jaavapototp/send-email", {
                // const response = await fetch("https://pagoanalytics.azurewebsites.net/emailotp/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ emailid: email, otpnumber: newOTP }), // Send email to receive OTP
            });
            if (response.ok) {
                alert("OTP sent successfully to your email.");
                // Email sent successfully, enable register button
            } else {
                const data = await response.json();
                alert(data.message || "Error sending OTP");
            }
        } catch (error) {
            console.error("Error:", error.message || "Server error");
        }
    };

    useEffect(() => {
      return () => {
        // Clear the timer when the component unmounts to prevent memory leaks
        if (sendOTPTimer) {
          clearTimeout(sendOTPTimer);
        }
      };
    }, []);

    const checkOTP = () => {
      // const enteredOTP = otp.join('');
    // navigation.navigate("Welcome",{TempEmail});
    if (otp === generatedOTP) {
      // Compare with the stored OTP

      // setMessage('OTP matches. Navigating to the registration screen...');
      // navigation.navigate('Welcome',{email});
      setIsEmailVerified(true)
      setOTP("")
      setGeneratedOTP("SecuRinG")
      alert(
        "Success OTP matches. Navigating to the registration screen...",
      );
    } else {
      alert("OTP does not match. Please Genearte a new OTP and continue.");
      setOTP("")
      setGeneratedOTP("SecuRinG")
      // setMessage('OTP does not match. Please Genearte a new OTP and continue.');
    }
  };


    return (
        <div className='admin-container'>
            <Form onSubmit={handleRegistration} className='formbgnew'>
                <h2 style={{textAlign:"center"}}>User SignUp</h2>
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
                    <Form.Label>Email address {isEmailVerified ? 'Verified':"Not Verified"}</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        required
                        onChange={handleEmailChange}
                    />
                    <Button onClick={handleSendOTP} disabled={!validateEmail(email) || isSendOTPDisabled}
                    >{isSendOTPDisabled ? "Re-send OTP" : "Send OTP"}</Button> {/* Button to send OTP */}
                </Form.Group>
                {/* Input field to capture OTP */}
                { !isEmailVerified &&
                  <Form.Group className="mb-3" controlId="otp">
                    <Form.Label>OTP</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOTP(e.target.value)}
                        // Disable if email is not verified
                    />
                        <Button onClick={checkOTP} disabled={!validateEmail(email) || isSendOTPDisabled}
                    >Submit OTP</Button> 
                </Form.Group>
}
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
                {/* Enable register button only after email is verified */}
             {isEmailVerified? <Button variant="primary" type="submit" disabled={!isEmailVerified}>Register</Button>:"Please Virify Email to Submit"}  
            </Form>
        </div>
    );
}
 
export default Signup;
