'use client'
// 1. Import area
import React from 'react'
import { Select, MenuItem } from "@mui/material";
import { useState } from 'react';

// 1. Function Defination Area
 function Home() { // old way to define the function
  // 2.1 Hooks area
  const [selectedValue, setSelectedValue] = useState('');
  const [stockPrice, setStockPrice] = useState('');
  
  // 2.2 function 
  // New way to define the function in ES6 (2015)
  const handleChange = (event:any) => { 
             // object.property.property
    console.log(event.target.value);
    
    // This is call promiseChain
    fetch('/api/getstockprice').then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data);
      console.log(data.price);
      setStockPrice(data.price);
    }).catch((err)=>{
      console.error('Error fetching stock price:', err);
    }).finally(()=>{

    }) 
    
    // Now call the api

    // setSelectedValue(event.target.value)
  }

  return (
    <main className="flex min-h-screen1 flex-col items-center justify-between p-24">
      <h1 className='p-0 pb-10 m-0'>Current price of below stock is {stockPrice}</h1>
      <Select value={selectedValue} onChange={handleChange}>
        <MenuItem value="idfc">IDFC Bank</MenuItem>
        <MenuItem value="hdfc">HDFC Bank</MenuItem>
        <MenuItem value="icici">ICICI</MenuItem>
      </Select>
    </main>
  )
}

// 3. export area
export default Home;