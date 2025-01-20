// import React from 'react';
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import img1 from '../../assets/img/home/carousel/millet-congee-porridge-ready-serve (1).jpg';
// import img2 from '../../assets/img/home/carousel/oatmeal-porridge-bowl-concrete-top-view (1).jpg';
// import img3 from '../../assets/img/home/carousel/top-view-delicious-porridge-with-raspberries-light-background (1).jpg';
// import img4 from '../../assets/img/home/carousel/oats-porridge-sweet-04.jpg';

// SwiperCore.use([Navigation, Pagination, Autoplay]);

// function Carousel() {
//   const imageStyle = {
//     maxWidth: '50%',
//     height: '22rem',
//     padding:'20px',
//     paddingTop:'20px',
//     boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.6)'
//   };

//   return (
//     <div className='pt-5'>
//       <Swiper
//         navigation
//         pagination={{ clickable: true }}
//         onSwiper={(swiper) => {
        
//         }}
//         autoplay={{ delay: 3000 }} 
//       >
//         {/* SwiperSlide for the first image */}
//         <SwiperSlide>
//           <img src={img1} style={imageStyle} alt="Image 1" />
//         </SwiperSlide>

//         {/* SwiperSlide for the second image */}
//         <SwiperSlide>
//           <img src={img2} style={imageStyle} alt="Image 2" />
//         </SwiperSlide>

//         {/* SwiperSlide for the third image */}
//         <SwiperSlide>
//           <img src={img3} style={imageStyle} alt="Image 3" />
//         </SwiperSlide>

//         {/* <SwiperSlide>
//           <img src={img4} style={imageStyle} alt="Image 3" />
//         </SwiperSlide> */}
//       </Swiper>
//     </div>
//   );
// }

// export default Carousel;

import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './home.css'
import img1 from '../../assets/img/home/carousel/millet-congee-porridge-ready-serve (1).jpg';
import img2 from '../../assets/img/home/carousel/oatmeal-porridge-bowl-concrete-top-view (1).jpg';
import img3 from '../../assets/img/home/carousel/top-view-delicious-porridge-with-raspberries-light-background (1).jpg';
import img4 from '../../assets/img/home/carousel/oats-porridge-sweet-04.jpg';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Carousel() {
  const imageStyle = {
    maxWidth: '50%',
    height: '22rem',
    padding:'20px',
    paddingTop:'20px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.6)',
    '@media (max-width: 768px)': {
      maxWidth: '90%',
      height: 'auto', // Adjust height for smaller screens
    },
  };

  return (
    <div className='pt-5 '>
    <h1>  Take a peek into our gallery </h1>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {}}
        autoplay={{ delay: 3000 }}
      >
        {/* SwiperSlide for the first image */}
        <SwiperSlide>
          <img src={img1} className='carousel-image' alt="Image 1" />
        </SwiperSlide>

        {/* SwiperSlide for the second image */}
        <SwiperSlide>
          <img src={img2} className='carousel-image' alt="Image 2" />
        </SwiperSlide>

        {/* SwiperSlide for the third image */}
        <SwiperSlide>
          <img src={img3} className='carousel-image' alt="Image 3" />
        </SwiperSlide>

        {/* <SwiperSlide>
          <img src={img4} className='carousel-image' alt="Image 4" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default Carousel;