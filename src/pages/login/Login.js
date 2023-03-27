import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Customelayout } from '../../components/customlayout/Customelayout';

export const Login = () => {
  return (
    <Customelayout>
      <div className='regpage'>
     <Form>
      <h3 className='text-center'> Register Page: </h3>
      <hr/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className='d-grid'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
     
    </Form>
    
        </div>
    </Customelayout>
    
  )
}
