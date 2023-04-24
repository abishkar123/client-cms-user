import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'

export const Customelayout = ({children}) => {
  return (
    <div className='bodycolor'>
        <Header/>
       
        <Container className="main">{children}</Container>
      <Footer />
        
        
    </div>
  )
}
