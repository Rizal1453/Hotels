import React, { useEffect} from "react";
import NavbarComponent from "./NavbarComponent";
import HeroImage from "./Images/hero2.jpg";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";

const Hero = ({ change, setChange }) => {
  const changeSize = () => {
    if (window.innerWidth <= 850) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  useEffect(() => {
    changeSize();
  }, []);
  window.addEventListener("resize", changeSize);
  return (
    <div className="myBG">
      <img src={HeroImage} alt="" className="img-hero" />
      <Container>
        <NavbarComponent />
        <div className={change ? "" : "d-flex justify-content-between "}>
          <div
            className={
              change
                ? "text-light w-100"
                : " d-flex flex-column justify-content-center align-items-center text-light mx-2 "
            }
          >
            <h1
              className={
                change
                  ? " text-center fst-italic"
                  : " text-center text-hero1 fst-italic"
              }
            >
              {" "}
              Private Room{" "}
            </h1>
            <h1
              className={
                change
                  ? " text-center fw-bold fst-italic"
                  : " text-center text-hero2 fw-bold fst-italic"
              }
            >
              {" "}
              for You in Indonesia{" "}
            </h1>
          </div>
          <div className={change ? "bg-lt" : "w-50  bg-lt rounded"}>
            <h1 className=" my-2 d-flex justify-content-center text-white">
              Request Aquote
            </h1>
            <div className={change ? "" : "d-flex"}>
              <FloatingLabel
                controlId="floatingInput"
                label="First Name"
                className={change ? "mb-3 px-2" : "mb-3 w-50 px-2"}
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  className="bg-light"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Last Name"
                className={change ? "mb-3 px-2" : "mb-3 w-50 px-2"}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </div>
            <div className={change ? "" : "d-flex"}>
              <FloatingLabel
                controlId="floatingInput"
                label="No HP"
                className={change ? "mb-3 px-2" : "mb-3 w-50 px-2"}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Number Of Guest"
                className={change ? "mb-3 px-2" : "mb-3 w-50 px-2"}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </div>
            <div className={change ? "" : "d-flex"}>
              <FloatingLabel
                controlId="floatingInput"
                label="Check In"
                className={change ? "mb-3 px-2" : "mb-3 w-50 px-2"}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Check Out"
                className={change ? "mb-3 px-2" : "mb-3 w-50 px-2"}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </div>
            <div className={change ? "" : "d-flex"}>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className={change ? "mb-3 px-2" : "mb-3 w-50 px-2"}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <Form.Select
                style={
                  change
                    ? {
                        marginBottom: "8px",
                        width: "350px",
                        height: "55px",
                        marginLeft: "10px",
                      }
                    : {
                        width: "250px",
                        height: "55px",
                        marginLeft: "12px",
                      }
                }
              >
                <option>Private Rooom</option>
                <option>Family</option>
                <option>Meeting</option>
              </Form.Select>
            </div>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Request"
              className="mb-3 px-2"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
            <div className="d-flex justify-content-center my-3 w-100">
              <Button className="w-100 bg-success mx-3" size="lg">
                {" "}
                Submit{" "}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
