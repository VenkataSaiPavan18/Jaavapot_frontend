import React from 'react'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import HomeContent from './homecontent/HomeContent';

// import './styles.css'; // Your custom CSS file

function HomePage() {
  return (
    <div className="container-fluid">
      <HomeContent/>
    <Header/>
  

  </div>
  )
}

export default HomePage
