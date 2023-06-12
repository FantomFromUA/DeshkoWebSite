import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {

  const [animeSearch, setAnimeSearch] = React.useState("");

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Deshko Company</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#pricing" className='mt-1'>Sign up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;