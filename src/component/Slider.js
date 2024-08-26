import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
       <img src={require("../img/heroimg_4.webp")} alt="" />
        <Carousel.Caption>
          <h3>Meet Verified Partner Only At Sukhvivah</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={require("../img/heroimg_2.webp")} alt=""/>
        <Carousel.Caption>
          <h3>Locate your Dating Partner Only At Sukhvivah</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={require("../img/heroimg_3.webp")} alt=""/>
        <Carousel.Caption>
          <h3>Meet Verified Friend's Only At Sukhvivah</h3>
          {/* <p>            Praesent commodo cursus magna, vel scelerisque nisl consectetur.          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;