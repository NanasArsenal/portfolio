import React from 'react'
import { Navbar,Container,Nav} from 'react-bootstrap'

import './Navbar.scss';

const NavbarComp = () => {
  return (
    <div>
 
 <Navbar bg="dark" variant='dark' expand="lg" className='navbar'> 
  <Container className='navbar'>
    <Navbar.Brand href="#home"><h1 className='logo'>Nana Kweku Otoo</h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className='nav-items'> 
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href="#link">Projects</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
     </div>
  )
}

export default NavbarComp