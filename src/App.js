import './App.css';
import { BrowserRouter as Browser,Route, Router,Routes } from 'react-router-dom';

import { Dashboard } from './pages/dashboard/Dashboard';

import { Login } from './pages/login/Login';


function App() {
  return (
    <div>
      <Browser>
      <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>}/>
       

      </Routes>
     </Browser>
      
          
    </div>
  );
}

export default App;
