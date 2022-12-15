import React from "react";
import { Button } from "react-bootstrap";

const Landing = () => {
  return (
    <div
      className="text-white text-center"
      style={{ marginTop: "150px", marginBottom: "150px" }}
    >
      <h1 style={{ fontSize: "60px" }}>
        {" "}
        ENJOY WITH YOUR LOVE FRIENDS AND FAMILY
      </h1>
      <Button variant="outline-light" className="px-5 mt-5">
        ORDER YOUR ROOM
      </Button>
    </div>
  );
};

export default Landing;
