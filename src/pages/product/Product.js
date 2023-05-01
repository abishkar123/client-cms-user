import React, { useState } from 'react'
import { Customelayout } from '../../components/customlayout/Customelayout'
import {  useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Card,Row,Col, Button, Container, Form, Ratio } from 'react-bootstrap';
import { addcart } from '../addcart/countSlice';



export const Product = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState(0);

// get the slug from the url useing userParams
const {slug} = useParams();

// get the product belongs to slug
const { trendingProducts} = useSelector((state)=> state.trending)

const filteredproduct = trendingProducts.length ? trendingProducts.find(item=>item.slug === slug) : []


const handleOnChange = (e)=>{
    const {value} = e.target
    setForm(value)
}
 console.log(form)

const AddCartSubmit  = (e)=>{
    e.preventDefault()

    //descutruce the products 
    const {name, qty, salesPrice, mainImage, _id} = filteredproduct
    const obj = {
        shopQty: form,
        name,
        qty,
        salesPrice,
        mainImage,
        _id,
        
    }
   dispatch(addcart(obj))
}


// displ product in this product landing page
  return (
    <div>
        <Customelayout>
            <Container>
                   <Form className='p-3'onSubmit={AddCartSubmit}>
                     <Card.Title>{filteredproduct.name}</Card.Title>
                     <Row>
                        <Col style={{borderRadius:"1rem"}}>   <Card.Img  variant="top" src={process.env.REACT_APP_DOMAIN + filteredproduct?.mainImage?.substr(6)} /></Col>
                        <Col> <Card.Text> Price: {filteredproduct.salesPrice}</Card.Text>

                         <Card.Text>

                        <Form.Label>Quantity</Form.Label>
                         <Form.Control type="number" placeholder='0' defaultValue="1" min="1" max="item.qty"
                         onChange={handleOnChange}
                         /> 
                        </Card.Text>

                        <div className='d-grid'> <Button type='submit' className='cardButton'
                      
                        >ADD TO CART</Button></div>
                        
                        </Col>
                     </Row>
                    <Card.Body>
                        <Card.Text className='text-muted'> Detail <br/>
                            {filteredproduct.description}
                        </Card.Text>
                    </Card.Body>
                </Form>
            </Container>
            
               
            
     

        </Customelayout>
    </div>
  )
}
