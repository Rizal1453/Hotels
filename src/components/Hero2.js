import React, { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import Vector from "./Images/vector.jpg";
import Icona from "./Images/hotel1.gif";
import Iconb from "./Images/hotel2.gif";
import Iconc from "./Images/hotel3.gif";
import Icond from "./Images/hotel4.gif";
import Icone from "./Images/hotel5.gif";
import Iconf from "./Images/hotel6.gif";
import Icong from "./Images/hotel7.gif";
import Iconh from "./Images/hotel8.gif";
import Hotel from "./Images/villa1.gif";
import Hotelb from "./Images/villa2.gif";

import Iconi from "./Images/vila1.gif";
import Iconj from "./Images/vila2.gif";
import Iconk from "./Images/vila3.gif";
import Iconl from "./Images/vila4.gif";
import Iconm from "./Images/vila5.gif";
import Iconn from "./Images/vila6.gif";
import Icono from "./Images/vila7.gif";
import Iconp from "./Images/vila8.gif";
import Fasa from "./Images/fas1.jpeg";
import Fasb from "./Images/fas2.png";
import Fasc from "./Images/fas3.jpg";
import Fasd from "./Images/fas4.jpg";
import Fase from "./Images/fas5.jpg";
import Fasf from "./Images/fas6.jpg";
import Fasg from "./Images/fas7.jpg";
import Fash from "./Images/fas8.jpg";

const Hero2 = ({ change, setChange }) => {
  const [show, setShow] = useState(false);
  const [hotel, setHotel] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseHotel = () => setHotel(false);
  const handleShow = () => setShow(true);
  const handleHotel = () => setHotel(true);

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
                <div className=" mx-3 px-2 py-4 d-flex align-items-center  h-100 ">
                  <h1>
                    in this hotel near the sea and there are ATVs, ATV is a way
                    to enjoy the beach in a modern way. By riding an ATV, we can
                    go on an adventure along the beach and see the beauty of the
                    sea
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
                  <div className="text-center pt-2">
                    <h4>Fasilitas Hotel 1</h4>
                    <h3>12 pax 5 Room</h3>
                  </div>
                  <div className=" mx-3 px-2 py-4 d-flex justify-content-center">
                    <div className="d-flex flex-column text-center">
                      <img src={Icona} alt="" width="90px" />
                      <h4>gym</h4>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Iconb} alt="" width="90px" />
                      <h4>view</h4>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Iconc} alt="" width="90px" />
                      <h4>mosque</h4>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Icond} alt="" width="90px" />
                      <h4>vehicle</h4>
                    </div>
                  </div>
                  <div className=" mx-3 px-2 py-4 d-flex justify-content-center">
                    <div className="d-flex flex-column text-center">
                      <img src={Icone} alt="" width="90px" />
                      <h4>theater</h4>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Iconf} alt="" width="90px" />
                      <h4>bike</h4>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Icong} alt="" width="90px" />
                      <h4>duplicator</h4>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Iconh} alt="" width="90px" />
                      <h4>pool</h4>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mx-3">
                    <Button
                      className="w-100 bg-success mx-2"
                      size="lg"
                      onClick={handleShow}
                    >
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
                  <div className="text-center mt-2">
                    <h2>Fasilitas Hotel 1</h2>
                    <h3>12 pax 5 Room</h3>
                  </div>
                  <div className=" mx-3 px-2 py-4 d-flex justify-content-between">
                    <div className="d-flex flex-column text-center">
                      <img src={Icona} alt="" width="90px" />
                      <h4>gym</h4>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Iconb} alt="" width="90px" />
                      <h4>view</h4>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Iconc} alt="" width="90px" />
                      <h4>mosque</h4>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Icond} alt="" width="90px" />
                      <h4>vehicle</h4>
                    </div>
                  </div>
                  <div className=" mx-3 px-2 py-4 d-flex justify-content-between">
                    <div className="d-flex flex-column text-center">
                      <img src={Icone} alt="" width="90px" />
                      <h4>theater</h4>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Iconf} alt="" width="90px" />
                      <h4>bike</h4>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Icong} alt="" width="90px" />
                      <h4>duplicator</h4>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <img src={Iconh} alt="" width="90px" />
                      <h4>pool</h4>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center px-3">
                    <Button
                      className="w-100 bg-success "
                      size="lg"
                      onClick={handleShow}
                    >
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
                    <img src={Iconi} alt="" width="90px" />
                    <h4>Mosque</h4>
                  </div>
                  <div className="d-flex flex-column text-center">
                    <img src={Iconj} alt="" width="90px" />
                    <h4>waiters</h4>
                  </div>
                  <div className="d-flex flex-column text-center">
                    <img src={Iconk} alt="" width="90px" className="fawe" />
                    <h4>Wifi</h4>
                  </div>
                  <div className="d-flex flex-column text-center">
                    <img src={Iconl} alt="" width="90px" />
                    <h4>School</h4>
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
                    <img src={Iconm} alt="" width="90px" />
                    <h4>Church</h4>
                  </div>
                  <div className="d-flex flex-column text-center">
                    <img src={Iconn} alt="" width="90px" />
                    <h4>Theater</h4>
                  </div>

                  <div className="d-flex flex-column text-center">
                    <img src={Icono} alt="" width="90px" />
                    <h4>View</h4>
                  </div>
                  <div className="d-flex flex-column text-center">
                    <img src={Iconp} alt="" width="90px" />
                    <h4>Pool</h4>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <Button
                    className="w-100 bg-success mx-2 "
                    size="lg"
                    onClick={handleHotel}
                  >
                    {" "}
                    View Room{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Modal show={show} onHide={handleClose} className=" ">
          <Modal.Header closeButton>
            <Modal.Title>Room in Hotel 1</Modal.Title>
          </Modal.Header>
          <Modal.Body className="">
            <div>
              <div className="d-flex justify-content-between">
                <img
                  src={Fasa}
                  alt=""
                  width={change ? "150px" : "200px"}
                  height="100px"
                />
                <img
                  src={Fasb}
                  alt=""
                  width={change ? "150px" : "200px"}
                  height="100px"
                />
              </div>
              <div className="d-flex justify-content-between mt-2">
                <img
                  src={Fasc}
                  alt=""
                  width={change ? "150px" : "200px"}
                  height="100px"
                />
                <img src={Fasd} alt="" width={change ? "150px" : "200px"} />
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-between mt-2">
                <img
                  src={Fase}
                  alt=""
                  width={change ? "150px" : "200px"}
                  height="100px"
                />
                <img
                  src={Fasf}
                  alt=""
                  width={change ? "150px" : "200px"}
                  height="100px"
                />
              </div>
              <div className="d-flex justify-content-between mt-2">
                <img
                  src={Fasg}
                  alt=""
                  width={change ? "150px" : "200px"}
                  height="100px"
                />
                <img
                  src={Fash}
                  alt=""
                  width={change ? "150px" : "200px"}
                  height="100px"
                />
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={hotel} onHide={handleCloseHotel} className=" ">
          <Modal.Header closeButton>
            <Modal.Title>Room in Hotel 2</Modal.Title>
          </Modal.Header>
          <Modal.Body className="">
            <div>
              <div className="d-flex justify-content-between">
                <img
                  src={Fasa}
                  alt=""
                  width={change ? "150px" : "200px"}
                  height="100px"
                />
                <img
                  src={Fasb}
                  alt=""
                  width={change ? "150px" : "200px"}
                  height="100px"
                />
              </div>
              <div className="d-flex justify-content-between mt-2">
                <img
                  src={Fasc}
                  alt=""
                  width={change ? "150px" : "200px"}
                  height="100px"
                />
                <img src={Fasd} alt="" width={change ? "150px" : "200px"} />
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-between mt-2">
                <img
                  src={Fase}
                  alt=""
                  width={change ? "150px" : "200px"}
                  height="100px"
                />
                <img
                  src={Fasf}
                  alt=""
                  width={change ? "150px" : "200px"}
                  height="100px"
                />
              </div>
              <div className="d-flex justify-content-between mt-2">
                <img
                  src={Fasg}
                  alt=""
                  width={change ? "150px" : "200px"}
                  height="100px"
                />
                <img
                  src={Fash}
                  alt=""
                  width={change ? "150px" : "200px"}
                  height="100px"
                />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Hero2;
