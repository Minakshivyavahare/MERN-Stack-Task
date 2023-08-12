import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
       <Route path='/' element={<Login/>}/> 
       <Route path='/dashboard' element={<Dashboard/>}/> 
      
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
