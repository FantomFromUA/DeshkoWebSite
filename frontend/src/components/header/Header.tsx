import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  FaInstagram, 
  FaTelegram,
  FaFacebook,
  FaPhoneAlt
} from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">Deshko Company</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href="/">Про нас</Nav.Link>
          <Nav.Link href="/about">Послуги</Nav.Link>
          <Nav.Link href="/">Контакти</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link className="m-1" href="/">
                <FaInstagram />
          </Nav.Link>
          <Nav.Link className="m-1" href="/">
                <FaFacebook />
          </Nav.Link>
          <Nav.Link className="m-1" href="/">
                <FaTelegram />
          </Nav.Link>
          <Nav.Link className="m-1" href="/">
                <FaPhoneAlt />
          </Nav.Link>
          <Nav.Link href="/" className='mt-1'>Зареєструватись</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;