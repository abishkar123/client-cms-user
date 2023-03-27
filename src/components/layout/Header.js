import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <div>
         <Navbar className="bg-dark text-light" expand="md">
      <Container>
        <Navbar.Brand className='titelName text-light' href="/">SnkersCrazy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="ms-auto">
            <Link className='nav-link text-light ' to="/">Home</Link>
            <Link className='nav-link  text-light'to="/login">Login</Link>
            <Link className='nav-link  text-light'to="/register">Register</Link>
            <Link className='nav-link  text-light'to="/addbag">Add Bag</Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
