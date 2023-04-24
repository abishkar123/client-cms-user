import React from 'react'
import { Customelayout } from '../../components/customlayout/Customelayout'
import {  useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Card,Row,Col, Button, Container, Form, Ratio } from 'react-bootstrap';
import { addcart } from '../addcart/countSlice';


export const Product = () => {
    const dispatch = useDispatch()

// get the slug from the url useing userParams
const {slug} = useParams();

// get the product belongs to slug
const { trendingProducts} = useSelector((state)=> state.trending)

const filteredproduct = trendingProducts.length ? trendingProducts.filter(item=>item.slug === slug) : []


// displ product in this product landing page
  return (
    <div>
        <Customelayout>

        {filteredproduct?.map((item, index) => (
            <Container>
                   <Form className='p-3'>
                     <Card.Title>{item.name}</Card.Title>
                     <Row>
                        <Col style={{borderRadius:"1rem"}}>   <Card.Img  variant="top" src={process.env.REACT_APP_DOMAIN + item?.mainImage.substr(6)} /></Col>
                        <Col> <Card.Text> Price: {item.salesPrice}</Card.Text>
                         <Card.Text>
                        <Form.Label>Quantity</Form.Label>
                         <Form.Control type="number" placeholder='0' defaultValue="1"/> 
                        </Card.Text>

                        <div className='d-grid'> <Button className='cardButton'
                         onClick={()=>addcart()}
                        >Add Cart</Button></div>
                        
                        </Col>
                     </Row>
                    <Card.Body>
                        <Card.Text className='text-muted'> Detail <br/>
                            {item.description}
                        </Card.Text>
                    </Card.Body>
                </Form>
            </Container>
            
               
            
        ))}

        </Customelayout>
    </div>
  )
}
