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
        <Navbar.Brand className='titelName text-light' href="/">SnkersCrazy
        </Navbar.Brand>
        <Navbar.Toggle className='text-light' aria-controls="basic-navbar-nav text-light"> 
        </Navbar.Toggle>
        
        
       
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='pa'>    
      <Link className='nav-link  text-light'to="/">Football Boot</Link>
        <Link className='nav-link  text-light'to="/">Sneakers</Link>
        <Link className='nav-link  text-light'to="/">Adidas</Link>
        <Link className='nav-link  text-light'to="/">Nike</Link>

        </Nav>
         
        <Nav className='ms-auto'>
          <Link className='nav-link  text-light'to="/">Home</Link>
            <Link className='nav-link  text-light hover'  to="/login"> <i class="fa-solid fa-house fa-lg"  title='MyAccount'></i></Link>
            <Link className='nav-link  text-light'to="/addbag"><i class="fa-solid fa-cart-plus fa-lg fa-beat" title='Opening Shopping Cart'></i></Link>
            </Nav>
            
        

           
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
