// import React from 'react';
// import homepageBlogData from '../../contants/blogsdata'; // Update the path accordingly
// import "./Whatsnew.css";
// import { Link } from 'react-router-dom';

// const Blogs = () => {
//   return (
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       <h1>Understanding Health Claims</h1>
//       <div style={{ display: 'flex',width:"", flexWrap: 'wrap', justifyContent: 'center',maxHeight:"19rem",overflow:"auto" }}>
//         {homepageBlogData.map((item) => (
       
//          <div key={item.id} style={{ boxShadow:"2px 2px 2px 2px black",borderRadius:"18px",margin: '10px', width: '250px' ,backgroundColor: "rgba(189, 152, 109,0.5)",padding:"10px" }}>
//             <img
//               src={item.image}
//               alt={item.name}
//               style={{ width: '200px', height: '200px',objectFit:"contain", borderRadius: '10px',margin:"0px" }}
//             />
//              <p style={{ margin:"0px" ,fontSize:"14px",fontWeight:"bold",color:"black",textDecoration:"none"}}>{item.name}</p>
            
//           </div>
         
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blogs;


// Import necessary libraries
import React, { useState } from 'react';
import Modal from 'react-modal';
import homepageBlogData from '../../contants/blogsdata'; // Update the path accordingly
import { Link } from 'react-router-dom';
import "./blogs.css";

// Modal component

const customStyles = {
  content: {
   
   
  },
};

// Modal component
const BlogModal = ({ isOpen, closeModal, selectedBlog }) => {
  if (!selectedBlog) {
    return null;
  }

  const { name, blogimage, blogimage2 } = selectedBlog;

  const screenWidth = window.innerWidth;
  const displayImage = screenWidth <= 480 ? blogimage2 : blogimage;

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <div className='modalbg' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img
          className="blogimge1"
          src={displayImage}
          alt={name}
          style={{ boxShadow: "2px 2px 2px 2px black", borderRadius: "10px", margin: "10px" }}
        />
      </div>
      <button onClick={closeModal} className='btn btn-secondary m-2'>Close </button>
    </Modal>
  );
};


// Main Blogs component
const Blogs = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [hoverStates, setHoverStates] = useState({});

  const handleMouseEnter = (itemId) => {
    setHoverStates((prevStates) => ({
      ...prevStates,
      [itemId]: true,
    }));
  };

  const handleMouseLeave = (itemId) => {
    setHoverStates((prevStates) => ({
      ...prevStates,
      [itemId]: false,
    }));
  };


  const openModal = (blog) => {
    setSelectedBlog(blog);
    console.log(blog)
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedBlog(null);
    setModalIsOpen(false);
  };

  return (
    <div id="health-claims" style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Understanding Health Claims</h1>
      <div style={{ display: 'flex', width: '', flexWrap: 'wrap', justifyContent: 'center', maxHeight: '19rem', overflow: 'auto' }}>
        {homepageBlogData.map((item) => (
          <div 
          className={`blog-item ${hoverStates[item.id] ? 'scaleOnHover' : ''}`}
          key={item.id}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={() => handleMouseLeave(item.id)}

          style={{ cursor:"pointer",boxShadow: '2px 2px 2px 2px black', borderRadius: '18px',
           margin: '10px', width: '250px', backgroundColor: 'rgba(189, 152, 109,0.5)', padding: '10px' }} 
          onClick={() => openModal(item)}>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: '180px', height: '180px', objectFit: 'cover', borderRadius: '10px', margin: '0px' }}
            />
            <p style={{ marginTop: '10px', fontSize: '14px', fontWeight: 'bold', color: 'black', textDecoration: 'none' }}>{item.name}</p>
          </div>
        ))}
      </div>
      <BlogModal isOpen={modalIsOpen} closeModal={closeModal} selectedBlog={selectedBlog} />
    </div>
  );
};

export default Blogs;

