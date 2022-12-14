import React from "react";
import { Container, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand
          href="#home"
          className="fs-1 fw-semibold fst-italic text-light"
        >
          Rizal Hotel <i class="fab fa-typo3" />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
