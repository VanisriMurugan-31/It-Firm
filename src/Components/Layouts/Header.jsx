import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure Bootstrap JS is loaded

function Header() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Navbar
      expand="lg"
      className={`custom-navbar ${shadow ? "navbar-shadow" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        transition: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#2f2455",
      }}
    >
      {/* Logo */}
      <Navbar.Brand href="#" style={{ marginLeft: "30px" }}>
        <h3> IT FIRM </h3>
        {/* Replace with your logo */}
      </Navbar.Brand>

      {/* Mobile Menu Toggle Button */}
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ marginRight: "20px" }}
      />

      {/* Navigation Links */}
      <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: "30px" }}>
        <Nav className="section">
          <Nav.Link href="/" className="text-white">
            Home
          </Nav.Link>
          <Nav.Link href="/career" className="text-white">
            Career
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            Our Services
          </Nav.Link>
          <Nav.Link href="/contact" className="text-white">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
