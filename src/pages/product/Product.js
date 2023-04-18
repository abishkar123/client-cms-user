import React from 'react'
import { Customelayout } from '../../components/customlayout/Customelayout'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Card,Row,Col, Button } from 'react-bootstrap';

export const Product = () => {
    const dispatch = useDispatch()

// get the slug from the url useing userParams
const {slug} = useParams();
console.log(slug)
// get the product belongs to slug
const { trendingProducts} = useSelector((state)=> state.trending)
// const { categories} = useSelector((state)=> state.category)
// const prod = categories.find(item=>item.slug === slug)
const filteredproduct = trendingProducts.length ? trendingProducts.filter(item=>item.slug === slug) : []
console.log(filteredproduct)

// displ product in this product landing page
  return (
    <div>
        <Customelayout>
            
        <Row className="d-flex justify-content-around">
        {filteredproduct?.map((item, index) => (
            <Col mt="2">
           
                <Card style={{ width: '16rem' }} className="m-3 card">
                    <Card.Img variant="top" src={process.env.REACT_APP_DOMAIN + item?.mainImage.substr(6)} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text> Price: {item.salesPrice}</Card.Text>
                        {/* <Card.Text>
                        <Form.Label>Quantity</Form.Label>
                         <Form.Control type="number" placeholder='0' defaultValue="1"/> 
                        </Card.Text> */}
                         
                        
                        <Button className='cardButton' 
                        // onClick={()=>dispatch(increment())}
                          style={{ width: '100%', background: "white", color: "black", border: "1px solid grey" }}><i className="fa-solid fa-cart-plus" style={{ color: "#111213" }}> </i> Add</Button>
                        <Card.Text className='text-muted'> Detail <br/>
                            {item.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
        </Customelayout>
    </div>
  )
}
