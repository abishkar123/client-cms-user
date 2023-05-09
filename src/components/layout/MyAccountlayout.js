import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Customelayout } from '../customlayout/Customelayout'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Footer } from './Footer'

export const MyAccountlayout = ({children}) => {
  return (
    <div>
        <Header/>
        <main className='main'>
  <Container fluid>
    <Row>
      <Col xs="3"className=' side-bar bg-dark  text-light'>
      
        <Sidebar/>
         </Col>
      <Col>{children}</Col>
    </Row>
  </Container>
   
</main>
<Footer/>
    </div>
  )
}
