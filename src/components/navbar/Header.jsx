import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/main.css";
import { GiHamburgerMenu } from "react-icons/gi";
import "./header.css";
import logo from '../../assets/img/logo-tjp.png'
const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <div data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="0" 
      className={
        showMediaIcons ? "mobile-nav-active" : ""
      }>
        <header
          id="header"
          className="header d-flex relative-top align-items-center"
        >
          
          <div className="container d-flex align-items-center justify-content-center">
           <div>
            <Link
              to="/"
              className="logo d-flex align-items-center"
            >
             
           
              <img src={logo}  alt="logo is loading"/>
            </Link>
            </div>
            <div>
            <nav id="navbar" className={
        showMediaIcons ? "navbar mobile-nav-active" : "navbar"
      }>
              <ul>
                <li>
                  <Link to="/" className="nav-link">HOME</Link>
                </li>
                <li>
                  <Link to="/about" className="nav-link">ABOUT</Link>
                </li>
                <li>
                  <Link to="/whyporridge" className="nav-link">WHY PORRIDGE</Link>
                </li>
                <li>
                  <Link to="/whysoups" className="nav-link">WHY SOUPS</Link>
                </li>
            
                <li className="dropdown"><Link className="nav-link"><span>SUPER FOODS MILLET</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li><Link to="/superfoodsmillet" className="nav-link">SUPER FOODS MILLET</Link></li>
              <li><Link to="/millettypes" className="nav-link">MILLETS AND THE TYPES</Link></li>
              <li><Link to="#" className="nav-link">YOUR HEALTH</Link></li>
              <li><Link to="#" className="nav-link">FAQS</Link></li>
            </ul>
          </li>
          <li className="dropdown"><Link className="nav-link"><span>OFFERINGS</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li><Link to="offerings-main" className="nav-link">OFFERINGS</Link></li>
              <li><Link to="porridges" className="nav-link">PORRIDGES</Link></li>
              <li><Link to="soups" className="nav-link">SOUPS</Link></li>
              <li><Link to="#" className="nav-link">COMBOS</Link></li>
            </ul>
          </li>
                {/* <li>
                  <Link to="/offerings">OFFERINGS</Link>
                </li> */}
           
                <li>
                  <Link to="/blogspage" className="nav-link">BLOGS</Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-link">CONTACT US</Link>
                </li>           
              </ul>
              
            </nav>
            </div>
      

            <div className="hamburger-menu">
              <a onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;


// Header.js
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import logo from '../../assets/img/logo-tjp.png';
// import "./header.css";
// import "../../assets/css/main.css";


// const Header = () => {
//   const [showMobileMenu, setShowMobileMenu] = useState(false);

//   const toggleMobileMenu = () => {
//     setShowMobileMenu(!showMobileMenu);
//   };

//   return (
//     <div data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="0"  className={`header ${showMobileMenu ? "mobile-menu-active" : ""}`}>
//       <div className="container">
//         <div className="logo">
//           <Link to="/">
//             <img src={logo} alt="logo is loading" />
//           </Link>
//         </div>

//         <nav className="nav navbar">
//           <ul className={`nav-list ${showMobileMenu ? "mobile-list" : ""}`}>
           
//             <li>
//                   <Link to="/" className="nav-link">HOME</Link>
//                 </li>
//                 <li>
//                   <Link to="/about" className="nav-link">ABOUT</Link>
//                 </li>
//                 <li>
//                   <Link to="/whyporridge" className="nav-link">WHY PORRIDGE</Link>
//                 </li>
//                 <li>
//                   <Link to="/whysoups" className="nav-link">WHY SOUPS</Link>
//                 </li>
            
