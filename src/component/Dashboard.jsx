import React, { useState } from 'react'
import { Button, Container, Nav, Navbar, Table } from 'react-bootstrap'

const Dashboard = () => {
   const[RM1,setRM1] =useState(0)
   const[RM2,setRM2]=useState(0)
   const[FP1,setFP1]=useState(0)
   const[FP2,setFP2]=useState(0)

   const decrementRaw = () =>{
    if(RM1 > 0){
        if(RM1 > 0){
            setRM1(RM1-1) 
        }
        else{
            alert("value is less than 0")
        }
           
    }
   }
   const incrementRaw = () =>{
    setRM1(RM1+1)
   }
   const decrementRaw1 = () =>{
    if(RM2 > 0){
        setRM2(RM2-1)
    }
   }
   const incrementRaw1 = () =>{
    setRM2(RM2+1)
   }
   const decrementProduct = () =>{
    if(FP1 > 0){
        setFP1(FP1-1)
    }
    else{
        alert("value is less than 0")
    }
   }
   const incrementProduct = () =>{   
   if(RM2 === 5 && RM1 === 8){
    setRM1(0)
    setRM2(0)
    setFP1(FP1+1);
    
   } 
   alert("Stock is not Available")
  
   }

   const incrementProduct1 = () =>{
    setFP1(FP1+1)
    if(RM1 === 7 && RM2 === 10){
    setRM1(0)
    setRM2(0)

    alert("Stock is not Available")
   } 
  
   }
    
   const decrementProduct1 = () =>{
    if(FP1 > 0){
        setFP1(FP1-1)
    }
   }
   
  
   

  return (
    <div>
         <Navbar bg="primary" data-bs-theme="light" >
        <Container>
          <Navbar.Brand href="">AM WEBSTACK</Navbar.Brand>
          
        </Container>
      </Navbar>
      <br/>
        <h4>Raw Material(RM)</h4>
        <Table striped bordered hover variant="warning" style={{width:'20rem',marginLeft:'32rem'}}>
            <thead>
               <tr>
                <th>Raw Material</th>
                <th>Count</th>
                <th></th>   
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>RM-1</td>
                <td>{RM1}</td>
                <td><Button onClick={decrementRaw}>-</Button></td>
                <td><Button onClick={incrementRaw}>+</Button></td>
            </tr>
            <tr>
                <td>RM-2</td>
                <td>{RM2}</td>
                <td><Button onClick={decrementRaw1}>-</Button></td>
                <td><Button onClick={incrementRaw1}>+</Button></td>
            </tr>
           
            </tbody>
            
           
        </Table>
        <br/>
        <h4>Finish Product(FP)</h4>
        <Table striped bordered hover variant="warning" style={{width:'20rem',marginLeft:'32rem'}}>
            <thead>
            <tr>
                <th>Product name</th>
                <th>Count</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
           <tbody>
            <tr>
                <td>FP-1</td>
                <td>{FP1}</td>
                <td><Button onClick={decrementProduct}>-</Button></td>
                <td><Button onClick={incrementProduct}>+</Button></td>
            </tr>
            <tr>
            <td>FP-2</td>
                <td>{FP2}</td>
                <td><Button onClick={decrementProduct1}>-</Button></td>
                <td><Button onClick={incrementProduct1}>+</Button></td>
            </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default Dashboard