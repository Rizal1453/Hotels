import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Vector from "./Images/vector.jpg";
import Icona from "./Images/icon1.gif";
import Iconb from "./Images/icon2.gif";
import Iconc from "./Images/icon3.gif";
import Icond from "./Images/icon4.gif";
import Icone from "./Images/icon5.gif";
import Iconf from "./Images/icon6.gif";
import Icong from "./Images/icon7.gif";
import Iconh from "./Images/icon8.gif";
import Hotel from "./Images/villa1.gif";
import Hotelb from "./Images/villa2.gif";

const Hero2 = ({ change, setChange }) => {
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
    ///paling luar

    <div>
      {" "}
      <div className="bg-crem py-5 ">
        <Container className=" pt-4 ">
          <div className="shadow rounded bg-white py-4 mt-5">
            <div className={change ? "mt-5" : "d-flex w-100 px-4 "}>
              <div
                className={
                  change ? "d-flex justify-content-center mt-5" : "w-50 "
                }
              >
                {" "}
                <div>
                  <img src={Vector} alt="" width={change ? "330px" : "525px"} />
                </div>
              </div>
              <div
                className={
                  change ? "d-flex justify-content-center mt-5" : "w-50 "
                }
              >
                {" "}
                <div className=" mx-3 px-2 py-4 ">
                  <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat et dolores soluta obcaecati, cupiditate suscipit
                    consectetur reprehenderit ipsa distinctio perspiciatis velit
                    id sint est fuga numquam iure quisquam ad excepturi?
                  </h1>
                </div>
              </div>
            </div>

            {change ? (
              <div>
                {" "}
                <div className="d-flex justify-content-center">
                  <img src={Hotel} alt="" width="355px" height="455px" />
                </div>
                <div>
                  {" "}
                  <div className="text-center">
                    <h2>Fasilitas Hotel 1</h2>
                    <h3>12 pax 5 Room</h3>
                  </div>
                  <div className=" mx-3 px-2 py-4 d-flex justify-content-center">
                    <div className="d-flex flex-column text-center">
                      <img src={Icona} alt="" width="90px" />
                      <span>Disabil walk</span>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Iconb} alt="" width="90px" />
                      <span>Disabil walk</span>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Iconc} alt="" width="90px" />
                      <span>Disabil walk</span>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Icond} alt="" width="90px" />
                      <span>Disabil walk</span>
                    </div>
                  </div>
                  <div className=" mx-3 px-2 py-4 d-flex justify-content-center">
                    <div className="d-flex flex-column text-center">
                      <img src={Icone} alt="" width="90px" />
                      <span>Disabil walk</span>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Iconf} alt="" width="90px" />
                      <span>Disabil walk</span>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Icong} alt="" width="90px" />
                      <span>Disabil walk</span>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Iconh} alt="" width="90px" />
                      <span>Disabil walk</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mx-3">
                    <Button className="w-100 bg-success" size="lg">
                      {" "}
                      View Room{" "}
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="d-flex">
                <div className="w-50 me-3">
                  {" "}
                  <div className="text-center">
                    <h2>Fasilitas Hotel 1</h2>
                    <h3>12 pax 5 Room</h3>
                  </div>
                  <div className=" mx-3 px-2 py-4 d-flex justify-content-between">
                    <div className="d-flex flex-column text-center">
                      <img src={Icona} alt="" width="90px" />
                      <span>Disabil walk</span>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Iconb} alt="" width="90px" />
                      <span>Disabil walk</span>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Iconc} alt="" width="90px" />
                      <span>Disabil walk</span>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Icond} alt="" width="90px" />
                      <span>Disabil walk</span>
                    </div>
                  </div>
                  <div className=" mx-3 px-2 py-4 d-flex justify-content-between">
                    <div className="d-flex flex-column text-center">
                      <img src={Icone} alt="" width="90px" />
                      <span>Disabil walk</span>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Iconf} alt="" width="90px" />
                      <span>Disabil walk</span>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Icong} alt="" width="90px" />
                      <span>Disabil walk</span>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Iconh} alt="" width="90px" />
                      <span>Disabil walk</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center px-3">
                    <Button className="w-100 bg-success " size="lg">
                      {" "}
                      View Room{" "}
                    </Button>
                  </div>
                </div>
                <div className="w-50">
                  {" "}
                  <div>
                    <img src={Hotel} alt="" width="550px" height="455px" />
                  </div>
                </div>
              </div>
            )}

            <div className={change ? "" : "d-flex w-100  px-4 pt-2"}>
              <div
                className={
                  change ? "d-flex justify-content-center mt-5" : "w-50 me-3"
                }
              >
                {" "}
                <div>
                  <img
                    src={Hotelb}
                    alt=""
                    width={change ? "330px" : "525px"}
                    height="455px"
                  />
                </div>
              </div>
              <div className={change ? "" : "w-50 ms-3"}>
                {" "}
                <div className="text-center">
                  <h2>Fasilitas Hotel 2</h2>
                  <h3>12 pax 5 Room</h3>
                </div>
                <div
                  className={
                    change
                      ? "mx-3 px-2 py-4 d-flex justify-content-center"
                      : " mx-3 px-2 py-4 d-flex justify-content-between"
                  }
                >
                  <div className="d-flex flex-column text-center">
                    <i class="fa-solid fa-mug-hot fawe" />
                    <h2>Cafe</h2>
                  </div>
                  <div className="d-flex flex-column text-center">
                    <i class="fa-solid fa-bath fawe" />
                    <h2>Bath</h2>
                  </div>
                  <div className="d-flex flex-column text-center">
                    <i class="fa-solid fa-school fawe" />
                    <h2>school</h2>
                  </div>
                  <div className="d-flex flex-column text-center">
                    <i class="fa-solid fa-hospital fawe" />
                    <h2>Hospital</h2>
                  </div>
                </div>
                <div
                  className={
                    change
                      ? "mx-3 px-2 py-4 d-flex justify-content-center"
                      : " mx-3 px-2 py-4 d-flex justify-content-between"
                  }
                >
                  <div className="d-flex flex-column text-center">
                    <i class="fa-solid fa-film fawe" />
                    <h2>Bioscop</h2>
                  </div>
                  <div className="d-flex flex-column text-center">
                    <i class="fa-solid fa-mountain-sun fawe"></i>
                    <h2>View</h2>
                  </div>

                  <div className="d-flex flex-column text-center">
                    <i class="fa-sharp fa-solid fa-train fawe"></i>
                    <h2>Station</h2>
                  </div>
                  <div className="d-flex flex-column text-center">
                    <i class="fa-solid fa-headphones-simple fawe"></i>
                    <h2>karaoke</h2>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <Button className="w-100 bg-success " size="lg">
                    {" "}
                    View Room{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero2;