//                 <li className="dropdown"><Link to="/superfoodsmillet" className="nav-link"><span>SUPER FOODS MILLET</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
//             <ul>
//               <li><Link to="/superfoodsmillet" className="nav-link">SUPER FOODS MILLET</Link></li>
//               <li><Link to="/millettypes" className="nav-link">MILLETS AND THE TYPES</Link></li>
//               <li><Link to="#" className="nav-link">YOUR HEALTH</Link></li>
//               <li><Link to="#" className="nav-link">FAQS</Link></li>
//             </ul>
//           </li>
//           <li className="dropdown"><Link to="offerings-main" className="nav-link"><span>OFFERINGS</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
//             <ul>
//               <li><Link to="offerings-main" className="nav-link">OFFERINGS</Link></li>
//               <li><Link to="porridges" className="nav-link">PORRIDGES</Link></li>
//               <li><Link to="soups" className="nav-link">SOUPS</Link></li>
//               <li><Link to="#" className="nav-link">COMBOS</Link></li>
//             </ul>
//           </li>
//                 {/* <li>
//                   <Link to="/offerings">OFFERINGS</Link>
//                 </li> */}
           
//                 <li>
//                   <Link to="/blogspage" className="nav-link">BLOGS</Link>
//                 </li>
//                 <li>
//                   <Link to="/contact" className="nav-link">CONTACT US</Link>
//                 </li>  
//           </ul>
//         </nav>

//         <div className="hamburger-menu" onClick={toggleMobileMenu}>
//           <GiHamburgerMenu />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../../assets/css/main.css";
// import { GiHamburgerMenu } from "react-icons/gi";
// import "./header.css";
// import logo from '../../assets/img/logo-tjp.png'
// const Header = () => {
//   const [showMediaIcons, setShowMediaIcons] = useState(false);

//   return (
//     <>
//       <div
//       className={
//         showMediaIcons ? "mobile-nav-active" : ""
//       }>
//         <header
//           id="header"
//           className="header d-flex relative-top align-items-center"
//         >
          
//           <div className="container d-flex align-items-center justify-content-center">
//            <div>
//             <Link
//               to="/"
//               className="logo d-flex align-items-center"
//             >
             
           
//               <img src={logo}  alt="logo is loading"/>
//             </Link>
//             </div>
//             <div>
//             <nav id="navbar" className={
//         showMediaIcons ? "navbar mobile-nav-active" : "navbar"
//       }>
//               <ul>
//                 <li>
//                   <Link to="/" className="nav-link">HOME</Link>
//                 </li>
//                 <li>
//                   <Link to="/about" className="nav-link">ABOUT</Link>
//                 </li>
//                 <li>
//                   <Link to="/whyporridge" className="nav-link">WHY PORRIDGE</Link>
//                 </li>
//                 <li>
//                   <Link to="/whysoups" className="nav-link">WHY SOUPS</Link>
//                 </li>
            
//                 <li className="dropdown"><Link to="/superfoodsmillet" className="nav-link"><span>SUPER FOODS MILLET</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
//             <ul>
//               <li><Link to="/superfoodsmillet" className="nav-link">SUPER FOODS MILLET</Link></li>
//               <li><Link to="/millettypes" className="nav-link">MILLETS AND THE TYPES</Link></li>
//               <li><Link to="#" className="nav-link">YOUR HEALTH</Link></li>
//               <li><Link to="#" className="nav-link">FAQS</Link></li>
//             </ul>
//           </li>
//           <li className="dropdown"><Link to="offerings-main" className="nav-link"><span>OFFERINGS</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
//             <ul>
//               <li><Link to="offerings-main" className="nav-link">OFFERINGS</Link></li>
//               <li><Link to="porridges" className="nav-link">PORRIDGES</Link></li>
//               <li><Link to="soups" className="nav-link">SOUPS</Link></li>
//               <li><Link to="#" className="nav-link">COMBOS</Link></li>
//             </ul>
//           </li>
//                 {/* <li>
//                   <Link to="/offerings">OFFERINGS</Link>
//                 </li> */}
           
//                 <li>
//                   <Link to="/blogspage" className="nav-link">BLOGS</Link>
//                 </li>
//                 <li>
//                   <Link to="/contact" className="nav-link">CONTACT US</Link>
//                 </li>           
//               </ul>
              
//             </nav>
//             </div>
      

//             <div className="hamburger-menu">
//               <a onClick={() => setShowMediaIcons(!showMediaIcons)}>
//                 <GiHamburgerMenu />
//               </a>
//             </div>
//           </div>
//         </header>
//       </div>
//     </>
//   );
// };

// export default Header;