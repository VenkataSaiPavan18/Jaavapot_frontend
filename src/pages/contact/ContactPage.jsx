// import React, { useEffect,useState } from "react";
// // import "../assets/css/main.css";
// import AOS from "aos";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';

// function ContactScreen() {
//   const navigate=useNavigate();
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleRegistration = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https://pagoanalytics.azurewebsites.net/jaavapotcontactform/contacts', {
//         fullName,
//         email,
//         phone,
//         subject,
//         message,
//       });

//       // Assuming the server returns a success message
//       if (response.status === 201) {

//         alert('Registered successfully!');
//         navigate('/adminlogin'); // Navigate to the login route
//       }
//     } catch (error) {
//       setErrorMessage('Registration failed. Please check your information and try again.');
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     AOS.init();
//   }, []);
//   return (
//     <div>
//       <section id="contact" className="contact">
//         <div className="container" data-aos="fade-up">
//           <div className="section-header">
//             <h2>Contact</h2>
//             <p>
//               Need Help? <span>Contact Us</span>
//             </p>
//           </div>

//           <div className="mb-3">
//             <iframe
//               style={{
//                 border: 0,
//                 width: "100%",
//                 height: "350px",
//                 margin: "0 auto",
//               }}
//             src=  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.888321051512!2d78.524559!3d17.374763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98e1b5f5fc11%3A0x4ea24b86de9b5c2c!2s16-11-511%2FD%2053%2C%20Musarambagh%2C%20Shalivahana%20Nagar%20Colony%2C%20Dilsukhnagar%2C%20Hyderabad%2C%20Telangana%20500036%2C%20India!5e0!3m2!1sen!2sus!4v1642845127406!5m2!1sen!2sus"

//               // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3839006979145!2d78.4787722148925!3d17.38504418808357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98e31f98b7d1%3A0x56f75b8c45a9ea2!2sCharminar%2C%20Char%20Kaman%2C%20Ghansi%20Bazar%2C%20Hyderabad%2C%20Telangana%20500002%2C%20India!5e0!3m2!1sen!2sus!4v1642845127406!5m2!1sen!2sus"
//               frameborder="0"
//               allowfullscreen
//             ></iframe>
//           </div>

//           <div className="row gy-4">
//             <div className="col-md-6">
//               <div className="info-item  d-flex align-items-center">
//                 <i className="icon bi bi-map flex-shrink-0"></i>
//                 <div>
//                   <h3>Our Address</h3>
//                   <p>Resident of H No.:16-11-741/D/106, Shalivahana Nagar, Malakpet, Hyderabad - 500036, Telangana.</p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-6">
//               <div className="info-item d-flex align-items-center">
//                 <i className="icon bi bi-envelope flex-shrink-0"></i>
//                 <div>
//                   <h3>Email Us</h3>
//                   <p>jaavapot@gmail.com</p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-6">
//               <div className="info-item  d-flex align-items-center">
//                 <i className="icon bi bi-telephone flex-shrink-0"></i>
//                 <div>
//                   <h3>Call Us</h3>
//                   <p>+91 88851 88194</p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-6">
//               <div className="info-item  d-flex align-items-center">
//                 <i className="icon bi bi-share flex-shrink-0"></i>
//                 <div>
//                   <h3>Opening Hours</h3>
//                   <div>
//                     <strong>Mon-Sat:</strong> 9AM - 9PM;
//                     <strong>Sunday:</strong> Closed
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <form
//             action="forms/contact.php"
//             method="post"
//             role="form"
//             className="php-email-form p-3 p-md-4"
//           >
//             <div className="row">
//               <div className="col-xl-6 form-group">
//                 <input
//                   type="text"
//                   name="name"
//                   className="form-control"
//                   id="name"
//                   placeholder="Your Name"
//                   required
//                 />
//               </div>
//               <div className="col-xl-6 form-group">
//                 <input
//                   type="email"
//                   className="form-control"
//                   name="email"
//                   id="email"
//                   placeholder="Your Email"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="subject"
//                 id="subject"
//                 placeholder="Subject"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <textarea
//                 className="form-control"
//                 name="message"
//                 rows="5"
//                 placeholder="Message"
//                 required
//               ></textarea>
//             </div>
//             <div className="my-3">
//               <div className="loading">Loading</div>
//               <div className="error-message"></div>
//               <div className="sent-message">
//                 Your message has been sent. Thank you!
//               </div>
//             </div>
//             <div className="text-center">
//               <button type="submit">Send Message</button>
//             </div>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ContactScreen;

