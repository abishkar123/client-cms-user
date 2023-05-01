import React from 'react'
import { Customelayout } from '../../components/customlayout/Customelayout'
import { useSelector } from 'react-redux'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'

export const Cart = () => {
    const {cart} = useSelector((state)=> state.counter)
    const price = cart.reduce((acc, pp)=>{
        return acc + parseInt(pp.shopQty* pp.salesPrice)
      },0)

  return (
    <div>
        <Customelayout>
            <Container>
            <div className="shoppingcart">Shopping Cart</div>
            <div className='shopping'>A${price}</div>
            <Form className='mt-3'>
            { cart?.map ((item, i )=>(
                 
              <Row className='py-3 box'>
        
           <Col className='shopping'  style={{borderRadius:"2rem", width:"7rem"}}>
           <Card.Img  className="bg-danger box" variant="top" src={process.env.REACT_APP_DOMAIN + item?.mainImage?.substr(6)} /></Col>
        
           <Col> 
           <div> <h4>{item.name}</h4></div>
           <div> <span className='cartdes'> Quantity: </span>{item.shopQty}</div>
           <div> <span className='cartdes'>SalesPrice:</span>${item.salesPrice}</div>
           
           
           </Col> 
           
           <Col></Col>
           
              </Row> 
              
            
            ))}

           <Row>
           <Col> esdsaf</Col>
              </Row>
<div className=''> <Row>
    <Col> <h3>Estimated Total:{""} ${price}</h3></Col>
   </Row></div>
    

            </Form>

            <Form className='mt-3'>
                <row>
                    <Col>hfhf</Col>
                </row>
            </Form>


            </Container>

        </Customelayout>
    </div>
  )
}
