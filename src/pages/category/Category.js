import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import{ Card, Row, Col, ButtonGroup, InputGroup, Form}from 'react-bootstrap';
import { DashboardCard } from '../dashboard/DashboardCard'
import {  Link, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { gettrendingProductAction } from '../dashboard/dashboardAction'
import { Customelayout } from '../../components/customlayout/Customelayout';
import { decrement, increment} from "../addcart/countSlice"
import { CustomeCart } from '../../components/CustomeCart';

export const Category = () => {
 
    const dispatch = useDispatch()
   
    // get the slug from url params using useParams
  const { slug} = useParams()



    //get all products from state useing useSelector and filter them using slug
    const { trendingProducts} = useSelector ((state)=> state.trending)
    const { categories} = useSelector ((state)=> state.category)

    const {cart} = useSelector((state)=>state.counter)

    const {_id} = categories.find(item=>item.slug === slug)

   


    // loop the filtered products
    // dispatch(gettrendingProductAction(slug))
    const filteredproduct = trendingProducts.length ? trendingProducts.filter(item =>item.parentCat === _id) : []
    
  

  return (
    <div>
        <Customelayout>
        <Row className="d-flex justify-content-around">
        {  filteredproduct?.map((item, index) => (
            <Col mt="2">
           <Link className='nav-link' to={`/product/${item?.slug}`}>
                <Card style={{width:'18rem',  height:'60vh'}} className="m-3 card">
                    <Card.Img  style={{width:'', h40vheight:"40vh"}}variant="top" src={item?.mainImage} />
                    <CustomeCart
                    key={item}
                    {...item}/>
                </Card>
                </Link>
            </Col>
        ))}
    </Row>
        </Customelayout>
    
    </div>
   

  )
}
