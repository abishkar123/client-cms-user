import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { fetchcategoryAction } from '../../pages/category/categoryAction';

export const Header = () => {

  const dispatch= useDispatch()
  const {categories}= useSelector((state)=> state.category)

  useEffect(()=>{
    dispatch(fetchcategoryAction())
  },[dispatch])
 

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

          {categories.map((item, index)=>(
           
            <Link className='nav-link  text-light'to={`/category/${item.slug}`}>{item.name} </Link>
            
          )
        
          )}
      

        </Nav>
         
        <Nav className='ms-auto'>
          <Link className='nav-link  text-light'to="/">Home</Link>
            <Link className='nav-link  text-light hover'  to="/login"> <i className="fa-solid fa-house fa-lg"  title='MyAccount'></i></Link>
            <Link className='nav-link  text-light'to="/addbag"><i className="fa-solid fa-cart-plus fa-lg fa-beat" title='Opening Shopping Cart'></i></Link>
            </Nav>
            
        

           
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
