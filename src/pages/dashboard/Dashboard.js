import React from 'react'
import { Customelayout } from '../../components/customlayout/Customelayout'
import { DashboardCard } from './DashboardCard'
import {Row, Col, Container} from 'react-bootstrap'


export const Dashboard = () => {
  return (
    <div>
      <Customelayout>

        <div className=''>
          <h3 className='text-center text-balck'>NEW TRENDING SHOE</h3>
          <Container>
          <Row className='py-3'>
        <Col> <DashboardCard/></Col>
       
       </Row>
          </Container>
      

        </div>
      

      </Customelayout>
        
    </div>
  )
}
