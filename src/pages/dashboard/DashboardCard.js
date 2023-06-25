import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import{ Card, Row, Col }from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import { gettrendingProductAction } from './dashboardAction';
import { Link, useParams } from 'react-router-dom';
import { CustomeCart } from '../../components/CustomeCart';
import './dashboard.css'

 export const DashboardCard =({slug, name, salesPrice,item, qty})=> {
  const dispatch = useDispatch();
  const { trendingProducts} = useSelector ((state)=> state.trending)


  useEffect(()=>{
  dispatch (gettrendingProductAction())
  },[dispatch])
  
  return (
   
    <div>
        
     <Row className="d-flex justify-content-around ">

     {  trendingProducts?.map((item, index) => (
    <Col mt="2">
    
        <Link className='nav-link' to={`/product/${item.slug}`}>
            <figure title={item.name} style={{ width:'18rem',  height:'40vh'}} className="m-3  card">
            <img style={{width:'30vh',height:"40vh"}}  src={item.mainImage}/>

            <figcaption  >{item.name}"</figcaption> <figcaption> AU${item.salesPrice}</figcaption>


        </figure>
        </Link>
        </Col>
        ))}
        
        {/* {  trendingProducts?.map((item, index) => (
            <Col mt="2" >
           <Link className='nav-link' to={`/product/${item.slug}`}>
                <Card  style={{ width:'18rem',  height:'60vh'}} className="m-3 cardcss">
                    <Card.Img style={{width:'38vh', h40vheight:"40vh"}} variant="top" src={item.mainImage} />
                    <CustomeCart
                    key={item}
                    {...item}/>
                </Card>
                </Link>
            </Col>
        ))} */}
    </Row>
    
</div>
  );
}
