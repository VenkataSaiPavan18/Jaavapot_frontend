import React,{useEffect} from "react";
import img1 from '../../assets/img/menu/panakam-sharbat.png';
import img2 from '../../assets/img/menu/spinach-soup.png';
import img3 from '../../assets/img/menu/carrot-ginger-soup.png';
import img4 from '../../assets/img/menu/kerala-sharbath.png';
import img5 from '../../assets/img/menu/ginger-soup.png';
import img6 from '../../assets/img/menu/gold-milk.png';
import img7 from '../../assets/img/menu/carrot-milk.png';
import img8 from '../../assets/img/menu/sago-porridge.png';
import img9 from '../../assets/img/menu/finger-miller-ragi-malt.png';
import img10 from '../../assets/img/menu/finger millet ambali.png';
import img11 from '../../assets/img/menu/jawar-porridge.png';
import img12 from '../../assets/img/menu/oats-porridge.png';

import AOS from 'aos';
import Details from "./Details";

function OfferingsPage() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div>
        <section id="menu" className="menu">
          <div className="container menu-bg" data-aos="fade-up">
            <div className="section-header menu-bg">
              {/* <h2>Our Menu</h2> */}
              <h2>Our In-house Cook Menu!</h2>
              <p>
                Check Our <span>Offerings</span>
              </p>
            </div>

            <ul
              className="nav nav-tabs d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#menu-starters"
                >
                  <h4>Regional Beverages</h4>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#menu-breakfast"
                >
                  <h4>Healthy Soups</h4>
                </a>
              </li>
              l
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#menu-lunch"
                >
                <h4>Immunity Boosters</h4>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#menu-dinner"
                  >
                  <h4>Healthy Porridges</h4>
                </a>
              </li>
            </ul>

            <div
              className="tab-content"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="tab-pane fade active show" id="menu-starters">
                <div className="tab-header text-center">
                  {/* <p>Offerings</p> */}
                  <h3>Regional Beverages</h3>
                </div>

                <div className="row gy-5">
                  <div className="col-lg-6 menu-item">
                    <a
                      href={img1}
                      className="glightbox"
                    >
                      <img
                        src={img1}
                        className="menu-img img-fluid"
                        alt=""
                       
                        style={{objectFit:"contain",height:"400px",width:"400px"}}
                      />
                    </a>
                    <h4>Andhra Paanakam</h4>
                    <p className="ingredients" >
                    A cooling beverage made with jaggery, ginger and cardamom. Jaggery is a rich source of minerals like iron and potassium while the antioxidants in the ginger make this a healthy beverage round the year.
                    </p>
                    {/* <p className="price">$5.95</p> */}
                  </div>

                  <div className="col-lg-6 menu-item">
                    <a
                      href={img4}
                      className="glightbox"
                    >
                      <img
                        src={img4}
                        className="menu-img img-fluid"
                        alt=""
                        style={{objectFit:"contain",height:"400px",width:"400px"}}
                      />
                    </a>
                    <h4>Kerala Special Kulukki Sharbat</h4>
                    <p className="ingredients">
                    A sweet and spicy shaken lemonade which acts as great coolant, helpful especially during hot summers.
                    </p>
                    {/* <p className="price">$14.95</p> */}
                  </div>
                </div>
              </div>
              {/* <!-- End Starter Menu Content --> */}

              <div className="tab-pane fade" id="menu-breakfast">
                <div className="tab-header text-center">
                  {/* <p>Offerings</p> */}
                  <h3>Healthy Soups</h3>
                </div>

                <div className="row gy-5">
                  <div className="col-lg-4 menu-item">
                    <a
                      href={img5}
                      className="glightbox"
                    >
                      <img
                        src={img5}
                        className="menu-img img-fluid"
                        alt=""
                        style={{objectFit:"contain",height:"200px",width:"500px"}}
                      />
                    </a>
                    <h4>Ginger Garlic Soup</h4>
                    <p className="ingredients" style={{minHeight:"1rem",maxHeight:"6rem",overflow:"auto"}}>
                    Do you know that garlic is good for your heart and ginger has numerous health benefits? Then why not order this soup to enjoy taste and gain health at the same time. 
                    </p>
                    {/* <p className="price">$5.95</p> */}
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href={img2}
                      className="glightbox"
                    >
                      <img
                        src={img2}
                        className="menu-img img-fluid"
                        alt=""
                        style={{objectFit:"contain",height:"200px",width:"300px"}}
                      />
                    </a>
                    <h4>Spinach Soup</h4>
                    <p className="ingredients" style={{minHeight:"1rem",maxHeight:"6rem",overflow:"auto"}}>
                    Every one of us know that spinach is a good source of vitamin and, Vitamin C, vitamin k, iron, folate, and potassium. But how often you prepare curries using this wonderful leaf? skip your junk during evenings and replace it with this powerful sou
                    </p>
                    {/* <p className="price">$14.95</p> */}
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href={img3}
                      className="glightbox"
                    >
                      <img
                        src={img3}
                        className="menu-img img-fluid"
                        alt=""
                        style={{objectFit:"contain",height:"200px",width:"500px"}}
                      />
                    </a>
                    <h4>Carrot Ginger Soup</h4>
                    <p className="ingredients" style={{minHeight:"1rem",maxHeight:"6rem",overflow:"auto"}}>
                    A vitamin rich soup made with fresh carrots and grated ginger thickened with super healthy jowar flour.
                    </p>
                    {/* <p className="price">$8.95</p> */}
                  </div>

                

                  

                  
                </div>
              </div>

              <div className="tab-pane fade" id="menu-lunch">
                <div className="tab-header text-center">
                  {/* <p>Offerings</p> */}
                  <h3>Immunity Boosters</h3>
                </div>

                <div className="row gy-5">
                  <div className="col-lg-6 menu-item">
                    <a
                      href={img6}
                      className="glightbox"
                    >
                      <img
                        src={img6}
                        style={{objectFit:"contain",height:"300px",width:"400px"}}
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Golden-Milk</h4>
                    <p className="ingredients">
                    Desi milk, medicinal turmeric and organic pepper. This perfect combo soothes your throat in minutes.
                    </p>
                    {/* <p className="price">$5.95</p> */}
                  </div>

                  <div className="col-lg-6 menu-item">
                    <a
                      href={img7}
                      className="glightbox"
                    >
                      <img
                        src={img7}
                        className="menu-img img-fluid"
                        style={{objectFit:"contain",height:"300px",width:"400px",marginLeft:"4.5rem"}}
                        alt=""
                      />
                    </a>
                    <h4>Carrot Milk</h4>
                    <p className="ingredients">
                    Hate eating carrots? try our beverage made with Desi milk and fresh carrots. Even kids like this hot drink.
                    </p>
                    {/* <p className="price">$14.95</p> */}
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="menu-dinner">
                <div className="tab-header text-center">
                  {/* <p>Offerings</p> */}
                  <h3>Healthy Porridges</h3>
                </div>

                <div className="row gy-5">
                  <div className="col-lg-4 menu-item">
                    <a
                      href={img8}
                      className="glightbox"
                    >
                      <img
                        src={img8}
                        className="menu-img img-fluid"
                        alt=""
                        style={{objectFit:"contain",height:"200px",width:"500px"}}
                      />
                    </a>
                    <h4>Saggubiyyam Jaava</h4>
                    <p className="ingredients" style={{minHeight:"1rem",maxHeight:"7.5rem",overflow:"auto"}}>
                    This antioxidant rich porridge is naturally gluten-free and helps to improve digestion, strengthens muscles and uplifts heart functions. How many of you use sago in your daily life? Obviously very less. Start drinking this delicious porridge regularly to enjoy all its health benefits.
                    </p>
                    {/* <p className="price">$5.95</p> */}
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href={img9}
                      className="glightbox"
                    >
                      <img
                        src={img9}
                        className="menu-img img-fluid"
                        alt=""
                        style={{objectFit:"contain",height:"200px",width:"500px"}}
                      />
                    </a>
                    <h4>Ragi Malt</h4>
                    <p className="ingredients" style={{minHeight:"1rem",maxHeight:"7.5rem",overflow:"auto"}}>
                    An exotic beverage made with organic ragi flour, mixed with little amount of milk and sweetened with desi jaggery served with a final touch of cardamom powder. ragi is ranked as millet #1 as it has numerous health benefits viz, has loads of calcium, prevents skin from ageing, helps in weight loss, prevents colon cancer and also good for your hair.
                    </p>
                    {/* <p className="price">$14.95</p> */}
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href={img10}
                      className="glightbox"
                    >
                      <img
                        src={img10}
                        className="menu-img img-fluid"
                        alt=""
                        style={{objectFit:"contain",height:"200px",width:"500px"}}
                      />
                    </a>
                    <h4>Ragi Ambali</h4>
                    <p className="ingredients" style={{minHeight:"1rem",maxHeight:"7.5rem",overflow:"auto"}}>
                    A super healthy porridge which has its roots from chennai, made with organic ragi flour, fermented rice and spiced buttermilk. this drink is known to work as a general refresher and hydrates when tired. Also believed to help control diabetes.
                    </p>
                    {/* <p className="price">$8.95</p> */}
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href={img11}
                      className="glightbox"
                    >
                      <img
                        src={img11}
                        className="menu-img img-fluid"
                        alt=""
                        style={{objectFit:"contain",height:"200px",width:"500px"}}
                      />
                    </a>
                    <h4>Ragi Jaava</h4>
                    <p className="ingredients" style={{minHeight:"1rem",maxHeight:"7.5rem",overflow:"auto"}}>
                    A very popular summer beverage made from healthy organic ragi flour and butter milk.
                    </p>
                    {/* <p className="price">$12.95</p> */}
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href={img12}
                      className="glightbox"
                    >
                      <img
                        src={img12}
                        className="menu-img img-fluid"
                        alt=""
                        style={{objectFit:"contain",height:"200px",width:"500px"}}
                      />
                    </a>
                    <h4> Oats Porridge Salted</h4>
                    <p className="ingredients" style={{minHeight:"1rem",maxHeight:"7.5rem",overflow:"auto"}}>
                    A thick beverage made from parboiled oats and butter milk. A refreshing drink for summer.
                    </p>
                    {/* <p className="price">$12.95</p> */}
                  </div>

               
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
     
    </div>
  );
}

export default OfferingsPage;
