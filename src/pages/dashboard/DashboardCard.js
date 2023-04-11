import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector} from 'react-redux';
import { gettrendingProductAction } from './dashboardAction';

 export const DashboardCard =()=> {
  const dispatch = useDispatch();
  const { trendingProducts} = useSelector ((state)=> state.trending)

  console.log(trendingProducts)

  useEffect(()=>{
  dispatch (gettrendingProductAction())
  },[dispatch])
  
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      {trendingProducts?.length > 0 && 
      trendingProducts.map((item, i)=>(
        <Card.name>{item.name}</Card.name>

      )
  
      )}


      <Button variant="primary">Add Cart</Button>
    </Card.Body>
  </Card>
  );
}
