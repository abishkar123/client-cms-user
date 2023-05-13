import React from 'react'
import { Customelayout } from '../../components/customlayout/Customelayout'
import { DashboardCard } from './DashboardCard'
import {Row, Col, Container} from 'react-bootstrap'
import { FrontImageCarousel } from './FrontImageCarousel'


export const Dashboard = () => {
  
  return (
    <div>
      <Customelayout>
        <div className='p-3 mt-3'>
        <FrontImageCarousel/>
        </div>
        
        <div className='mt-3'>
          <h3 className='text-center text-balck'>NEW ARRIVAL SHOE</h3>
          <Container>
          <Row className='py-3 mt-3'>
        <Col> <DashboardCard/></Col>
       
       </Row>
          </Container>
        </div>
      </Customelayout>
        
    </div>
  )
}
