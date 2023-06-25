import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {
  FaInstagram, 
  FaTelegram,
  FaFacebook,
  FaPhoneAlt
} from 'react-icons/fa';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">Deshko Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">Про нас</Nav.Link>
            <Nav.Link href="/tracking">Трекінг</Nav.Link>
            <Nav.Link href="/services">Послуги</Nav.Link>
            <Nav.Link href='/calculator'>Калькулятор</Nav.Link>
            <Nav.Link href="/taryfy">Тарифи</Nav.Link>
            <Nav.Link href="/contact">Контакти</Nav.Link>
          </Nav>
          {!isMobile && (
            <Nav className="ml-auto">
              <Nav.Link href="/" className="m-1">
                <FaInstagram />
              </Nav.Link>
              <Nav.Link href="/" className="m-1">
                <FaFacebook />
              </Nav.Link>
              <Nav.Link href="/" className="m-1">
                <FaTelegram />
              </Nav.Link>
              <Nav.Link href="/" className="m-1">
                <FaPhoneAlt />
              </Nav.Link>
              <Nav.Link href="/signin" className="mt-1">Вхід/Реєстрація</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
