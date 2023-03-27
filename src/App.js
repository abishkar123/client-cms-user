import './App.css';
import { BrowserRouter as Browser,Route, Router,Routes } from 'react-router-dom';
import { Register } from './pages/register/Register';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Footer } from './components/layout/Footer';


function App() {
  return (
    <div>
      <Browser>
      <Routes>
      <Route path="/" element={<Dashboard/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/footer" element={<Footer/>}/>


      </Routes>
     </Browser>
      
          
    </div>
  );
}

export default App;
