// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import './navbar.css'
// import Badge from "react-bootstrap/Badge";
// import logo from '../../assets/img/logo-tjp.png'
// import { useCart } from '../../store/ContextReducer';
// import { useNavigate } from 'react-router-dom'


// const Navbar = () => {
//   let navigate = useNavigate()
//   const data = useCart();
//   const [cartView, setCarView] = useState(false);
//     const [showMediaIcons, setShowMediaIcons] = useState(false);
//     const [offeringsDropdown, setOfferingsDropdown] = useState(false);
//     const [dropdownActive, setDropdownActive] = useState(false);

//     const closeDropdown = () => {
//         setShowMediaIcons(!showMediaIcons);
//       };
    
//       console.log(localStorage.getItem("token"));
//     const handleDropdownClick = () => {
//         setDropdownActive((prev) => !prev);
//       };
    
//       const handleLogout = () => {
//         console.log("test01");
//         localStorage.removeItem("token");
//         navigate("/login");
//       };

//     return (
//       <div className="new-navbar-container">
//         <div className="new-logo">
//           <Link  to="/">
//           <img src={logo} alt="Logo" />
//           </Link>
//         </div>
  
//         <nav id="new-navbar" className={showMediaIcons ? 'new-navbar active' : 'new-navbar'}>
//           <ul>
//             <li>
//               <Link to="/" className="new-nav-link" onClick={closeDropdown} >HOME</Link>
//             </li>
//             <li>
//               <Link to="/about" className="new-nav-link" onClick={closeDropdown} >ABOUT</Link>
//             </li>
//             <li>
//               <Link to="/OrderOnline" className="new-nav-link" onClick={closeDropdown} >ORDER ONLINE</Link>
//             </li>
//             {/* <li>
//               <Link to="/whyporridge" className="new-nav-link" onClick={closeDropdown} >WHY PORRIDGE</Link>
//             </li> */}
//             {/* <li>
//               <Link to="/whysoups" className="new-nav-link" onClick={closeDropdown} >WHY SOUPS</Link>
//             </li> */}

//             <li className="new-dropdown" onClick={handleDropdownClick} >
//               <Link to="/blogspage" className="new-nav-link">
//                 <span>BLOGS &nbsp;</span> <i className="bi bi-chevron-down"></i>
//               </Link>
//               <ul className={dropdownActive ? 'active' : ''}>
//                 <li><Link to="/blogspage" className="new-nav-link" onClick={closeDropdown} >BLOGS</Link></li>
                
//                 <li><Link to="/whyporridge" className="new-nav-link" onClick={closeDropdown} >WHY PORRIDGE</Link></li>
//                 <li><Link to="/whysoups" className="new-nav-link" onClick={closeDropdown} >WHY SOUPS</Link></li>
//                 {/* <li><Link to="#" className="new-nav-link" onClick={closeDropdown} >FAQS</Link></li> */}
//               </ul>
//             </li>

