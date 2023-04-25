import React from 'react'
import { useSelector } from 'react-redux'
import { Customelayout } from '../../components/customlayout/Customelayout'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'

export const YourCart = () => {

    const {cart} = useSelector((state)=> state.counter)
  return (
   <Customelayout>





    
     { cart?.map ((item, i )=>(
        <Container>
           
            <Row className='p-3'>

   <Col style={{borderRadius:"1rem"}}>   <Card.Img  variant="top" src={process.env.REACT_APP_DOMAIN + item?.mainImage?.substr(6)} /></Col>
    <Col>{item.name}</Col> 
    <Col>{item.shopQty}</Col>

   </Row>
                
    


        </Container>

    

    ))}
    

   </Customelayout>
  )
}
