import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import { Customelayout } from '../../components/customlayout/Customelayout';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion, Button } from 'react-bootstrap';
import { fetchpaymentsAction } from './CheckOutAction';
import { fetchorder, orderlistAction, postorderAction } from '../order/OrderAction';
import {loadStripe} from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import { StripePayment } from '../stripepayment/StripePayment';



export const CheckOutPage=()=> {
  const [selectedpayment, setselectedpayment] = useState("")

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

  const [order, setOrder]= useState([])
 const dispatch = useDispatch()
 const { cart } = useSelector((state) => state.counter)
 const { user } = useSelector((state) => state.user)
 const {paymentMethods} = useSelector((state)=>state.payments)

 const handleOnChange = (e)=>{
  const {name, value} = e.target
  const {fname, lname, phonenumber, email, _id}= user
  const userId = _id

  setOrder({
    ...order, userId,
    [name]:value,
    fname, lname, email, phonenumber

  

  })
 
 }

 const handleOnplaceoder = (e)=>{

  e.preventDefault();
  const paymentStatus="pending"
  const {paymentmethods,...rest} =order

  const paymentDetails ={
    paymentmethods, paymentStatus, totalAmount
  }

  const newOrder = {...rest, cart, paymentDetails}
  
  dispatch(postorderAction(newOrder))
 }



 const d = 9.89;
 const totalAmount = cart.reduce((acc, pp)=>{
  return acc + parseInt(pp.shopQty* pp.salesPrice)
},0)

const Qty = cart.reduce((acc, curr) => {
  return acc + parseInt(curr?.shopQty);
}, 0);

useEffect(() => {
  dispatch(fetchpaymentsAction())
  
}, [dispatch])




  return (
    <Customelayout>
        <div className='checkoutfont'>SECURE CHECKOUT </div>
      <hr/>

         <Form  className= 'p-3' onSubmit={handleOnplaceoder} >
         <Row>
          <Col className='boxcheckout mt-3'>
          <div className='checkoutfont'>Contact Details:</div>
      <Row className="mb-3 p-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label className='checkoutfonttext'>First Name:</Form.Label>
          <Form.Control
            required
            type="text"
            name='fname'
            value={user.fname}
            // placeholder="Abishkar"
            onChange={handleOnChange}
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label className='checkoutfonttext'>Last Name:</Form.Label>
          <Form.Control
            required
            type="text"
            name='lname'
            value={user.lname}
            // placeholder="Rai"
            onChange={handleOnChange}
          />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label className='checkoutfonttext'>Email:</Form.Label>
          <Form.Control
            required
            type="text"
            name='email'
            value={user.email}
            // placeholder="raiabishkar@gmail.com"
            onChange={handleOnChange}
          />
         
        </Form.Group>


        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label className='checkoutfonttext'>Mobile Number:</Form.Label>
          <Form.Control
        
            type="number"
            name='phonenumber'
            value={user.phonenumber}
            // placeholder="0416882288"
            onChange={handleOnChange}
          />
         
        </Form.Group>

      

      </Row>
  
      <div className='checkoutfont'>Address</div>

      <Row className="mb-3 p-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label className='checkoutfonttext'>Address Line:</Form.Label>
          <Form.Control type="text" placeholder="24/323 Forest Road"
           name="addressline" required 
           onChange={handleOnChange} 
           />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Adress.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label className='checkoutfonttext'>Town/City:</Form.Label>
          <Form.Control type="text" placeholder="Hurstville" name='town'
           onChange={handleOnChange}
          required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label className='checkoutfonttext'>State:</Form.Label>

                   <Form.Control as="select"  onChange={handleOnChange} required name="state">
                      <option value="">Please select</option>
                      <option value="ACT">Australian Capital Territory</option>
                      <option value="NSW">New South Wales</option>
                      <option value="NT">Northern Territory</option>
                      <option value="QLD">Queensland</option>
                      <option value="SA">South Australia</option>
                      <option value="TAS">Tasmania</option>
                      <option value="VIC">Victoria</option>
                      <option value="WA">Western Australia</option>

                    </Form.Control></Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label className='checkoutfonttext'>Posscode:</Form.Label>
          <Form.Control type="text" placeholder="2000" name='posscode'
           onChange={handleOnChange}
          required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid PossCode.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

       
      <Form.Group>
      <Form.Label className='checkoutfont' as="payment">Payment method:</Form.Label>
        {paymentMethods.map((item, index) => (
         <Accordion>
         <Accordion.Item eventKey={index}>
        <Accordion.Header>
        <Form.Check type="radio" label={item?.name}
        name="paymentmethods"
         value={item?.name}
         onChange={()=>setselectedpayment(item?.name)}
           required
          />
       </Accordion.Header>
       
      <Accordion.Body>
      { selectedpayment ===   "Credit Card" || selectedpayment === "Debit Card"
 ?  <Elements stripe={stripePromise}>
      <StripePayment/>
      </Elements>

      : <Button className='place_order mt-3' variant='dark' type='submit'>PROCEED TO SHIPPING</Button>
       
   }
      {/* {item?.description} */}
     
       </Accordion.Body>
      </Accordion.Item>

       </Accordion>
       ))}

       </Form.Group>
        </Col>
          
        <Col className='orderSummary '>
                                <h6 className='text-center mt-4'>Order Summary</h6>
                                <hr></hr>
                                <Row>
                                    <Col>Your Cart ({Qty} items)</Col>
                                    <Col className='text-end'> ${totalAmount}</Col>
                                </Row>
                                {cart.map((item, index) => (
                                    <Row style={{ color: "grey" }}>
                                        <Col> {item?.name} * {item?.shopQty}</Col>
                                        <Col className='text-end'> ${item?.salesPrice}</Col>
                                    </Row>


                                ))}
                                <Row style={{ color: "grey" }}>
                                    <Col> Delivery</Col>
                                    <Col className='text-end'>${d}</Col>
                                </Row>
                                <hr></hr>
                                <Row >
                                    <Col> total(with Gst)</Col>
                                    <Col className='text-end'> ${totalAmount + d}</Col>
                                    <p style={{ color: "grey", fontSize: "10px", margin_top: "10px" }}> Price, savings and bagging quantity shown are estimates only and you’ll be charged the final amount after your order is packed. A pending payment may be withheld when you place your order. Learn more </p>

                                </Row>
                                {/* <div>
                                    <input type="checkbox" id="myCheckbox" name="myCheckbox" value="myCheckboxValue" required />
                                    <label for="myCheckbox" style={{ fontsize: "2px" }}>I have read and agree to the  <a href='' className='text-end'>customer agreement</a>
                                    </label>

                                </div> */}

         </Col>
      
 
         </Row>
       
         
         </Form>

    </Customelayout>
   ); 
}

