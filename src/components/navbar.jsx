import { React, useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { CgInstagram, CgFacebook } from "react-icons/cg";
// import { FiPhoneCall } from "react-icons/fi";


function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {

    if (window.innerWidth < 720) {
   
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="border-bottom">
      <Container>
        <Navbar.Brand
          href="#home"
          className={
            isMobile
              ? "d-flex align-items-center flex-column"
              : "d-flex align-items-center"
          }
        >
          <img
            alt="Nostalji Sekerleme Logo"
            src="./images/logo1.png"
            width={isMobile ? "100" : "120"}
            height={isMobile ? "70" : "80"}
            className="d-inline-block align-center"
          />
          <div className="d-flex flex-column ml-3 mt-2">
            <h4>Nostalji Şekerleme</h4>
            <p style={{ fontSize: "12px" }}>
              Organizasyonunuza tat katıyoruz...
            </p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/">Anasayfa</Nav.Link>
            <Nav.Link href="/about">Hakkımızda</Nav.Link>
            <Nav.Link href="/products">Ürünler</Nav.Link>
            <Nav.Link href="/gallery">Galeri</Nav.Link>
            <Nav.Link href="/events"> Etkinlikler</Nav.Link>
            <Nav.Link href="/instagram">Instagram</Nav.Link>
            <Nav.Link href="/contact">İletişim</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="https://www.instagram.com/bursa_nostalji_sekerleme/"
              target="_blank"
            >
              <CgInstagram />
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/bursa_nostalji_sekerleme/"
              target="_blank"
            >
              <CgFacebook />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
export default NavBar;