import './App.css';
import { BrowserRouter as Browser,Route, Router,Routes } from 'react-router-dom';

import { Dashboard } from './pages/dashboard/Dashboard';

import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { Category } from './pages/category/Category';


function App() {
  return (
    <div>
      <Browser>
      <Routes>

      <Route path="/" element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>


  
      <Route path="/category/:slug" element={<Category/>}/>
       

      </Routes>
     </Browser>
      
          
    </div>
  );
}

export default App;
