import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Suporta from "./Images/garuda.png";
import Suportb from "./Images/Hotel_Indonesia.png";
import Suportc from "./Images/wonderfull.png";

const Adds = (change,setChange) => {
  //  const changeSize = () => {
  //   if (window.innerWidth <= 850) {
  //     setChange(true);
  //   } else {
  //     setChange(false);
  //   }
  // };
  // useEffect(() => {
  //   changeSize();
  // }, []);
  // window.addEventListener("resize", changeSize);
  
  return (
    <div className="bg-light shadow py-4">
      <Container>
        <div className="text-center">
          <h1> Support BY</h1>
          <hr />
          <div className={change ? "" : "d-flex justify-content-center my-4"}>
            <img src={Suporta} alt="" width="200px" />
            <img src={Suportc} alt="" width="200px" className="mx-5 mt-5" />
            <img src={Suportb} alt="" width="200px" />
          </div>
          <hr />
        </div>
      </Container>
    </div>
  );
};

export default Adds;
