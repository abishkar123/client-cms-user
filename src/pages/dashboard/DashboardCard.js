import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import{ Card, Row, Col }from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import { gettrendingProductAction } from './dashboardAction';
import { Link, useParams } from 'react-router-dom';
import { CustomeCart } from '../../components/CustomeCart';

 export const DashboardCard =({slug, name, salesPrice,item, qty})=> {
  const dispatch = useDispatch();
  const { trendingProducts} = useSelector ((state)=> state.trending)


  useEffect(()=>{
  dispatch (gettrendingProductAction())
  },[dispatch])
  
  return (
   
    <div>
        
     <Row className="d-flex justify-content-around">
        {  trendingProducts?.map((item, index) => (
            <Col mt="2">
           <Link className='nav-link' to={`/product/${item.slug}`}>
                <Card style={{ width: '16rem' }} className="m-3 card">
                    <Card.Img variant="top" src={process.env.REACT_APP_DOMAIN + item?.mainImage.substr(6)} />
                    <CustomeCart
                    key={item}
                    {...item}/>
                </Card>
                </Link>
            </Col>
        ))}
    </Row>
    
</div>
  );
}
