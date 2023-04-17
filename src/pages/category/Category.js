import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import{ Card, Row, Col }from 'react-bootstrap';
import { DashboardCard } from '../dashboard/DashboardCard'
import { useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { gettrendingProductAction } from '../dashboard/dashboardAction'
import { Customelayout } from '../../components/customlayout/Customelayout';

export const Category = () => {
    const dispatch = useDispatch()
    const [ showslug, setshowslug] = useState();

    // get the slug from url params using useParams
  const { slug} = useParams()
  console.log(slug)

    //get all products from state useing useSelector and filter them using slug
    const { trendingProducts} = useSelector ((state)=> state.trending)
    const { categories} = useSelector ((state)=> state.category)

    const {_id} = categories.find(item=>item.slug === slug)

   


    // loop the filtered products
    // dispatch(gettrendingProductAction(slug))
    const filteredproduct = trendingProducts.length ? trendingProducts.filter(item =>item.parentCat === _id) : []
    console.log( filteredproduct, trendingProducts)
  

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
                        <Card.Subtitle className="mb-2 text-muted"> Quantity: {item.qty}</Card.Subtitle>
                        <Card.Text></Card.Text>
                        
                        <Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Text>
                        <Button className='cardButton' style={{ width: '100%', background: "white", color: "black", border: "1px solid grey" }}><i className="fa-solid fa-cart-plus" style={{ color: "#111213" }}> </i> Add</Button>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
        </Customelayout>
    
    </div>
   

  )
}
