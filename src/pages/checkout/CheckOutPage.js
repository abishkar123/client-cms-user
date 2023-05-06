import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import { Customelayout } from '../../components/customlayout/Customelayout';
import { useSelector } from 'react-redux';


export const CheckOutPage=()=> {

const {paymentMethods} = useSelector((state)=>state.payments)
console.log(paymentMethods)
  return (
    <Customelayout>
        <div className='checkoutfont'>CheckOut Page </div>
        <hr/>
         <Form  className='boxcheckout p-3'
        //  noValidate validated={validated} 
        //  onSubmit={handleSubmit}
         >

        <div className='checkoutfont'>Contact Details:</div>
      <Row className="mb-3 p-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label className='checkoutfonttext'>First Name:</Form.Label>
          <Form.Control
            required
            type="text"
            name='firstname'
            placeholder="Abishkar"
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label className='checkoutfonttext'>Last Name:</Form.Label>
          <Form.Control
            required
            type="text"
            name='lastname'
            placeholder="Rai"
           
          />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label className='checkoutfonttext'>Email:</Form.Label>
          <Form.Control
            required
            type="text"
            name='email'
            placeholder="raiabishkar@gmail.com"
           
          />
         
        </Form.Group>


        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label className='checkoutfonttext'>Mobile Number:</Form.Label>
          <Form.Control
            required
            type="number"
            name='mobilenumber'
            placeholder="0416882288"
           
          />
         
        </Form.Group>

      

      </Row>
  
      <div className='checkoutfont'>Address</div>

      <Row className="mb-3 p-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label className='checkoutfonttext'>Address Line:</Form.Label>
          <Form.Control type="text" placeholder="24/323 Forest Road" name="addressline"required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Adress.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label className='checkoutfonttext'>Town/City:</Form.Label>
          <Form.Control type="text" placeholder="Hurstville" name='state' required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label className='checkoutfonttext'>State:</Form.Label>
          <Form.Control type="text" placeholder="New South Wales" name='state' required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label className='checkoutfonttext'>Posscode:</Form.Label>
          <Form.Control type="text" placeholder="2000" name='posscode' required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid PossCode.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
     
         </Form> 

         <Form className='boxcheckout p-3'>
         <div className='checkoutfont'>Payment Methods:</div>
         <Row>

         </Row>

         </Form>


 
    </Customelayout>
   ); 
}

