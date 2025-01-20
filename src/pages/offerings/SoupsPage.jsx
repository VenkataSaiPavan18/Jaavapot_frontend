import React, { useEffect } from "react";
import img1 from "../../assets/img/menu/ginger-soup.png";
import img2 from "../../assets/img/menu/spinach-soup.png";
import img3 from "../../assets/img/menu/carrot-ginger-soup.png";

import AOS from "aos";

function SoupsPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="menu" className="menu">
      <div className="container menu-bg" data-aos="fade-up">
        <div className="tab-content" data-aos="fade-up" data-aos-delay="300">
          <div className="tab-header text-center">
            {/* <p>Offerings</p> */}
            <h5>Our In-house Cook Menu!</h5>
            <h3>Healthy Soups</h3>
          </div>

          <div className="row gy-5">
            <div className="col-lg-4 menu-item">
              <a href={img1} className="glightbox">
                <img src={img1} className="menu-img img-fluid" alt="" style={{objectFit:"contain",height:"200px",width:"500px"}} />
              </a>
              <h4>Ginger Garlic Soup</h4>
              <p className="ingredients" style={{minHeight:"1rem",maxHeight:"9rem",overflow:"auto"}}>
                Do you know that garlic is good for your heart and ginger has
                numerous health benefits? Then why not order this soup to enjoy
                taste and gain health at the same time.
              </p>
              {/* <p className="price">$5.95</p> */}
            </div>

            <div className="col-lg-4 menu-item">
              <a href={img2} className="glightbox">
                <img src={img2} className="menu-img img-fluid" alt="" style={{objectFit:"contain",height:"200px",width:"300px"}}/>
              </a>
              <h4>Spinach Soup</h4>
              <p className="ingredients" style={{minHeight:"1rem",maxHeight:"9rem",overflow:"auto"}}>
                Every one of us know that spinach is a good source of vitamin
                and, Vitamin C, vitamin k, iron, folate, and potassium. But how
                often you prepare curries using this wonderful leaf? skip your
                junk during evenings and replace it with this powerful sou
              </p>
              {/* <p className="price">$14.95</p> */}
            </div>

            <div className="col-lg-4 menu-item">
              <a href={img3} className="glightbox">
                <img src={img3} className="menu-img img-fluid" alt="" style={{objectFit:"contain",height:"200px",width:"500px"}}/>
              </a>
              <h4>Carrot Ginger Soup</h4>
              <p className="ingredients" style={{minHeight:"1rem",maxHeight:"9rem",overflow:"auto"}}>
                A vitamin rich soup made with fresh carrots and grated ginger
                thickened with super healthy jowar flour.
              </p>
              {/* <p className="price">$8.95</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SoupsPage;
