import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import{ Card, Row, Col }from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import { gettrendingProductAction } from './dashboardAction';
import { useParams } from 'react-router-dom';

 export const DashboardCard =()=> {
  const dispatch = useDispatch();
  const { trendingProducts} = useSelector ((state)=> state.trending)


  useEffect(()=>{
  dispatch (gettrendingProductAction())
  },[dispatch])
  
  return (
   
    <div>
    <Row className="d-flex justify-content-around">
        { trendingProducts.map((item, index) => (
            <Col mt="2">
              {""}
                <Card style={{ width: '16rem' }} className="m-3 card">
                    <Card.Img variant="top" src={process.env.REACT_APP_DOMAIN + item?.mainImage.substr(6)} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text> Price: {item.salesPrice}</Card.Text>
                        <Card.Subtitle className="mb-2 text-muted"> Quantity: {item.qty}</Card.Subtitle>
                        <Card.Text></Card.Text>
                        
                        
                        <Button className='cardButton' style={{ width: '100%', background: "white", color: "black", border: "1px solid grey" }}><i className="fa-solid fa-cart-plus" style={{ color: "#111213" }}> </i> Add</Button>
                        <Card.Text className='text-muted'> Detail <br/>
                            {item.description}
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
</div>
  );
}
