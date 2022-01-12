import React from "react";
import Search from "./Search";
import { IoMdBeer } from "react-icons/io";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavBarComponent = () => {
  return (
    <div
      style={{
        width: "100vw",
        marginLeft: "0",
        background: "white",
      }}
    >
      <Navbar
        bg="light"
        expand="lg"
        style={{
          width: "100vw",
          background: "white",
          height: "80px",
          position: "sticky",
          top: 0,
          zIndex: 99,
          margin: "auto",
        }}
      >
        <Container fluid style={{ margin: "auto", background: "white" }}>
          <Navbar.Brand>
            <IoMdBeer size={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            style={{ background: "white", borderRadius: "5px" }}
          >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "200px" }}
            >
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/drinks">Drinks</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
            </Nav>
            <Search />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarComponent;
