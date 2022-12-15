import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselComponents = () => {
  return (
    <div className="py-4 bg-light d-flex flex-column justify-content-center text-center">
      <h2>What Our Customer Says</h2>{" "}
      <Carousel>
        
          <Carousel.Item className=" py-4">
          <p> food delicious </p>
          <p>⭐⭐⭐⭐⭐⭐</p>
        </Carousel.Item>
        <Carousel.Item className=" py-4">
          <p> oh my god this is first hotel likely</p>
          <p>⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐</p>
        </Carousel.Item>
       
        <Carousel.Item className=" py-4">
          <p> Good view</p>
          <p>⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐</p>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponents;
