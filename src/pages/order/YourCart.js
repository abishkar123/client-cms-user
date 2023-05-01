import React from 'react'
import { useSelector } from 'react-redux'
import { Customelayout } from '../../components/customlayout/Customelayout'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'

export const YourCart = () => {

    const {cart} = useSelector((state)=> state.counter)
    const price = cart.reduce((acc, pp)=>{
      return acc + parseInt(pp.shopQty* pp.salesPrice)
    },0)

   

  return (
   <Customelayout>
    <Container>

   
      <div className="shoppingcart">Shopping Cart</div>
      <div className='shopping'>A${price}</div>
          
         
     { cart?.map ((item, i )=>(
       
    <Row className='p-3'>
   <hr/>
   <Col style={{borderRadius:"2rem"}}>   <Card.Img  variant="top" src={process.env.REACT_APP_DOMAIN + item?.mainImage?.substr(6)} /></Col>
    <Col> <h3> {item.name}</h3></Col> 
    <Col>{item.shopQty}</Col>
    <Col>${item.salesPrice}</Col>
    <hr/>
   </Row>

    ))}

    <div className=''> <Row>
    <Col> <h3>Estimated Total:{""} ${price}</h3></Col>
   </Row></div>
  
    
    
    </Container>
   </Customelayout>
  )
}
