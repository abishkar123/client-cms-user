import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { CustomeInput } from '../../components/customeinput/CustomeInput';
import { Customelayout } from '../../components/customlayout/Customelayout';
import { Link } from 'react-router-dom';
import { postnewuser } from '../../helper/axioshelper';
import { toast } from 'react-toastify';



export const Register = () => {
  const [form, setForm] = useState({})

  const handleOnChange = (e)=>{
    const {name,value}=e.target;
    setForm({
     ...form,
     [name]:value,
    })
  }

  const handleOnSubit = async (e) => {
    e.preventDefault()
    const { confirmPassword, ...rest } = form
    if (confirmPassword !== rest.password) {
        toast.error("Password and confirm password do not match!")
        return
    }
    const { status, message } = await postnewuser(rest);
   
  
    toast[status](message);




}

  const inputes = [
    {
      label: "First Name",
      type: "text",
      name: "fname",
      placeholder: "Sam",
      required: true,
    },
    {
      label: "Last Name",
      type: "text",
      name: "lname",
      placeholder: "Smith",
      required: true,
    },
    {
      label: "Email",
      type: "text",
      name: "email", 
      placeholder: "raiabishkar@gmail.com",
    },
    {
      label: "Phonenumber",
      type: "number",
      name: " phonenumber",
      placeholder: "02345",
    },
    
    {
      label: "Password",
      type: "password",
      name:"password",
      placeholder: "********",
      required: true,
    },
    {
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      placeholder: "********",
      required: true,
  },
    
  ];
 
  return (
    <Customelayout>

    <div className='p-5 checkoutfonttext'> 
        <h2 className='text-center'>Register here</h2>
        <Container className='mt-3'>
        <Form className='' onSubmit={handleOnSubit}>
      <br/>
      

      <hr/>
     {inputes.map((item, i)=>(
      <CustomeInput key={i} {...item} onChange={handleOnChange} />
     ))}
     

      <div className='d-grid'>
      <Button variant='secondary' type="submit">
        SignUp
      </Button>
      <div className='text-end'><Link className='nav-link' to="/login">Login Here</Link></div>
      
      </div>
     
    </Form>
        </Container>

      

    </div>
    </Customelayout>
  )
}
