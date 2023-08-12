import React, { useState } from 'react'
import data from '../Data.json';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardGroup, Form } from 'react-bootstrap';

const Login = () => {
    
   const navigate = useNavigate();
    const [username,setUsername]=useState('');
    const[password,setPassword]=useState('')
    const[error,setError]=useState('')
    
    
    const handleLogin = () =>{
      const user = data.find(
        (user) => user.username === username && user.password === password
      )
      if(user){
        
        alert('Logged in successfully');
         navigate('/dashboard')
      }else{
        alert('Please try again !! Invalid login and Password')
      }
    }
    
    
  return (
    <div>
      
        <h4 style={{color:'blue'}}>Login Form</h4>
      
        <input type='text' placeholder='enter username' value={username}
        onChange={(e) => setUsername(e.target.value)} style={{border:'2px solid black'}}/>
        <br/>
        <br/>
        <input type='password' placeholder='enter password' value={password}
        onChange={(e) => setPassword(e.target.value)} style={{border:'2px solid black'}}/>
        <br/>
        <br/>
        <Button variant="primary" onClick={handleLogin}>Login</Button>
        
      
    </div>
  )
}

export default Login