import React, { useEffect, useState } from "react";
// import "../assets/css/main.css";
import AOS from "aos";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ContactScreen() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://pagoanalytics.azurewebsites.net/jaavapotcontactform/contacts",
        {
          fullName,
          email,
          phone,
          subject,
          message,
        }
      );

      // Assuming the server returns a success message
      if (response.status === 201) {
        alert("Registered successfully!");
        setFullName("")
        setEmail("")
setPhone("")
setSubject("")
setMessage("")
        // navigate("/contact"); // Navigate to the login route
      }
    } catch (error) {
      setErrorMessage(
        "Registration failed. Please check your information and try again."
      );
      console.error(error);
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            {/* <h2>Contact</h2> */}
            <p>
              Need Help? <span style={{fontWeight:"bold"}}>Contact Us</span>
            </p>
          </div>

          <div className="mb-3" 
               >
            <iframe
              style={{
                border: 0,
                width: "100%",
                height: "350px",
                margin: "0 auto",
                borderRadius:"20px",
                boxShadow:"0px 4px 6px 2px black"
              }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.888321051512!2d78.524559!3d17.374763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98e1b5f5fc11%3A0x4ea24b86de9b5c2c!2s16-11-511%2FD%2053%2C%20Musarambagh%2C%20Shalivahana%20Nagar%20Colony%2C%20Dilsukhnagar%2C%20Hyderabad%2C%20Telangana%20500036%2C%20India!5e0!3m2!1sen!2sus!4v1642845127406!5m2!1sen!2sus"
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3839006979145!2d78.4787722148925!3d17.38504418808357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98e31f98b7d1%3A0x56f75b8c45a9ea2!2sCharminar%2C%20Char%20Kaman%2C%20Ghansi%20Bazar%2C%20Hyderabad%2C%20Telangana%20500002%2C%20India!5e0!3m2!1sen!2sus!4v1642845127406!5m2!1sen!2sus"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>

          <div className="row gy-4">
            <div className="col-md-6" >
              <div className="info-item  d-flex align-items-center" style={{backgroundColor:"rgba(189, 152, 109,0.5)",borderRadius:"20px",boxShadow:"0px 4px 6px 2px black"}}>
                <i className="icon bi bi-map flex-shrink-0"></i>
                <div >
                  <h3 style={{color:"black"}}>Our Address</h3>
                  <p style={{fontWeight:"bold"}}>
                    Resident of H No.:16-11-741/D/106, Shalivahana Nagar,
                    Malakpet, Hyderabad - 500036, Telangana.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6" >
              <div className="info-item d-flex align-items-center" style={{backgroundColor:"rgba(189, 152, 109,0.5)",borderRadius:"20px",boxShadow:"0px 4px 6px 2px black"}}>
                <i className="icon bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3 style={{color:"black"}}>Email Us</h3>
                  <p style={{fontWeight:"bold"}}>jaavapot@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="col-md-6" >
              <div className="info-item  d-flex align-items-center" style={{backgroundColor:"rgba(189, 152, 109,0.5)",borderRadius:"20px",boxShadow:"0px 4px 6px 2px black"}}>
                <i className="icon bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3 style={{color:"black"}}>Call Us</h3>
                  <p style={{fontWeight:"bold"}}>+91 88851 88194</p>
                </div>
              </div>
            </div>

            <div className="col-md-6" style={{}}>
              <div className="info-item  d-flex align-items-center" style={{backgroundColor:"rgba(189, 152, 109,0.5)",borderRadius:"20px",boxShadow:"0px 4px 6px 2px black"}}>
                <i className="icon bi bi-share flex-shrink-0"></i>
                <div>
                  <h3 style={{color:"black"}}>Opening Hours</h3>
                  <div>
                    <strong>Mon-Sat:</strong> 9AM - 9PM;
                    <strong>Sunday:</strong> Closed
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Form
            onSubmit={handleRegistration}
            // action="forms/contact.php"
            // method="post"
            // role="form"
            style={{backgroundColor:"transparent",borderRadius:"20px"}}
            className="php-email-form p-3 p-md-4"
          >
            <div className="row">
              <div className="col-xl-6 form-group" > 
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  required
                  style={{borderRadius:"20px",fontWeight:"bold",border:"1px",backgroundColor:"rgba(189, 152, 109,0.2)"}}
               
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="col-xl-6 form-group">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  style={{borderRadius:"20px",fontWeight:"bold",border:"1px",backgroundColor:"rgba(189, 152, 109,0.2)"}}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-xl-6 form-group">
              <Form.Control
                type="text"
                placeholder="Subject"
                value={subject}
                style={{borderRadius:"20px",fontWeight:"bold",border:"1px",backgroundColor:"rgba(189, 152, 109,0.2)"}}
                 required
                onChange={(e) => setSubject(e.target.value)}
              />
              </div>
              <div className="col-xl-6 form-group">
                <Form.Control
                  type="text"
                  placeholder="Enter number"
                  value={phone}
                  style={{borderRadius:"20px",fontWeight:"bold",border:"1px",backgroundColor:"rgba(189, 152, 109,0.2)"}}
               
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
            <Form.Control
            as="textarea"
                  type="text"
                  placeholder="Enter Message"
                  value={message}
                  rows={5}
                  required
                  style={{borderRadius:"20px",fontWeight:"bold",border:"1px",backgroundColor:"rgba(189, 152, 109,0.2)"}}
               
                  onChange={(e) => setMessage(e.target.value)}
                />
              {/* <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea> */}
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </Form>
        </div>
      </section>
    </div>
  );
}

export default ContactScreen;
