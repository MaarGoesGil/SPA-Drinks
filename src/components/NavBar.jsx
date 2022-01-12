import React from "react";
import Search from "./Search";
import { IoMdBeer } from "react-icons/io";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavBarComponent = () => {

  return (
    <div
      style={{
        width: " 100vw",
        height: "80px",
        position: "sticky" ,
        top: 0,
        zIndex: 99,
      }}
    >
      <Navbar bg="light" expand="lg" >
        <Container fluid style={{ margin: "auto" }}>
          <Navbar.Brand>
            <IoMdBeer size={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Item>
                <Nav.Link  href="/">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  href="/drinks">
                  Drinks
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  href="/about">
                  About
                </Nav.Link>
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
