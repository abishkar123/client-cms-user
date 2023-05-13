import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

export const Userdashinput = ({label, ...rest}) => {
  return (
    <div>
        <InputGroup className="mb-3" controlId="formBasicEmail">
        <InputGroup.Text>{label} </InputGroup.Text> <Form.Control {...rest} />
        
       
      </InputGroup>


    </div>
  )
}
