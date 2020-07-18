import React, { useState } from "react";
// Remember to put methods you'll need in the {} above; this is going to be a common troubleshooting issue.

// Import the carousel component from our CSS library
import Carousel from "react-bootstrap/Carousel";

// Eventual step: add a button in each carousel slide that reveals cards below. Slides can be intro/contact - projects - professional - personal, each will populate different cards underneath. Also pause the carousel on mouseover.


// This is the template for how we'll be using the carousel.
function PortfolioCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./noatsBanner.png")}
          alt="Noats"
        />
        <Carousel.Caption>
          <h3>Noats</h3>
          <p>SQL powered recipe app.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placebear.com/800/200"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placebear.com/800/200"
          alt="Third slide"
        />
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

export default PortfolioCarousel;
