// import React from 'react';
// import '../../assets/css/main.css';
// import "bootstrap-icons/font/bootstrap-icons.css";
// import Ticker from './Ticker';

// const Footer = () => {
//   return (
//     <div>
//       <>
//       <div>

//   <footer id="footer" className="footer">

//     <div className="container">
//       <div className="row gy-3">
//         <div className="col-lg-3 col-md-6 d-flex">
//           <i className="bi bi-geo-alt icon"></i>
//           <div>
//             <h4>Address</h4>
            
//             Resident of H No.:16-11-741/D/106,<br/>
//              Shalivahana Nagar Malakpet,<br/>
//               Hyderabad - 500036, Telangana.<br/>
            
//           </div>

//         </div>

//         <div className="col-lg-3 col-md-6 footer-links d-flex">
//           <i className="bi bi-telephone icon"></i>
//           <div>
//             <h4>Reservations</h4>
          
//               <strong>Phone:</strong> +91 88851 88194<br/>
//               <strong>Email:</strong> jaavapot@gmail.com<br/>
       
//           </div>
//         </div>

//         <div className="col-lg-3 col-md-6 footer-links d-flex">
//           <i className="bi bi-clock icon"></i>
//           <div>
//             <h4>Opening Hours</h4>
//             <p>
//               <strong>Mon-Sat: 9AM - 9PM</strong><br/>
//               Sunday: Closed
//             </p>
//           </div>
//         </div>

//         <div className="col-lg-3 col-md-6 footer-links">
//           <h4>Follow Us</h4>
//           <div className="social-links d-flex">
//             <a href="https://x.com/jaavapot?s=21" className="twitter"><i className="bi bi-twitter"></i></a>
//             <a href="https://www.facebook.com/profile.php?id=100068a404975174" className="facebook"><i className="bi bi-facebook"></i></a>
//             <a href="https://instagram.com/jaava_pot?igshid=YzAwZjE1ZTI0Zg==" className="instagram"><i className="bi bi-instagram"></i></a>
//             <a href="https://www.linkedin.com/company/jaava-pot/" className="linkedin"><i className="bi bi-linkedin"></i></a>
//             <a href="https://youtube.com/@jaavapot9860?si=6uWP--foQOZ_VY5L" className="linkedin"><i className="bi bi-youtube"></i></a>
//           </div>
//         </div>

//       </div>
//     </div>

//     <div className="container">
//       <div className="copyright">
//         &copy; Copyright <strong><span>Pago Food and Beverages</span></strong>. All Rights Reserved
//       </div>
//       <div className="credits">
       
//         Designed by <a href="http://www.pagoanalytics.com/">JaavaPot</a>
//       </div>
//     </div>
//     <div>
//       <Ticker/>
//     </div>

//   </footer>

//       </div>
//       </>
//     </div>
//   )
// }

// export default Footer;

import React from 'react';
import '../../assets/css/main.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Ticker from './Ticker';
import { Link } from 'react-router-dom';
 
const Footer = () => {
  return (
    <div>
      <>
      <div>
 
  <footer id="footer" className="footer">
 
    <div className="container">
      <div className="row gy-3">
        <div className="col-lg-3 col-md-6 d-flex">
          <i className="bi bi-geo-alt icon"></i>
          <div>
            <h4>Address</h4>
           
            Resident of H No.:16-11-741/D/106,<br/>
             Shalivahana Nagar Malakpet,<br/>
              Hyderabad - 500036, Telangana.<br/>
          <Link to="/adminlogin">  <button style={{marginTop:"10px"}} onClick={() => window.scrollTo(0, 0)}>Admin Dashboard</button> </Link>
          </div>
 
        </div>
 
        <div className="col-lg-3 col-md-6 footer-links d-flex">
          <i className="bi bi-telephone icon"></i>
          <div>
            <h4>Reservations</h4>
         
              <strong>Phone:</strong> +91 88851 88194<br/>
              <strong>Email:</strong> jaavapot@gmail.com<br/>
       
          </div>
        </div>
 
        <div className="col-lg-3 col-md-6 footer-links d-flex">
          <i className="bi bi-clock icon"></i>
          <div>
            <h4>Opening Hours</h4>
            <p>
              <strong>Mon-Sat: 9AM - 9PM</strong><br/>
              Sunday: Closed
            </p>
          </div>
        </div>
 
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Follow Us</h4>
          <div className="social-links d-flex">
            <a href="https://x.com/jaavapot?s=21" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100068a404975174" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="https://instagram.com/jaava_pot?igshid=YzAwZjE1ZTI0Zg==" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/company/jaava-pot/" className="linkedin"><i className="bi bi-linkedin"></i></a>
            <a href="https://youtube.com/@jaavapot9860?si=6uWP--foQOZ_VY5L" className="linkedin"><i className="bi bi-youtube"></i></a>
          </div>
        </div>
 
      </div>
    </div>
 
    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Pago Food and Beverages</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
       
        Designed by <a href="http://www.pagoanalytics.com/">JaavaPot</a>
      </div>
    </div>
    <div>
      <Ticker/>
    </div>
 
  </footer>
 
      </div>
      </>
    </div>
  )
}
 
export default Footer;