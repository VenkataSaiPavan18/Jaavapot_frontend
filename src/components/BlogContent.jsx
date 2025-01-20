import React,{useEffect,useState} from 'react';
import AOS from 'aos';
import img1 from "../assets/img/menu/ginger-soup.png";
import img2 from "../assets/img/menu/spinach-soup.png";
import img3 from "../assets/img/menu/carrot-ginger-soup.png";
import sharbat1 from "../assets/img/menu/kerala-sharbath.png";
import sharbat2 from "../assets/img/menu/panakam-sharbat.png";
import millet from "../assets/img/homepage/millets-01.jpg";

export default function BlogContent() {
  

  const containerStyle = {
   
    marginTop: '2rem',
    marginBottom: '5rem',
    backgroundColor:'rgba(189, 152, 109,0.5)',
    // backgroundColor:'#F8F8F8',
    padding:'2rem',
    borderRadius:"20px",
    boxShadow:"2px 2px 2px 2px black",
    color:"black"
  };


    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='container'  style={containerStyle}>
      <section id="menu" className="menu">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h3>Welocome to Our Blogs</h3>
            {/* <p>
              Check Our <span>Yummy Menu</span>
            </p> */}
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
                style={{borderRadius:"20px",fontWeight:"bold",padding:"7px",border:"0px",boxShadow:"2px 2px 2px 2px black",margin:"5px"}}
              >
                <h4 >Healthy Soups</h4>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#menu-breakfast"
                style={{borderRadius:"20px",margin:"5px",fontWeight:"bold",padding:"7px",border:"0px",boxShadow:"2px 2px 2px 2px black"}}
              >
                <h4 >Healthy Millet Diet</h4>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#menu-lunch"
                style={{borderRadius:"20px",margin:"5px",fontWeight:"bold",padding:"7px",border:"0px",boxShadow:"2px 2px 2px 2px black"}}
              >
                <h4>Kerala's Kulukki Sharbat and Andhra's Paanakam</h4>
              </a>
            </li>
          </ul>

          <div className="tab-content" data-aos="fade-up" data-aos-delay="300">
            <div className="tab-pane fade active show" id="menu-starters">
              <div className="tab-header text-center">
                <h3 style={{color:'rgba(247, 91, 7)'}}>
                  Revamp Your Meal Routine with These 3 Quick and Healthy Soups
                </h3>
                <p style={{color:"black",fontWeight:"bold"}}>
                  Soups are a comforting and satisfying meal and a great way to
                  add more nutrients and vitamins to your diet. They are also
                  easy to prepare, making them a great option for busy
                  weeknights or meal prep.{" "}
                </p>
                <p  style={{color:"black",fontWeight:"bold"}}>
                  In this blog, we'll share three quick and easy healthy soup
                  recipes packed with flavor and nutrients. These recipes are
                  perfect for any day of the week and can be made in under 30
                  minutes.{" "}
                </p>
                <p  style={{color:"black",fontWeight:"bold"}}>
                  Whether you're a soup enthusiast or looking for new ways to
                  incorporate healthy ingredients into your diet, you will find
                  something delicious in this article. Let's dive in.
                </p>
                <div className="mt-5">
                  <h5 style={{color:'rgba(247, 91, 7)',fontWeight:"bold"}}>Sip on these 3 soul-warming soups for a healthy boost</h5>
                </div>
              </div>

              <div className="row gy-5">
                <div className="col-lg-4 menu-item" >
                  <div
                    className="card"
                    style={{  height: "54rem",overflow:"hidden" ,backgroundColor:"transparent",boxShadow:"0px 4px 6px 2px black"}}
                  >
                    <img
                      src={img1}
                      className="card-img-top"
                      style={{ width: "80%", height: "15rem",alignSelf:"center" }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h4>Ginger-garlic soup</h4>
                      <h5>Benefits</h5>
                      <p className="card-text">
                        Ginger and garlic are known for their immune-boosting
                        properties, making this soup perfect for when you're
                        under the weather.
                      </p>
                      <h5>Ingredients</h5>
                      <p className="card-text">
                        You will need olive oil, onion, garlic, ginger,
                        vegetable broth, salt, and pepper to make this soup.{" "}
                      </p>
                      <h5>Method</h5>
                      <p className="card-text" style={{height:"16rem",overflow:"auto"}}>
                        Start by heating the olive oil in a large pot over
                        medium heat. <br />
                        Add the onion, garlic, ginger, and sauté until the onion
                        is soft and translucent, about 5 minutes.
                        <br /> Add the vegetable broth and bring it to a boil.
                        Reduce the heat and simmer for 10-15 minutes. <br />
                        Season with salt and pepper to taste.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 menu-item">
                  <div
                    className="card"
                    style={{  height: "54rem" ,backgroundColor:"transparent",boxShadow:"0px 4px 6px 2px black"}}
                  >
                    <img
                      src={img2}
                      className="card-img-top"
                      style={{ width: "80%", height: "15rem",alignSelf:"center" }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h4>Spinach soup</h4>
                      <h5>Benefits</h5>
                      <p className="card-text">
                        Spinach is a superfood packed with nutrients like iron,
                        vitamin C, and folate. This soup is not only healthy but
                        also delicious.
                      </p>
                      <h5>Ingredients</h5>
                      <p className="card-text">
                        You will need olive oil, onion, garlic, ginger,
                        vegetable broth, salt, and pepper to make this soup.{" "}
                      </p>
                      <h5>Method</h5>
                      <p className="card-text" style={{height:"16rem",overflow:"auto"}}>
                        Start by heating the olive oil in a large pot over
                        medium heat.
                        <br /> Add the onion, garlic, and sauté until the onion
                        is soft and translucent, about 5 minutes.
                        <br /> Add the spinach and sauté until wilted, about 2-3
                        minutes.
                        <br /> Add the vegetable broth and bring it to a boil.
                        <br /> Reduce the heat and simmer for 10-15 minutes.
                        Season with salt and pepper to taste.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 menu-item">
                  <div
                    className="card"
                    style={{  height: "54rem" ,backgroundColor:"transparent",boxShadow:"0px 4px 6px 2px black"}}
             
                  >
                    <img
                      src={img3}
                      className="card-img-top"
                      style={{ width: "80%", height: "15rem",alignSelf:"center" }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h4>Carrot-ginger soup</h4>
                      <h5>Benefits</h5>
                      <p className="card-text">
                        Carrots are packed with vitamin A, which is essential
                        for healthy vision. This soup is nutritious and has a
                        sweet and spicy flavor.
                      </p>
                      <h5>Ingredients</h5>
                      <p className="card-text">
                        You will need olive oil, onion, garlic, ginger,
                        vegetable broth, salt, and pepper to make this soup.{" "}
                      </p>
                      <h5>Method</h5>
                      <p className="card-text" style={{height:"16rem",overflow:"auto"}}>
                        Start by heating the olive oil in a large pot over
                        medium heat.
                        <br /> Add the onion, garlic, ginger, and sauté until
                        the onion is soft and translucent, about 5 minutes.
                        <br /> Add the carrots and sauté until slightly
                        softened, about 5-7 minutes.
                        <br /> Add the vegetable broth and bring it to a boil.
                        <br /> Reduce the heat and simmer for 10-15 minutes or
                        until the carrots are fully cooked.
                        <br /> Mix the soup till it becomes smooth using a
                        blender.
                        <br /> Adjust the seasoning with a pinch of salt and a
                        sprinkle of pepper to your preferred taste.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h4 style={{color:'rgba(247, 91, 7)',fontWeight:"bold",}}>Final words</h4>
                <p>
                  These three healthy soup recipes are a great way to add more
                  nutrients to your diet while enjoying a delicious and
                  satisfying meal. You can use millet broth instead of vegetable
                  broth to make them healthier.{" "}
                </p>
                <p style={{color:'rgba(247, 91, 7)',fontWeight:"bold",}}>
                  Try these recipes and let us know which is your favorite!{" "}
                </p>
              </div>
            </div>

            <div className="tab-pane fade" id="menu-breakfast">
              <div className="tab-header text-center">
                <h3 style={{color:'rgba(247, 91, 7)'}}>Healthy Millet Diet</h3>
              </div>

              <div className="row">
                <div className="col-lg-12 menu-item">
                  <div className="card" style={{backgroundColor:"transparent",border:"0px" }}>
                    <img
                      src={millet}
                      className="card-img-top"
                      style={{ width: "60%", height: "60%",borderRadius:"30rem",alignSelf:"center" }}
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5 text-center">
                  <h4 style={{color:'rgba(247, 91, 7)',fontWeight:"bolder",}}>
                    5 Reasons Why You Should Switch to a Healthy Millet Diet
                  </h4>
                </div>
                <ol style={{fontWeight:"bold"}}>
                  <li>
                    <p>
                      Are you tired of the same old boring diet that doesn't
                      seem to do much for your health? It might be time to
                      switch things up and try a millet diet, which is both
                      healthy and delicious.
                    </p>
                  </li>
                  <li>
                    <p>
                      Millets are small-seeded grasses that have been cultivated
                      as staple crops for thousands of years. The most important
                      types are pearl, finger, proso, and foxtail millet.{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      However, due to the industrialization of agriculture and
                      the introduction of modern processed foods, millet has
                      been largely replaced by other less nutritious grains.{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      In recent years, there has been a growing interest in
                      incorporating millet into our diets due to its numerous
                      health benefits.{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      Here, we'll discuss 5 reasons why you should consider
                      changing to a healthy millet diet. Keep reading.{" "}
                    </p>
                  </li>
                </ol>
              </div>
              <div>
                <div className="mt-5 text-center">
                  <h4 style={{color:'rgba(247, 91, 7)',fontWeight:"bolder",}}>
                    5 Millet benefits and why you should switch to foods
                    prepared with the superfood
                  </h4>
                </div>
                <ol >
                  <li>
                    <p>
                      <b>Nutritious and packed with fiber</b>
                      <br />
                      Millet is a great source of fiber and essential nutrients
                      like magnesium, phosphorus, and manganese. One cup of
                      cooked millet contains about 6 grams of protein, 2 grams
                      of fiber, and only 2 grams of fat. The fiber in millet
                      helps to regulate digestion, prevent constipation, and
                      reduce the risk of chronic diseases like heart disease,
                      diabetes, and cancer.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Gluten-free and easy to digest</b>
                      <br />
                      Millet is naturally gluten-free, making it a great option
                      for those with gluten intolerance or celiac disease. It is
                      also easy to digest, making it a great option for those
                      with digestive issues. Millet has a low glycemic index,
                      which means it doesn't cause a rapid spike in blood sugar
                      levels.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Gluten-free and easy to digest</b>
                      <br />
                      Millet is a versatile grain that can be used in various
                      dishes, including breakfast porridge, salads, soups, and
                      stews. It has a mild, nutty flavor that pairs well with a
                      variety of spices and herbs. You can also use millet flour
                      in baking to make gluten-free bread, pancakes, and
                      muffins.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Environmentally sustainable</b>
                      <br /> Millet is a drought-resistant crop that requires
                      less water than other grains like rice and wheat. It also
                      requires fewer pesticides and fertilizers, making it an
                      environmentally sustainable option. Switching to a millet
                      diet can reduce your environmental footprint and support
                      sustainable agriculture.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Environmentally sustainable</b>
                      <br /> Millet is an affordable grain that is widely
                      available in most grocery stores. It is often cheaper than
                      other grains like quinoa and brown rice, making it a
                      budget-friendly option for those on a tight budget. You
                      can also buy millet in bulk to save money and reduce
                      packaging waste.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="mt-5">
                <h4 style={{color:'rgba(247, 91, 7)',fontWeight:"bolder",}}>The wrap</h4>
                <p>
                  To summarize, a millet diet is a great way to enhance your
                  nutrition, diversify your meals, and promote a healthy and
                  sustainable lifestyle.
                </p>
                <p>
                  Incorporating millet into your diet can help you maintain a
                  healthy weight, regulate blood sugar levels, lower
                  cholesterol, and reduce the risk of heart disease and other
                  chronic illnesses.
                </p>
                <p style={{color:'rgba(247, 91, 7)',fontWeight:"bolder",}}>
                  So why not give it a try and enjoy the numerous benefits that
                  millet has to offer?
                </p>
              </div>
            </div>

            <div className="tab-pane fade" id="menu-lunch">
              <div className="tab-header text-center">
                <h3 style={{color:'rgba(247, 91, 7)'}}>
                  Discover the Health Benefits and Unique Flavors of Kerala's
                  Kulukki Sharbat and Andhra's Paanakam
                </h3>
                <div>
                <p style={{color:"black",fontWeight:"bold",letterSpacing:"0.2px"}}>
                  India has diverse cultures and cuisines, with each state
                  boasting unique flavors and traditional drinks. Every region
                  has a signature beverage representing its cultural identity,
                  from Punjab's lassi to Mumbai's masala chai.
                </p>
                <p style={{color:"black",fontWeight:"bold",letterSpacing:"0.2px",marginTop:"10px"}}>
                  Similarly, two delicious drinks, Kulukki Sharbat from Kerala
                  and Paanakam from Andhra Pradesh have recently been making
                  waves and garnering attention nationwide. In this blog, we
                  will explore the health benefits of these two beverages and
                  how to make them.
                </p>
                </div>
              </div>

              <div className="row gy-5">
                <div className="col-lg-6 mt-5 ">
                  <div
                    className="card"
                    style={{textAlign:"center",height: "56rem",backgroundColor:"transparent",border:"0px" ,marginRight:"15px"}}
                  >
                    <img
                      src={sharbat1}
                      className="card-img-top"
                      style={{  height: "16rem",width:"60%",alignSelf:"center" }}
                      alt="..."
                    />
                    <div className="card-body"  style={{maxHeight:"68rem",overflow:"auto"}}>
                      <h4>Kerala's kulukki sharbat</h4>
                      <p className="card-text">
                        Kulukki Sharbat is a popular street drink in Kerala,
                        also known as "shaken lemonade." It is a refreshing
                        drink made with lemon juice, honey, and other
                        ingredients.
                      </p>
                      <h5>Health benefits of kulukki sharbat</h5>
                      <p className="card-text">
                        <b>Boosts Immunity:</b> Lemon is a rich vitamin C
                        source, which helps strengthen the immune system and
                        protect against infections.
                      </p>
                      <p className="card-text">
                        <b>Promotes Digestion:</b> The combination of lemon and
                        honey in Kulukki sharbat helps to improve digestion and
                        relieve constipation.
                      </p>
                      <p className="card-text">
                        <b>Hydrating:</b> Kulukki sharbat is an excellent thirst
                        quencher that helps keep the body hydrated in hot
                        weather.
                      </p>
                      <h5>Ingredients</h5>
                      <p className="card-text">
                        Lemon juice, Honey, Sugar, Salt, Ice cubes, Water Mint
                        leaves
                      </p>
                      <h5>Method</h5>
                      <p className="card-text" style={{height:"6rem",overflow:"auto"}} >
                        Add lemon juice, honey, sugar, and salt in a glass.
                        <br />
                        Add ice cubes and top up with water.
                        <br />
                        Close the glass tightly with a lid and shake it well.
                        <br />
                        Garnish with mint leaves and serve.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mt-5 ">
                  <div
                    className="card"
                    style={{border:"0px",textAlign:"center",height: "56rem",backgroundColor:"transparent" ,marginRight:"15px"}}
                  >
                    <img
                      src={sharbat2}
                      className="card-img-top"
                      style={{  height: "16rem",width:"60%",alignSelf:"center" }}
                      alt="..."
                    />
                    <div className="card-body" style={{maxHeight:"68rem",overflow:"auto"}} >
                      <h4>Andhra's paanakam</h4>
                      <p className="card-text">
                        Paanakam is a traditional drink from Andhra Pradesh made
                        with jaggery, cardamom, and other spices. It is usually
                        served during festivals and special occasions.
                      </p>
                      <h5>Health benefits of Paanakam</h5>
                      <p className="card-text">
                        <b>Rich in Antioxidants: </b> Jaggery is a rich source
                        of antioxidants that help to protect against free
                        radical damage and prevent chronic diseases.
                      </p>
                      <p className="card-text">
                        <b>Promotes Digestion: </b> The combination of spices
                        used in Paanakam helps to improve digestion and relieve
                        stomach ailments.
                      </p>
                      <p className="card-text">
                        <b>Rehydrates the Body: </b> Paanakam is an excellent
                        electrolyte source and helps rehydrate the body during
                        hot weather.
                      </p>
                      <h5>Ingredients</h5>
                      <p className="card-text">
                        Jaggery, Water, Cardamom, Dry ginger powder, Edible
                        camphor
                      </p>
                      <h5>Method</h5>
                      <p className="card-text" style={{height:"6rem",overflow:"auto"}}>
                        In a bowl, dissolve jaggery in water and keep it aside.
                        <br />
                        Add cardamom, dry ginger powder, and edible camphor to
                        the jaggery water.
                        <br />
                        Stir well and strain the mixture.
                        <br />
                        Add more water if needed and serve chilled.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h4 style={{color:'rgba(247, 91, 7)',fontWeight:"bold"}}>Over to you</h4>
                <p>
                  Kulukki Sharbat and Paanakam are two super-cool beverages that
                  offer a range of health benefits as well. While Kulukki
                  Sharbat is a refreshing drink that helps to boost immunity and
                  promote digestion, Paanakam is a traditional drink rich in
                  antioxidants and electrolytes.
                </p>
                <p>
                  These drinks are easy to make, and the ingredients used are
                  readily available. Give them a try and enjoy the taste of
                  regional flavors while reaping their health benefits.
                </p>
                <p>
                  Are you looking to indulge in the goodness of regional
                  beverages without the hassle of preparing them yourself? Look
                  no further than Jaava Pot's range of health drinks.
                </p>
                <p>
                  Our drinks are made with only the freshest ingredients and are
                  packed with the same health benefits as traditional drinks.
                  You can order them online and experience the flavors and
                  benefits for yourself.
                </p>
                <p style={{color:'rgba(247, 91, 7)',fontWeight:"bold"}}>
                  With Jaava Pot, you can enjoy the best of both worlds -
                  convenience, and nutrition.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}