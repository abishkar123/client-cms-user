import React, { useEffect } from 'react'
import { MyAccountlayout } from '../../components/layout/MyAccountlayout'
import {Container, Form, Row, Col
} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import { fetchorder } from '../order/OrderAction'
import { CustomeInput } from '../../components/customeinput/CustomeInput'
import { Userdashinput } from '../../components/customeinput/Userdashinput'


export const UserDashboard = () => {
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.user)
    console.log(user)
   

    // const filtereduser = order.length? order.find((item)=>item.userId!==item._id):[]
    
    // console.log(filtereduser)
  
    useEffect(()=>{
      dispatch(fetchorder())
     
    },[dispatch])

    const inputes = [
      {
        label: "First Name",
        type: "text",
        name: "fname",
        placeholder: user.fname,
       
        required: true,
      },
      {
        label: "Last Name",
        type: "text",
        name: "lname",
        placeholder: user.lname,
        required: true,
      },
      {
        label: "Email",
        type: "text",
        name: "email", 
        placeholder:user.email,
      },
      {
        label: "Phonenumber",
        type: "number",
        name: " phonenumber",
        placeholder: user.phonenumber,
      },
      {
        label: "Address line",
        type: "text",
        name: "addressline",
        placeholder: user.addressline,
      },
      {
        label: "Town/City",
        type: "text",
        name: "town",
        placeholder: user.town,
      },

      {
        label: "State",
        type: "text",
        name: "state",
        placeholder: user.state,
      },

      {
        label: "Posscode",
        type: "number",
        name: "posscode",
        placeholder: user.posscode,
      },
      

    
      
     
      
    ];
  
  return (
    <MyAccountlayout>
        <h3 className='py-3'>MY ACCOUNT</h3>
        <hr/>
        <Container>
            <Form className='checkoutfonttext mt-3 p-2' >
              
            {inputes.map((item, i)=>(
      <Userdashinput key={i} {...item} 
      // onChange={handleOnChange} 
      />
     ))}   
             
            </Form>
        
        <hr/>

        </Container>
    </MyAccountlayout>
  )
}
