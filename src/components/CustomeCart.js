import React from 'react'
import { Card, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const CustomeCart = ({slug, name, salesPrice,item, qty}) => {
  return (
    <div>
        <Card.Body>
                 <Card.Title>{name}</Card.Title>
                        <Card.Text> Price: {salesPrice}</Card.Text>
                        {/* <Card.Subtitle className="mb-2 text-muted"> Quantity: {quantity}</Card.Subtitle> */}
                        <Card.Text>Quantity:{qty}</Card.Text>
 {/* <Button className='cardButton' style={{ width: '100%', background: "white", 
 color: "black", border: "1px solid grey" }}><i className="fa-solid fa-cart-plus" style={{ color: "#111213" }}> </i> Add Cart</Button> */}

                        {/* <Card.Text className='text-muted'> Detail <br/>
                            {item.description}
                        </Card.Text> */}
                        
                    </Card.Body>
              
            
    </div>
  )
}
