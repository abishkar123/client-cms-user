import React from 'react'
import { Customelayout } from '../../components/customlayout/Customelayout'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { setRemoveFromCard, setUpdateCart } from './countSlice'
import { Link } from 'react-router-dom'

export const Cart = () => {
const dispatch = useDispatch();
   
  const handleRemove = (id) => {
    dispatch(setRemoveFromCard(id))
}
const handleOnQty = (id, e) => {
    const { name, value } = e.target;
    console.log(id)
    dispatch(setUpdateCart({ id, name, value }))

}
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
            {cart?.map ((item, i )=>(
                 
            <Row className='py-3 box'>
        
           <Col className='shopping'  style={{borderRadius:"2rem"}}>
           <img src={item?.mainImage}
             width="250px" alt="photos" />
           </Col>
        
           <Col> 
           <div> <h4>{item.name}</h4></div>
           <div className='d-flex justify-content-around'>
           <input type="number" name="shopQty" defaultValue={item?.shopQty} min={1} max={item?.qty} inputMode="numeric" style={{ appearance: 'textfield' }} onClick={(e) => handleOnQty(item?._id, e)} />
           <span style={{ textDecoration: 'underline', cursor: 'pointer', color: 'grey' }} onClick={() => handleRemove(item?._id)}>Remove</span>
          </div>
           </Col> 
           
           
           
              </Row> 
              
            
            ))}
        <div className=''> <Row>
       <Col> <h3>Estimated Total:{""} ${price}</h3></Col>
      </Row></div>
    

            </Form>


    <div className='d-grid py-3'>
<Link to="/checkoutpage">   <Button  type='submit' variant='dark'> {""}CheckOut </Button></Link>
  
</div>


            </Container>

        </Customelayout>
    </div>
  )
}
