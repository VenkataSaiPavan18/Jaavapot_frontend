import React, { useEffect } from "react";
import img1 from '../../assets/img/menu/sago-porridge.png';
import img2 from '../../assets/img/menu/finger-miller-ragi-malt.png';
import img3 from '../../assets/img/menu/finger millet ambali.png';
import img4 from '../../assets/img/menu/jawar-porridge.png';
import img5 from '../../assets/img/menu/oats-porridge.png';
import AOS from "aos";

function PorridgesPage() {
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
            <h3>Healthy Porridges</h3>
          </div>

          <div className="row gy-5">
            <div className="col-lg-4 menu-item">
              <a href={img1} className="glightbox">
                <img src={img1} className="menu-img img-fluid" alt="" style={{objectFit:"contain",height:"200px",width:"500px"}} />
              </a>
              <h4>Saggubiyyam Jaava</h4>
              <p className="ingredients" style={{minHeight:"1rem",maxHeight:"7.5rem",overflow:"auto"}}>
                This antioxidant rich porridge is naturally gluten-free and
                helps to improve digestion, strengthens muscles and uplifts
                heart functions. How many of you use sago in your daily life?
                Obviously very less. Start drinking this delicious porridge
                regularly to enjoy all its health benefits.
              </p>
              {/* <p className="price">$5.95</p> */}
            </div>

            <div className="col-lg-4 menu-item">
              <a href={img2} className="glightbox">
                <img src={img2} className="menu-img img-fluid" alt="" style={{objectFit:"contain",height:"200px",width:"500px"}} />
              </a>
              <h4>Ragi Malt</h4>
              <p className="ingredients" style={{minHeight:"1rem",maxHeight:"7.5rem",overflow:"auto"}}>
                An exotic beverage made with organic ragi flour, mixed with
                little amount of milk and sweetened with desi jaggery served
                with a final touch of cardamom powder. ragi is ranked as millet
                #1 as it has numerous health benefits viz, has loads of calcium,
                prevents skin from ageing, helps in weight loss, prevents colon
                cancer and also good for your hair.
              </p>
              {/* <p className="price">$14.95</p> */}
            </div>

            <div className="col-lg-4 menu-item">
              <a href={img3} className="glightbox">
                <img src={img3} className="menu-img img-fluid" alt="" style={{objectFit:"contain",height:"200px",width:"500px"}} />
              </a>
              <h4>Ragi Ambali</h4>
              <p className="ingredients" style={{minHeight:"1rem",maxHeight:"7.5rem",overflow:"auto"}}>
                A super healthy porridge which has its roots from chennai, made
                with organic ragi flour, fermented rice and spiced buttermilk.
                this drink is known to work as a general refresher and hydrates
                when tired. Also believed to help control diabetes.
              </p>
              {/* <p className="price">$8.95</p> */}
            </div>

            <div className="col-lg-4 menu-item">
              <a href={img4} className="glightbox">
                <img src={img4} className="menu-img img-fluid" alt="" style={{objectFit:"contain",height:"200px",width:"500px"}} />
              </a>
              <h4>Ragi Jaava</h4>
              <p className="ingredients" style={{minHeight:"1rem",maxHeight:"7.5rem",overflow:"auto"}}>
                A very popular summer beverage made from healthy organic ragi
                flour and butter milk.
              </p>
              {/* <p className="price">$12.95</p> */}
            </div>

            <div className="col-lg-4 menu-item">
              <a href={img5} className="glightbox">
                <img src={img5} className="menu-img img-fluid" alt="" style={{objectFit:"contain",height:"200px",width:"500px"}}/>
              </a>
              <h4> Oats Porridge Salted</h4>
              <p className="ingredients" style={{minHeight:"1rem",maxHeight:"7.5rem",overflow:"auto"}}>
                A thick beverage made from parboiled oats and butter milk. A
                refreshing drink for summer.
              </p>
              {/* <p className="price">$12.95</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PorridgesPage;
