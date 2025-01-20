import React, { useState, useEffect,useRef } from "react";
import AOS from 'aos'
import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "./styles.css";

import {EffectCoverflow, Pagination, Autoplay} from "swiper";
import {Swiper as swa} from "swiper";
// import "swiper/css/swiper.min.css";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
// import "../assets/css/main.css";
import img1 from "../../assets/img/home/carousel/millet-congee-porridge-ready-serve (1).jpg";
import img2 from "../../assets/img/home/carousel/oatmeal-porridge-bowl-concrete-top-view (1).jpg";
import img3 from "../../assets/img/home/carousel/top-view-delicious-porridge-with-raspberries-light-background (1).jpg";
import img4 from "../../assets/img/home/carousel/image-01.jpg";
import img5 from "../../assets/img/home/carousel/image-02.jpg";
import img6 from "../../assets/img/home/carousel/image-03.jpg";
import img7 from "../../assets/img/home/carousel/image-04.jpg";
import img8 from "../../assets/img/home/carousel/image-05.jpg";

function SoupsScrolling() {

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    const swiper = new swa(".swiper-container", {
      slidesPerView: "3",
      spaceBetween: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });
  }, []);

  return (
    <div>
      <section id="gallery" className="gallery section-bg">
        <div className="container" data-aos="fade-up">
          

          <div className="gallery-slider swiper">
            <div className="swiper-wrapper align-items-center">

            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 2,
          },
        }}
      >
   <SwiperSlide>
              <div className="swiper-slide">
                <a
                  className="glightbox"
                  data-gallery="images-gallery"
                  href={img1}
                >
                  <img src={img1} className="img-fluid" alt=""  />
                </a>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="swiper-slide">
                <a
                  className="glightbox"
                  data-gallery="images-gallery"
                  href={img2}
                >
                  <img src={img2} className="img-fluid" alt="" />
                </a>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="swiper-slide">
                <a
                  className="glightbox"
                  data-gallery="images-gallery"
                  href={img3}
                >
                  <img src={img3} className="img-fluid" alt=""  />
                </a>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="swiper-slide">
                <a
                  className="glightbox"
                  data-gallery="images-gallery"
                  href={img4} 
                >
                  <img src={img4} className="img-fluid" alt="" />
                </a>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="swiper-slide">
                <a
                  className="glightbox"
                  data-gallery="images-gallery"
                  href={img5}
                >
                  <img src={img5} className="img-fluid" alt="" />
                </a>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="swiper-slide">
                <a
                  className="glightbox"
                  data-gallery="images-gallery"
                  href={img6}
                >
                  <img src={img6} className="img-fluid" alt="" />
                </a>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="swiper-slide">
                <a
                  className="glightbox"
                  data-gallery="images-gallery"
                  href={img7}
                >
                  <img src={img7} className="img-fluid" alt=""  />
                </a>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="swiper-slide">
                <a
                  className="glightbox"
                  data-gallery="images-gallery"
                  href={img8}
                >
                  <img src={img8} className="img-fluid" alt="" />
                </a>
              </div>
              </SwiperSlide>
              </Swiper>
            </div>
            {/* <div className="swiper-pagination"></div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SoupsScrolling;


//export default SoupsScrolling
