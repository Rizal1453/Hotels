import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

const Fasilitas = ({change,setChange}) => {
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
    <div className="bg-light py-2">
      <Container>
        <div
          className={
            change
              ? ""
              : "parent bg-white d-flex justify-content-center shadow rounded-5"
          }
        >
          <div
            className={
              change
                ? "bg-dark text-white rounded-3 py-2 ps-2"
                : "w-50 bg-dark rounded-5 text-white"
            }
          >
            <h1 className="text-center"> Inclusions</h1>
            <div className={change ? "" : "d-flex"}>
              <div className={change ? "my-2" : "w-50 ms-5 ps-3 "}>
                {" "}
                <p>✔ BBQ on The Beach</p>
                <p>✔ Picnic SetUp On The Beach</p>
                <p>✔ Return transfer </p>
                <p>✔ Meals onboard</p>
                <p>✔ Afternoon Tea/Coffe ➕ snack</p>
              </div>
              <div className="w-50">
                <p>✔ Water with on board</p>
                <p>✔ Snorkeling Gear</p>
                <p>✔ Linen & Towels </p>
                <p>✔ Good View</p>
                <p>✔ Good Vibes</p>
              </div>
            </div>
          </div>
          <div className={change ? "" : "w-50 "}>
            <h2 className="text-center">ExClusions</h2>
            <div className={change ? "ms-2" : "d-flex"}>
              {" "}
              <div className={change ? "" : "w-50 ms-5"}>
                <p>✔ Airline Tickets</p>
                <p>✔ Personal Expenses</p>
                <p>✔ Crew gratuity</p>
                <p>✔ Diving</p>
                <p>✔ Wine and spirits </p>
              </div>{" "}
              <div>
                <p>✔ Acomodation in lombok</p>
                <p>✔ Insurance</p>
                <p>✔ Gratuities </p>
                <p>✔ Documentation</p>
                <p>✔ Other which </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Fasilitas;
