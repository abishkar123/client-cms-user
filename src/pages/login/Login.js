import{ Button,Form, Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Customelayout } from '../../components/customlayout/Customelayout';


export const Login = () => {
  return (
    <Customelayout>
        <Container>
            <Row className='mt-5'>
                <Col className='md-6 p-5  reg-info d-flex align-items-center d-none d-md-block'>
                <div className='systemintro'>
               
              <ul>
              <h2>New to SnkersCrazy</h2>
              <hr/>
            
                Get our latest prouduct recommendation for you.
                Personalise your SnkersCrazy experience on Mobile and Desktop.<br/>
                Manage you order and preferences.<br/>
                Access your saved items.<br/>
                Create and share gift lists.
                </ul>
                
                <div className="d-grid p-2">
                  <Button variant="secondary" type="submit"> <Link className='nav-link' to="/register">Register for an account</Link>
                  </Button>
                </div>
              
              
              
            </div>
                </Col>
                <Col className='bg-secondary p-5'>
                    <div className='bg-light p-4 rounded'>
                    <div className='regpage'>
     <Form>
      <h3>Login </h3>
      <br/>
      <h4>Existing Customer</h4>

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
      <Button variant='secondary' type="submit">
        Sign In
      </Button>
      </div>
     
    </Form>
    
        </div>
                    </div>
                </Col>

            </Row>
      
        </Container>
      
    </Customelayout>
    
  )
}