//             <li className="new-dropdown" onClick={handleDropdownClick} >
//               <Link to="/superfoodsmillet" className="new-nav-link">
//                 <span>SUPER FOODS MILLET &nbsp;</span> <i className="bi bi-chevron-down"></i>
//               </Link>
//               <ul className={dropdownActive ? 'active' : ''}>
//                 <li><Link to="/superfoodsmillet" className="new-nav-link" onClick={closeDropdown} >SUPER FOODS MILLET</Link></li>
//                 <li><Link to="/millettypes" className="new-nav-link" onClick={closeDropdown} >MILLETS AND THE TYPES </Link></li>
//                 <li><Link to="#" className="new-nav-link" onClick={closeDropdown} >YOUR HEALTH</Link></li>
//                 <li><Link to="#" className="new-nav-link" onClick={closeDropdown} >FAQS</Link></li>
//               </ul>
//             </li>
//             {/* <li className="new-dropdown" onClick={handleDropdownClick}>
//               <Link to="offerings-main" className="new-nav-link">
//                 <span>OFFERING  &nbsp; </span> <i className="bi bi-chevron-down"></i>
//               </Link>
//               <ul className={dropdownActive ? 'active' : ''}>
//                 <li><Link to="offerings-main" className="new-nav-link" onClick={closeDropdown} >OFFERINGS</Link></li>
//                 <li><Link to="porridges" className="new-nav-link" onClick={closeDropdown} >PORRIDGES</Link></li>
//                 <li><Link to="soups" className="new-nav-link" onClick={closeDropdown} >SOUPS</Link></li>
//                 <li><Link to="#" className="new-nav-link" onClick={closeDropdown} >COMBOS</Link></li>
//               </ul>
//             </li> */}
//             {/* <li>
//               <Link to="/blogspage" className="new-nav-link" onClick={closeDropdown} >BLOGS</Link>
//             </li> */}
//             <li>
//               <Link to="/contact" className="new-nav-link" onClick={closeDropdown} >CONTACT US</Link>
//             </li>
//             { !localStorage.getItem("token") ? (
//                 <div className="d-flex">
//             <li>
//             <Link className="new-nav-link" to="/signup">
//             {/* <Link className="btn bg-light text-success mx-3" to="/signup"> */}
//                     SIGN UP
//                   </Link>
//             </li>
//             <li>
//             <Link className="new-nav-link" to="/Login">
//             {/* <Link className="btn bg-light text-success mx-1" to="/Login"> */}
//                     LOGIN
//                   </Link>
//             </li>
//             </div>
//                  ) : (
//                   <div className="d-flex">
//                      <div className="d-flex">
//                       <li>
//                   {/* <div
//                     className="new-nav-link"
//                     // className="btn bg-white text-success mx-2"
//                     // onClick={() => {
//                     //   setCarView(true);
//                     // }}
//                   > */}
//                      <Link to="/Cart" className="new-nav-link" onClick={closeDropdown} >CART {"   "}
//                      <Badge pill bg="danger">
//                       {data.length}
//                     </Badge>
//                      </Link>
//                     {/* My Cart {"   "} */}
//                     {/* <Badge pill bg="danger">
//                       {data.length}
//                     </Badge> */}
//                   {/* </div> */}
//                   </li>
//                   </div>
//                   <li>
//                   <div
//                     className="new-nav-link "
//                     // className="btn bg-white text-danger mx-2"
//                     onClick={handleLogout}
//                   >
//                     LOGOUT
//                   </div>
//                   </li>
//                   <div>
//                     {" "}
//                   <li>
//                     <Link
//                       className="new-nav-link "
//                       aria-current="page"
//                       to="/orderhistory"
//                     >
//                       MYORDERS
//                     </Link>
//                   </li>
//                   </div>
//                   </div>
//                   )}
//           </ul>
//         </nav>
  
//         <div className="new-hamburger-menu">
//           <a onClick={() => setShowMediaIcons(!showMediaIcons)}>
//             <GiHamburgerMenu className="hamburger-icon"/>
//           </a>
//         </div>
//       </div>
//     );
//   };
  
