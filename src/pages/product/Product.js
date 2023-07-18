import React, { useEffect, useState } from 'react'
import { Customelayout } from '../../components/customlayout/Customelayout'
import {  useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Card,Row,Col, Button, Container, Form, Ratio } from 'react-bootstrap';
import { addcart } from '../addcart/countSlice';
import './product.css'




export const Product = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState(0);

// get the slug from the url useing userParams
const {slug} = useParams();

// get the product belongs to slug

const { trendingProducts} = useSelector((state)=> state.trending)
 

const filteredproduct = trendingProducts.length ? trendingProducts.find(item=>item.slug === slug) : []

 
// useEffect(() => {
//     dispatch(getSelectedProductAction(sllug))
// },[])

const handleOnChange = (e)=>{
    const {value} = e.target
    setForm(value)
}
 

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
                   <Form className='p-5'onSubmit={AddCartSubmit}>
                     <Card.Title>{filteredproduct?.name}</Card.Title>
                     <Row>
                        <Col lg="5" style={{borderRadius:"1rem"}}>   <Card.Img  variant="top" src={filteredproduct?.mainImage} /></Col>
                        
                        <Col lg="5" > 
                        <Card.Text className=''> Price: {filteredproduct?.salesPrice}</Card.Text>

                         <Card.Text> 

                        <Form.Label>Quantity</Form.Label>
                         <Form.Control type="number" placeholder='0' defaultValue="1" min="1" max="item?.qty"
                         onChange={handleOnChange}
                         /> 
                        </Card.Text>



                        <div className='d-grid' > <Button type='submit' className='cardButton'
                      
                        >ADD TO CART</Button></div>
                        
                        </Col>

                     </Row>
                    <Card.Body className='mt-3'>
                        <Card.Text className='text-muted'> Detail <br/>
                            {filteredproduct?.description}
                        </Card.Text>
                    </Card.Body>
                </Form>
            </Container>
            
               
            
     

        </Customelayout>
    </div>
  )
}
