import React, { useState, useEffect } from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import {
  FaInstagram, 
  FaTelegram,
  FaFacebook,
  FaPhoneAlt
} from 'react-icons/fa';
import { CustomerModel } from '../../types/customerModel';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [customer, setCustomer] = React.useState<CustomerModel | null>(null);

  React.useEffect(() => {
    const customerJSON = localStorage.getItem("userInfo");
    
    if(customerJSON === null){
      setCustomer(null);
      return;
    }
    setCustomer(JSON.parse(parcer(localStorage.getItem("userInfo"))));
  }, [])

  const parcer = (value : string | null) : string => {
    if(value === null) return "";
    return value;
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">Deshko Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">Про нас</Nav.Link>
            <Nav.Link href="/tracking">Трекінг</Nav.Link>
            <Nav.Link href='/calculator'>Калькулятор</Nav.Link>
            <Nav.Link href="/taryfy">Тарифи</Nav.Link>
            <Nav.Link href="/contact">Контакти</Nav.Link>
          </Nav>
          {isMobile ? 
          (
            customer === null
              ?<Nav.Link href="/signin" className="mt-1">Вхід/Реєстрація</Nav.Link>
              :<NavDropdown  title={"🧍" + customer.login} className="mt-1">
                  <NavDropdown.Item href="/user">Кабінет</NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>Вийти з акаунту</NavDropdown.Item>
                </NavDropdown >
          )
          :
          (
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
              <Nav.Link href="tel:+380505055555" className="m-1">
                <FaPhoneAlt />
              </Nav.Link>
              {customer === null
              ?<Nav.Link href="/signin" className="mt-1">Вхід/Реєстрація</Nav.Link>
              :<NavDropdown  title={"🧍" + customer.login} className="mt-1">
                  <NavDropdown.Item href="/user">Кабінет</NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>Вийти з акаунту</NavDropdown.Item>
                </NavDropdown >}
              
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
