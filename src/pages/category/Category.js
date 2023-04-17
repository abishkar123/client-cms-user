import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import{ Card, Row, Col, ButtonGroup, InputGroup, Form}from 'react-bootstrap';
import { DashboardCard } from '../dashboard/DashboardCard'
import {  useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { gettrendingProductAction } from '../dashboard/dashboardAction'
import { Customelayout } from '../../components/customlayout/Customelayout';

export const Category = () => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
    };
  
    const decrementQuantity = () => {
      setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const dispatch = useDispatch()
    const [ showslug, setshowslug] = useState();

    // get the slug from url params using useParams
  const { slug} = useParams()

//   useEffect(()=>{
//     if(!filteredproduct.length)
//     dispatch(filteredproduct())
// }, [filteredproduct])
 

    //get all products from state useing useSelector and filter them using slug
    const { trendingProducts} = useSelector ((state)=> state.trending)
    const { categories} = useSelector ((state)=> state.category)

    const {_id} = categories.find(item=>item.slug === slug)

   


    // loop the filtered products
    // dispatch(gettrendingProductAction(slug))
    const filteredproduct = trendingProducts.length ? trendingProducts.filter(item =>item.parentCat === _id) : []
    
  

  return (
    <div>
        <Customelayout>
        <Row className="d-flex justify-content-around">
        { filteredproduct?.map((item, index) => (
            <Col mt="2">
           
                <Card style={{ width: '16rem' }} className="m-3 card">
                    <Card.Img variant="top" src={process.env.REACT_APP_DOMAIN + item?.mainImage.substr(6)} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text> Price: {item.salesPrice}</Card.Text>
                        <Card.Text>
                        <Form.Label>Quantity</Form.Label>
                         <Form.Control type="number" placeholder='0' defaultValue="1"/>

                           
                            {/* Quantity <br/>
                            <Button onClick={()=>decrementQuantity()}>-</Button>

                          <Button onClick={()=>incrementQuantity()}>+</Button> */}
                        </Card.Text>
                         
                        
                        <Button className='cardButton' style={{ width: '100%', background: "white", color: "black", border: "1px solid grey" }}><i className="fa-solid fa-cart-plus" style={{ color: "#111213" }}> </i> Add</Button>
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
