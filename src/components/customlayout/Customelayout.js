import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'

export const Customelayout = ({children}) => {
  return (
    <div>
        <Header/>
        
        <Container className="main">{children}</Container>
      <Footer />
        
        
    </div>
  )
}