//   export default Navbar;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import './navbar.css'
import Badge from "react-bootstrap/Badge";
import logo from '../../assets/img/logo-tjp.png'
import { useCart } from '../../store/ContextReducer';
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  let navigate = useNavigate()
  const data = useCart();
  const [cartView, setCarView] = useState(false);
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [offeringsDropdown, setOfferingsDropdown] = useState(false);
    const [dropdownActive, setDropdownActive] = useState(false);

    const closeDropdown = () => {
        setShowMediaIcons(!showMediaIcons);
      };
    
      console.log(localStorage.getItem("token"));
    const handleDropdownClick = () => {
        setDropdownActive((prev) => !prev);
      };
    
      const handleLogout = () => {
        console.log("test01");
        localStorage.removeItem("token");
        navigate("/login");
      };

    return (
      <div className="new-navbar-container">
        <div className="new-logo">
          <Link  to="/">
          <img src={logo} alt="Logo" />
          </Link>
        </div>
  
        <nav id="new-navbar" className={showMediaIcons ? 'new-navbar active' : 'new-navbar'}>
          <ul>
            <li>
              <Link to="/" className="new-nav-link"  onClick={() => {window.scrollTo(0, 0);closeDropdown();}}>HOME</Link>
            </li>
            <li>
              <Link to="/about" className="new-nav-link" onClick={() => {window.scrollTo(0, 0);closeDropdown();}} >ABOUT</Link>
            </li>
            <li>
              <Link to="/OrderOnline" className="new-nav-link" onClick={() => {window.scrollTo(0, 0);closeDropdown();}} >ORDER ONLINE</Link>
            </li>
            {/* <li>
              <Link to="/whyporridge" className="new-nav-link" onClick={closeDropdown} >WHY PORRIDGE</Link>
            </li> */}
            {/* <li>
              <Link to="/whysoups" className="new-nav-link" onClick={closeDropdown} >WHY SOUPS</Link>
            </li> */}

            <li className="new-dropdown" onClick={handleDropdownClick} >
              <Link to="/blogspage" className="new-nav-link"  onClick={() => window.scrollTo(0, 0)}>
                <span>BLOGS &nbsp;</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul className={dropdownActive ? 'active' : ''}>
                <li><Link to="/blogspage" className="new-nav-link" onClick={() => {window.scrollTo(0, 0);closeDropdown();}} >BLOGS</Link></li>
                
                <li><Link to="/whyporridge" className="new-nav-link" onClick={() => {window.scrollTo(0, 0);closeDropdown();}} >WHY PORRIDGE</Link></li>
                <li><Link to="/whysoups" className="new-nav-link" onClick={() => {window.scrollTo(0, 0);closeDropdown();}} >WHY SOUPS</Link></li>
                {/* <li><Link to="#" className="new-nav-link" onClick={closeDropdown} >FAQS</Link></li> */}
              </ul>
            </li>

            <li className="new-dropdown" onClick={handleDropdownClick} >
              <Link to="/superfoodsmillet" className="new-nav-link"  onClick={() => window.scrollTo(0, 0)}>
                <span>SUPER FOODS MILLET &nbsp;</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul className={dropdownActive ? 'active' : ''}>
                <li><Link to="/superfoodsmillet" className="new-nav-link" onClick={() => {window.scrollTo(0, 0);closeDropdown();}} >SUPER FOODS MILLET</Link></li>
                <li><Link to="/millettypes" className="new-nav-link" onClick={() => {window.scrollTo(0, 0);closeDropdown();}}>MILLETS AND THE TYPES </Link></li>
                <li><Link to="#" className="new-nav-link" onClick={() => {window.scrollTo(0, 0);closeDropdown();}} >YOUR HEALTH</Link></li>
                <li><Link to="#" className="new-nav-link" onClick={() => {window.scrollTo(0, 0);closeDropdown();}} >FAQS</Link></li>
              </ul>
            </li>
            {/* <li className="new-dropdown" onClick={handleDropdownClick}>
              <Link to="offerings-main" className="new-nav-link">
                <span>OFFERING  &nbsp; </span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul className={dropdownActive ? 'active' : ''}>
                <li><Link to="offerings-main" className="new-nav-link" onClick={closeDropdown} >OFFERINGS</Link></li>
                <li><Link to="porridges" className="new-nav-link" onClick={closeDropdown} >PORRIDGES</Link></li>
                <li><Link to="soups" className="new-nav-link" onClick={closeDropdown} >SOUPS</Link></li>
                <li><Link to="#" className="new-nav-link" onClick={closeDropdown} >COMBOS</Link></li>
              </ul>
            </li> */}
            {/* <li>
              <Link to="/blogspage" className="new-nav-link" onClick={closeDropdown} >BLOGS</Link>
            </li> */}
            <li>
              <Link to="/contact" className="new-nav-link" onClick={() => {window.scrollTo(0, 0);closeDropdown();}} >CONTACT US</Link>
            </li>
            { !localStorage.getItem("token") ? (
                <div className="d-flex">
            <li>
            <Link className="new-nav-link" to="/signup" onClick={() => window.scrollTo(0, 0)}>
            {/* <Link className="btn bg-light text-success mx-3" to="/signup"> */}
                    SIGN UP
                  </Link>
            </li>
            <li>
            <Link className="new-nav-link" to="/Login" onClick={() => window.scrollTo(0, 0)}>
           
                    LOGIN
                  </Link>
            </li>
            </div>
                 ) : (
                  <div className="d-flex">
                     <div className="d-flex">
                      <li>
                  {/* <div
                    className="new-nav-link"
                    // className="btn bg-white text-success mx-2"
                    // onClick={() => {
                    //   setCarView(true);
                    // }}
                  > */}
                     <Link to="/Cart" className="new-nav-link" onClick={() => {window.scrollTo(0, 0);closeDropdown();}}>CART {"   "}
                     <Badge pill bg="danger">
                      {data.length}
                    </Badge>
                     </Link>
                    {/* My Cart {"   "} */}
                    {/* <Badge pill bg="danger">
                      {data.length}
                    </Badge> */}
                  {/* </div> */}
                  </li>
                  </div>
                  <li>
                  <div
                    className="new-nav-link "
                    // className="btn bg-white text-danger mx-2"
                    
                    onClick={() => {window.scrollTo(0, 0);handleLogout();}}
                  >
                    LOGOUT
                  </div>
                  </li>
                  <div>
                    {" "}
                  <li>
                    <Link
                      className="new-nav-link "
                      aria-current="page"
                      to="/orderhistory"
                    >
                      MYORDERS
                    </Link>
                  </li>
                  </div>
                  </div>
                  )}
          </ul>
        </nav>
  
        <div className="new-hamburger-menu">
          <a onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu className="hamburger-icon"/>
          </a>
        </div>
      </div>
    );
  };
  
  export default Navbar;