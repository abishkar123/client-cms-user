import './App.css';
import { BrowserRouter as Browser,Route, Router,Routes } from 'react-router-dom';

import { Dashboard } from './pages/dashboard/Dashboard';

import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { Category } from './pages/category/Category';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { gettrendingProductAction } from './pages/dashboard/dashboardAction';
import { Product } from './pages/product/Product';
import { YourCart } from './pages/order/YourCart';
import { Cart } from './pages/addcart/Cart';
import  { CheckOutPage } from './pages/checkout/CheckOutPage';
import { NewAccVerify } from './pages/verfiyemail/NewAccVerify';
import { PrivateRouter } from './components/private-router/PrivateRouter';
import { MyAccount } from './pages/myaccount/MyAccount';
import { UserDashboard } from './pages/userdashboard/UserDashboard';
import Payment from './pages/payment/Payment';
import { ToastContainer } from 'react-toastify';






function App() {
  const dispatch = useDispatch()
  useEffect(()=>{

  dispatch( gettrendingProductAction())
  },[dispatch])
  return (
    <div>
      <Browser>
      <Routes>

      <Route path="/" element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="verify" element={<NewAccVerify/>} />



  
      <Route path="/category/:slug" element={
       <Category/>
      }/>
      <Route path="/product/:slug" element={ 
       <Product/> 
      }/>
       {/* <Route path="/yourcart" element={<YourCart/>}/>  */}
      <Route path="/cart" element={
        <Cart/>
      }/>

      <Route path="/checkoutpage" element={
      <CheckOutPage/>
        
      }/>
      
      <Route path="/paymentpage" element={
      <Payment/>
        
      }/>
      
   
   <Route path="myaccount" element={<MyAccount/>} />
   <Route path="userdashboard" element={<UserDashboard/>} />

       

      </Routes>
     </Browser>
     <ToastContainer/>
       
          
    </div>
  );

}

export default App;
