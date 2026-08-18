import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../assets/image/img1.jpg"
import img2 from "../../assets/image/img2.png"
  


function Sliders  ()  {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={img1} alt=""  className="d-block w-100 slider-img"  style={{ height: "300px", width:"80%" , padding:"20px 20px"}} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt=""  className="d-block w-100 slider-img" style={{ height: "300px", width:"80%" , padding:"20px 20px"}}/>
        
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img1} alt=""  className="d-block w-100 slider-img" style={{ height: "300px", width:"80%", padding:"20px 20px"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliders;