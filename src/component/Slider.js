import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import heroimg4 from '../img/heroimg_4.webp';
import heroimg3 from '../img/heroimg_3.webp';
import heroimg2 from '../img/heroimg_2.webp';
const Slider = () => {
  const sliderItems = [
    {
      url: heroimg4,
      text: "Meet Verified Partner Only At Sukhvivah",
    },
    {
      url: heroimg3,
      text: "Locate your Dating Partner Only At Sukhvivah",
    },
    {
      url: heroimg2,
      text: "Meet Verified Friend's Only At Sukhvivah",
    },
  ];

  return (
    <Carousel
      className="embla__container"
      style={{ transform: 'translate3d(0.0007395px, 0px, 0px)' }}
    >
      {/* <Marquee speed={20}> */}
        {sliderItems.map((item, index) => (
          <Carousel.Item
            key={index}
            className="embla__slide position-relative overflow-hidden min-h-screen"
            style={{ transform: 'translate3d(0px, 0px, 0px)' }}
          >
            <img
              alt=""
              loading="eager"
              decoding="async"
              className="object-cover brightness-75"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: 'transparent',
              }}
              sizes="100vw"
              src={item.url}
            />
            <div className="absolute bottom-[47vh] sm:bottom-[22vh] min-[1220px]:bottom-[29vh] w-full flex flex-col justify-center items-center text-center text-[#fff]">
              <h1 className="satisfy-regular slidertext h-fit max-h-fit text-[1.7rem] sm:text-4xl font-normal flex justify-center [text-shadow:_0px_0px_4px_#000000] !pb-4 max-[375px]:p-0 min-[375px]:p-6 min-[390px]:p-[10%] ">
                {item.text}
              </h1>
            </div>
          </Carousel.Item>
        ))}
      {/* </Marquee> */}
    </Carousel>
  );
};

export default Slider;


// import Carousel from 'react-bootstrap/Carousel';

// function Slider() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//        <img src={require("../img/heroimg_4.webp")} alt="" />
//         <Carousel.Caption>
//           <h3>Meet Verified Partner Only At Sukhvivah</h3>
//           {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={require("../img/heroimg_2.webp")} alt=""/>
//         <Carousel.Caption>
//           <h3>Locate your Dating Partner Only At Sukhvivah</h3>
          
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={require("../img/heroimg_3.webp")} alt=""/>
//         <Carousel.Caption>
//           <h3>Meet Verified Friend's Only At Sukhvivah</h3>
//           {/* <p>            Praesent commodo cursus magna, vel scelerisque nisl consectetur.          </p> */}
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Slider;
